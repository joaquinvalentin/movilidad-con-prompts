from datetime import datetime
from typing import Any, Optional
from fastmcp import FastMCP
import requests
import utils
from como_ir import utils as comoir_utils

mcp = FastMCP("Movilidad Con Prompts", dependencies=["requests"])

@mcp.tool()
def consultar_horarios_programados_omnibus(direccion: str, tiempo: Optional[str] = None, radio: float = 200) -> Any:
    """
    Consulta los proximos omnibus cercanos a una direccion. Puede ser utilizada para obtener las paradas cercanas a una direccion, y para obtener
    los horarios programados de los omnibus que pasan por dichas paradas, asi como la frecuencia de los mismos. Utilizar para obtener los horarios 
    de los omnibus para un recorrido. ESTOS HORARIOS SON PROGRAMADOS, NO SON EN TIEMPO REAL.
    Args:
        direccion: La direccion a consultar en lenguaje natural. Si la direccion es compuesta debe ser en formato "calle A esquina calle B".
        tiempo: La fecha y hora en formato "YYYY-MM-DD HH:MM" para consultar los horarios. Por defecto es la fecha y hora actual.
        radio: El radio en metros para buscar omnibus cercanos. Por defecto 200 metros. Si no encuentra omnibus cercanos, se debe aumentar el radio.
    Returns:
        Los omnibus que estan cercanos a pasar por las paradas cercanas a la direccion.
        busstopId: El id de la parada. Es un id interno, no se debe mostrar al usuario.
        calle: La calle de la parada.
        esquina: La otra calle de la parada.
        horarios: [
            {    
                "hora": La hora en formato 24 horas.
                "time": El timestamp en milisegundos.
                "destino": El destino del omnibus.
                "linea": La linea del omnibus.
                "minutos": Los minutos restantes para que el omnibus llegue a la parada.
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

@mcp.tool()
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

    base_url = f"https://api.montevideo.gub.uy/comoirRest/rest/comoir/bus/{tipoOrigen}/{tipoDestino}"

    params = [
        ("paramOrigen", direccionOrigenPrimerParam),
        ("paramOrigen", direccionOrigenSegundoParam),
        ("paramDestino", direccionDestinoPrimerParam),
        ("paramDestino", direccionDestinoSegundoParam)
    ]

    response = requests.get(base_url, params=params, headers=headers)
    return utils.parse_tramos_ordenados(response.json())

@mcp.tool()
def consultar_eta_tiempo_real(parada_id: int, lineas: list = None) -> Any:
    """
    Consulta los ETAs (tiempo estimado de llegada) en tiempo real de las líneas de ómnibus.
    Puede consultar por dirección (busca paradas cercanas) o por ID de parada específica.
    Utilizar en los casos donde el usuario quiere saber cuando pasa el proximo omnibus por una parada. 
    Por ejemplo: "Cuando pasa el omnibus 181 por la parada de Bulevar Espana esquina Obligado?"

    
    Args:
        parada_id: ID específico de la parada a consultar. Este parametro puede ser obtenido utilizando la herramienta consultar_horarios_programados_omnibus.
        lineas: Lista de líneas específicas a consultar (ej: ["181", "407"]). Si no se especifica, consulta todas las líneas disponibles.
    
    Returns:
        Información de ETAs en tiempo real con líneas, destinos y tiempos de llegada.
    """
    resultados = []
    if lineas is None:
        lineas = []
    
    etas = utils.get_eta_lineas(parada_id, lineas)
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


@mcp.tool()
def buscar_lugares_y_vias(termino_busqueda: str) -> Any:
    """
    Busca lugares de interés y vías (calles) que coincidan con el término de búsqueda.
    
    Args:
        termino_busqueda: Texto a buscar (ej: "18 de julio", "pocitos", "shopping")
        
    Returns:
        Lista de ubicaciones encontradas con código, nombre, tipo y subtipo
    """
    return comoir_utils.buscar_lugares_y_vias(termino_busqueda)

@mcp.tool()
def buscar_esquinas_por_via(codigo_via: str, termino_esquina: str) -> Any:
    """
    Busca calles que se cruzan con una vía específica para formar esquinas.
    
    Args:
        codigo_via: Código de la vía principal (obtenido de buscar_lugares_y_vias)
        termino_esquina: Nombre de la calle que cruza
        
    Returns:
        Lista de vías que forman esquina con la vía principal
    """
    return comoir_utils.buscar_esquinas_por_via(codigo_via, termino_esquina)

@mcp.tool()
def obtener_coordenadas_esquina(codigo_via1: str, codigo_via2: str) -> Any:
    """
    Obtiene las coordenadas exactas de una esquina específica.
    
    Args:
        codigo_via1: Código de la primera vía
        codigo_via2: Código de la segunda vía
        
    Returns:
        Información completa de la esquina con coordenadas y geometría
    """
    return comoir_utils.obtener_coordenadas_esquina(codigo_via1, codigo_via2)

@mcp.tool()
def obtener_coordenadas_direccion(codigo_via: str, numero: str) -> Any:
    """
    Obtiene las coordenadas de una dirección específica (calle + número).
    
    Args:
        codigo_via: Código de la vía (calle)
        numero: Número de puerta
        
    Returns:
        Información completa de la dirección con coordenadas
    """
    return comoir_utils.obtener_coordenadas_direccion(codigo_via, numero)

@mcp.tool()
def obtener_coordenadas_lugar_interes(codigo_lugar: str, tipo_lugar: str) -> Any:
    """
    Obtiene las coordenadas de un lugar de interés específico.
    
    Args:
        codigo_lugar: Código del lugar de interés
        tipo_lugar: Tipo del lugar (CULTURA, DEPORTE, EDUCACION, PARQUE, PLAYA, etc.)
        
    Returns:
        Información completa del lugar con coordenadas
    """
    return comoir_utils.obtener_coordenadas_lugar_interes(codigo_lugar, tipo_lugar)

@mcp.tool()
def geocodificacion_reversa(longitud: float, latitud: float, incluir_direcciones: bool = True) -> Any:
    """
    Convierte coordenadas en una descripción de ubicación legible.
    
    Args:
        longitud: Coordenada X (longitud)
        latitud: Coordenada Y (latitud)
        incluir_direcciones: Si incluir direcciones cercanas en el resultado
        
    Returns:
        Información de la ubicación más cercana a las coordenadas
    """
    return comoir_utils.geocodificacion_reversa(longitud, latitud, incluir_direcciones)

@mcp.tool()
def resolver_ubicacion_completa(descripcion_ubicacion: str) -> Any:
    """
    Resuelve cualquier descripción de ubicación en datos estructurados completos.
    Implementa la lógica completa de autocompleteAddress del código original.
    
    Args:
        descripcion_ubicacion: Descripción en lenguaje natural (ej: "18 de julio 1234", "pocitos esquina buxareo", "shopping tres cruces")
        
    Returns:
        Lista de ubicaciones resueltas con todos los datos necesarios para calcular rutas
    """
    return comoir_utils.resolver_ubicacion_completa(descripcion_ubicacion)

@mcp.tool()
def consultar_rutas_omnibus_mejorado(direccionOrigen: str, direccionDestino: str, incluir_alternativas: bool = True) -> Any:
    """
    Consulta las rutas de omnibus entre dos direcciones usando el sistema de resolución completo.
    
    Args:
        direccionOrigen: La direccion de origen en lenguaje natural
        direccionDestino: La direccion de destino en lenguaje natural  
        incluir_alternativas: Si incluir rutas alternativas (máximo 3)
        
    Returns:
        Las rutas de omnibus con información detallada
    """
    
    try:
        origenes = comoir_utils.resolver_ubicacion_completa(direccionOrigen)
        destinos = comoir_utils.resolver_ubicacion_completa(direccionDestino)
    except Exception as e:
        return {"error": f"Error en resolución de ubicaciones: {str(e)}"}
    
    if not origenes:
        return {"error": f"No se pudo resolver la ubicación de origen: {direccionOrigen}"}
    
    if not destinos:
        return {"error": f"No se pudo resolver la ubicación de destino: {direccionDestino}"}
    
    origen = origenes[0]
    destino = destinos[0]
    
    if not comoir_utils.obtener_tipo_para_url(origen):
        return {"error": f"No se pudo determinar el tipo de origen: {origen}"}
    
    if not comoir_utils.obtener_tipo_para_url(destino):
        return {"error": f"No se pudo determinar el tipo de destino: {destino}"}

    try:
        rutas = comoir_utils.calcular_ruta_bus_api(origen, destino)
        
        # Limitar resultados si no se quieren alternativas
        if not incluir_alternativas:
            rutas = rutas[:1]
        
        resultado = {
            "origen_resuelto": origen,
            "destino_resuelto": destino,
            "rutas": utils.parse_tramos_ordenados(rutas)
        }
        
        return resultado
        
    except Exception as e:
        return {"error": f"Error en consulta de rutas: {str(e)}"}

@mcp.tool()
def calcular_ruta_caminando(direccionOrigen: str, direccionDestino: str) -> Any:
    """
    Calcula la ruta caminando entre dos ubicaciones.
    
    Args:
        direccionOrigen: La direccion de origen en lenguaje natural
        direccionDestino: La direccion de destino en lenguaje natural
        
    Returns:
        Información de la ruta caminando con distancia y tiempo estimado
    """
    
    try:
        origenes = comoir_utils.resolver_ubicacion_completa(direccionOrigen)
        destinos = comoir_utils.resolver_ubicacion_completa(direccionDestino)
    except Exception as e:
        return {"error": f"Error en resolución de ubicaciones: {str(e)}"}
    
    if not origenes:
        return {"error": f"No se pudo resolver la ubicación de origen: {direccionOrigen}"}
    
    if not destinos:
        return {"error": f"No se pudo resolver la ubicación de destino: {direccionDestino}"}
    
    origen = origenes[0]
    destino = destinos[0]
    
    if not comoir_utils.obtener_tipo_para_url(origen) or not comoir_utils.obtener_tipo_para_url(destino):
        return {"error": "No se pudo determinar el tipo de ubicación"}
    
    try:
        resultado = comoir_utils.calcular_ruta_caminando_api(origen, destino)
        
        return {
            "origen_resuelto": origen,
            "destino_resuelto": destino,
            "ruta_caminando": resultado
        }
        
    except Exception as e:
        return {"error": f"Error en cálculo de ruta: {str(e)}"}


