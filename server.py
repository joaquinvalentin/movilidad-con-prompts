"""
FastMCP quickstart example.

cd to the `examples/snippets/clients` directory and run:
    uv run server fastmcp_quickstart stdio
"""

import json
from datetime import datetime
from typing import List, Dict, Any, Optional
from mcp.server.fastmcp import FastMCP
import utils
import requests

mcp = FastMCP("Movilidad Con Prompts", dependencies=["requests"])

@mcp.tool()
def consultar_omnibus_cercanos(direccion: str, tiempo: Optional[str] = None, radio: float = 200) -> Any:
    """
    Consulta los proximos omnibus cercanos a una direccion.
    Args:
        direccion: La direccion a consultar en lenguaje natural. Si la direccion es compuesta debe ser en formato "calle A esquina calle B".
        tiempo: La fecha y hora en formato "YYYY-MM-DD HH:MM" para consultar los horarios. Por defecto es la fecha y hora actual.
        radio: El radio en metros para buscar omnibus cercanos. Por defecto 200 metros. Si no encuentra omnibus cercanos, se debe aumentar el radio.
    Returns:
        Los omnibus que estan cercanos a pasar por las paradas cercanas a la direccion.
        busstopId: El id de la parada. Es un id interno, no se debe mostrar al usuario.
        calle: La calle de la parada.
        esquina: La otra calle de la parada.
        horarios:[
             //Los horarios de los omnibus que pasan por la parada.
            {    
                "hora": La hora en formato 24 horas.
                "time": El timestamp en milisegundos.
                "destino": El destino del omnibus.
                "linea": La linea del omnibus.
                "minutos": Los minutos restantes para que el omnibus llegue a la parada.
                "real": Si el horario es real o estimado.
            }
        ]
    """
    if tiempo is None:
        tiempo = datetime.now()
    else:
        tiempo = datetime.strptime(tiempo, "%Y-%m-%d %H:%M")

    data_direccion = utils.geocodificar_direccion(direccion)
    paradas_cercanas = utils.get_stops_within_radius(data_direccion['coordenadas']['latitud'], data_direccion['coordenadas']['longitud'], radio)

    resultados = []
    for parada in paradas_cercanas:
        horarios = utils.get_next_buses_at_stop(parada['busstopId'], utils.get_codigo_dia(tiempo), tiempo.strftime("%H:%M"))

        resultados.append({
            'busstopId': parada['busstopId'],
            'calle': parada['street1'],
            'esquina': parada['street2'],
            'horarios': horarios
        })

    return resultados

def consultar_rutas_omnibus(direccionOrigen: str, direccionDestino: str) -> Any:
    """
    Consulta las rutas de omnibus entre dos direcciones.
    Args:
        direccionOrigen: La direccion de origen en lenguaje natural, con el formato "<calle> <numero de puerta>" o "<calle> esquina <calle>".
        direccionDestino: La direccion de destino en lenguaje natural, con el formato "<calle> <numero de puerta>" o "<calle> esquina <calle>".
    Returns:
        Las rutas de omnibus entre las dos direcciones. 
        Cada ruta es un array de tramos, en el que cada tramo representa un trayecto a recorrer en un omnibus.
        Cada tramo tiene descripción, parada de origen, parada de destino, caminar origen, caminar destino.
        Caminar origen y caminar destino son la distancia a recorrer en metros.
    """
    
    headers = {
        "sec-ch-ua-platform": "macOS",
        "Referer": "https://m.montevideo.gub.uy/",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138"',
        "DNT": "1",
        "sec-ch-ua-mobile": "?0"
    }

    direccionOrigenPrimerParam, direccionOrigenSegundoParam, tipoOrigen = utils.get_ids_para_direccion(direccionOrigen)
    direccionDestinoPrimerParam, direccionDestinoSegundoParam, tipoDestino = utils.get_ids_para_direccion(direccionDestino)

    base_url = "https://api.montevideo.gub.uy/comoirRest/rest/comoir/bus/{tipoOrigen}/{tipoDestino}"

    params = [
        ("paramOrigen", direccionOrigenPrimerParam),
        ("paramOrigen", direccionOrigenSegundoParam),
        ("paramDestino", direccionDestinoPrimerParam),
        ("paramDestino", direccionDestinoSegundoParam)
    ]

    response = requests.get(base_url, params=params, headers=headers)
    return utils.parse_tramos_ordenados(response.json())

@mcp.tool()
def consultar_eta_tiempo_real(parada_id: int = None, lineas: list = None, cantPorLinea: int = 3) -> Any:
    """
    Consulta los ETAs (tiempo estimado de llegada) en tiempo real de las líneas de ómnibus.
    Puede consultar por dirección (busca paradas cercanas) o por ID de parada específica.
    
    Args:
        parada_id: ID específico de la parada a consultar).
        lineas: Lista de líneas específicas a consultar (ej: ["181", "407"]). Si no se especifica, consulta todas las líneas disponibles.
        cantPorLinea: Cantidad máxima de próximos buses por línea. Por defecto 3.
    
    Returns:
        Información de ETAs en tiempo real con líneas, destinos y tiempos de llegada.
    """
    resultados = []
    
    etas = utils.get_eta_lineas(parada_id, lineas, cantPorLinea)
    if etas:
        parada_info = None
        for parada in utils.PARADAS:
            if parada['busstopId'] == parada_id:
                parada_info = parada
                break
        
        resultado = {
            'parada_id': parada_id,
            'calle': parada_info['street1'] if parada_info else f"Parada {parada_id}",
            'esquina': parada_info['street2'] if parada_info else "",
            'coordenadas': parada_info['location']['coordinates'] if parada_info else None,
            'etas': etas
        }
        resultados.append(resultado)
    else:
        return "No se encontraron ETAs en tiempo real"

    return resultados
