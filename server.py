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

mcp = FastMCP("Movilidad Con Prompts", dependencies=["requests"])

@mcp.tool()
def consultar_omnibus_cercanos(direccion: str, tiempo: Optional[str] = None, radio: float = 300) -> Any:
    """
    Consulta los proximos omnibus cercanos a una direccion.
    Args:
        direccion: La direccion a consultar en lenguaje natural.
        tiempo: La fecha y hora en formato "YYYY-MM-DD HH:MM" para consultar los horarios. Por defecto es la fecha y hora actual.
        radio: El radio en metros para buscar omnibus cercanos. Por defecto 300 metros.
    Returns:
        Los omnibus que estan cercanos a pasar por las paradas cercanas a la direccion.
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
            'calle': parada['street1'],
            'esquina': parada['street2'],
            'horarios': horarios
        })

    return resultados

@mcp.tool()
def consultar_rutas_omnibus(direccionOrigen: str, direccionDestino: str) -> Any:
    """
    Consulta las rutas de omnibus entre dos direcciones.
    Args:
        direccionOrigen: La direccion de origen en lenguaje natural.
        direccionDestino: La direccion de destino en lenguaje natural.
    Returns:
        Las rutas de omnibus entre las dos direcciones. 
        Cada ruta es un array de tramos, en el que cada tramo representa un trayecto a recorrer en un omnibus.
        Cada tramo tiene descripción, parada de origen, parada de destino, caminar origen, caminar destino.
        Caminar origen y caminar destino son la distancia a recorrer en metros.
    """
    base_url = "https://api.montevideo.gub.uy/comoirRest/rest/comoir/bus/DIRECCION/DIRECCION"

    headers = {
        "sec-ch-ua-platform": "macOS",
        "Referer": "https://m.montevideo.gub.uy/",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138"',
        "DNT": "1",
        "sec-ch-ua-mobile": "?0"
    }

    direccionOrigenDic = utils.geocodificar_direccion(direccionOrigen)
    direccionOrigenNumPuerta =  direccionOrigenDic['numero_puerta']
    direccionOrigenNombreCalle = direccionOrigenDic['nombre_calle']
    direccionOrigenStreetId = utils.get_street_number_comoir(direccionOrigenNombreCalle)

    direccionDestinoDic = utils.geocodificar_direccion(direccionDestino)
    direccionDestinoNumPuerta = direccionDestinoDic['numero_puerta']
    direccionDestinoNombreCalle = direccionDestinoDic['nombre_calle']
    direccionDestinoStreetId = utils.get_street_number_comoir(direccionDestinoNombreCalle)

    params = [
        ("paramOrigen", direccionOrigenStreetId),
        ("paramOrigen", direccionOrigenNumPuerta),
        ("paramDestino", direccionDestinoStreetId),
        ("paramDestino", direccionDestinoNumPuerta)
    ]

    response = requests.get(base_url, params=params, headers=headers)
    return utils.parse_tramos_ordenados(response.json())
