import json
import math

from typing import Any, Dict
import requests
from datetime import datetime
from paradas import PARADAS

def get_closest_stop_id(latitude: float, longitude: float) -> int:
    """
    Finds the closest bus stop ID using Haversine distance.

    Args:
        latitude (float): Target latitude coordinate
        longitude (float): Target longitude coordinate  
        filepath (str): Path to the JSON file containing bus stop data

    Returns:
        int: The busstopId of the closest stop
    """
    stops = get_stops_within_radius(latitude, longitude, 5000)
    
    if stops:
        return stops[0]['busstopId']
    return None


def haversine_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """
    Calculate the great circle distance between two points on Earth using Haversine formula.
    
    Args:
        lat1, lon1: Latitude and longitude of first point in decimal degrees
        lat2, lon2: Latitude and longitude of second point in decimal degrees
    
    Returns:
        Distance in meters
    """
    R = 6371000  
    
    lat1_rad = math.radians(lat1)
    lon1_rad = math.radians(lon1)
    lat2_rad = math.radians(lat2)
    lon2_rad = math.radians(lon2)
    
    dlat = lat2_rad - lat1_rad
    dlon = lon2_rad - lon1_rad
    
    a = math.sin(dlat/2)**2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(dlon/2)**2
    c = 2 * math.asin(math.sqrt(a))
    
    return R * c


def get_stops_within_radius(latitude: float, longitude: float, max_distance: float) -> list:
    """
    Finds all bus stops within a specified radius using Haversine distance.

    Args:
        latitude (float): Target latitude coordinate
        longitude (float): Target longitude coordinate  
        max_distance (float): Maximum distance in meters
        filepath (str): Path to the JSON file containing bus stop data

    Returns:
        list: List of dictionaries containing busstopId and distance for stops within radius,
              sorted by distance (closest first)
    """    
    stops_within_radius = []
    
    for parada in PARADAS:
        # Extract coordinates from the location
        stop_longitude = parada['location']['coordinates'][0]
        stop_latitude = parada['location']['coordinates'][1]
        
        distance = haversine_distance(latitude, longitude, stop_latitude, stop_longitude)
        
        if distance <= max_distance:
            stops_within_radius.append({
                'busstopId': parada['busstopId'],
                'distance': distance,
                'street1': parada['street1'],
                'street2': parada['street2'],
                'coordinates': [stop_latitude, stop_longitude]
            })
    
    stops_within_radius.sort(key=lambda x: x['distance'])
    
    return stops_within_radius

def geocodificar_direccion(direccion: str, departamento: str = "Montevideo", localidad: str = "Montevideo") -> Dict[str, Any]:
    """
    Geocodifica una dirección en Uruguay y devuelve coordenadas e información de la calle.
    
    Args:
        direccion: Dirección a geocodificar (ej: "18 de Julio 1234", "Pocitos 850 esquina Buxareo")
        departamento: Departamento donde buscar (por defecto "Montevideo")
        localidad: Localidad donde buscar (por defecto "Montevideo")
    
    Returns:
        Diccionario con información de la dirección encontrada incluyendo coordenadas, ID de calle, etc.
    """
    if not direccion.strip():
        raise ValueError("La dirección no puede estar vacía")
    
    url_base = 'https://direcciones.ide.uy/api/v0/geocode/BusquedaDireccion'
    
    params = {
        'calle': direccion.strip(),
        'departamento': departamento,
        'localidad': localidad
    }
    
    try:
        response = requests.get(url_base, params=params)
        response.raise_for_status()
        data = response.json()
        
        if not data:
            raise ValueError("No se encontraron resultados para la dirección especificada")
        
        resultado = data[0] if isinstance(data, list) else data
        
        
        direccion_info = resultado.get('direccion', {})
        calle_info = direccion_info.get('calle', {})
        numero_info = direccion_info.get('numero', {})
        depto_info = direccion_info.get('departamento', {})
        localidad_info = direccion_info.get('localidad', {})
        
        calle_nombre = calle_info.get('nombre_normalizado', 'N/A')
        numero_puerta = numero_info.get('nro_puerta', '')
        direccion_completa = f"{calle_nombre} {numero_puerta}" if numero_puerta else calle_nombre
        
        geocoding_result = {
            'direccion_encontrada': direccion_completa,
            'coordenadas': {
                'latitud': resultado.get('puntoY', None),
                'longitud': resultado.get('puntoX', None)
            },
            'codigo_calle': calle_info.get('idCalle', None),
            'nombre_calle': calle_nombre,
            'numero_puerta': numero_puerta,
            'departamento': depto_info.get('nombre_normalizado', departamento),
            'localidad': localidad_info.get('nombre_normalizado', localidad),
            'codigo_postal': resultado.get('codigoPostal', None),
            'estado_geocodificacion': resultado.get('error', ''),
            'precision': 'exacta' if not resultado.get('error') else 'aproximada'
        }
        
        if geocoding_result['coordenadas']['latitud'] is None or geocoding_result['coordenadas']['longitud'] is None:
            raise ValueError("No se pudieron obtener coordenadas válidas para la dirección")
        
        return geocoding_result
        
    except requests.HTTPError as e:
        if e.response.status_code == 404:
            raise ValueError("Dirección no encontrada en la base de datos")
        else:
            raise ValueError(f"Error HTTP {e.response.status_code}: {e.response.reason}")
    except requests.RequestException as e:
        raise ValueError(f"Error de conexión a la API de direcciones: {str(e)}")
    except ValueError:
        # Re-raise ValueError exceptions as they are already properly formatted
        raise
    except Exception as e:
        raise ValueError(f"Error inesperado: {str(e)}")

def get_next_buses_at_stop(stop_id: str, day: str, time: str):
    """
    Devuelve los próximos ómnibus de una parada con solo los campos clave:
    hora, time, destino, linea, minutos.
    Máximo 3 entradas por línea.
    """
    url = f"https://api.montevideo.gub.uy/transporteRest/siguientesParada/{stop_id}/{day}/{time}"

    headers = {
        "Referer": "https://m.montevideo.gub.uy/",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "DNT": "1",
        "sec-ch-ua-platform": "macOS",
        "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138"',
        "sec-ch-ua-mobile": "?0"
    }

    response = requests.get(url, headers=headers)
    response.raise_for_status()
    data = response.json()

    results = []
    lineas_count = {}
    
    for item in data:
        linea = item.get('linea')
        
        if linea not in lineas_count:
            lineas_count[linea] = 0
        
        if lineas_count[linea] < 3:
            results.append({
                'hora': item.get('hora'),
                'time': item.get('time'),
                'destino': item.get('destino'),
                'linea': linea,
                'minutos': item.get('minutos'),
            })
            lineas_count[linea] += 1

    return results

def get_codigo_dia(fecha: datetime):
    """
    Devuelve el código del día de la semana para la fecha y hora proporcionadas.
    """
    dia_semana = fecha.weekday()
    if dia_semana == 5:
        tipo_dia = "SABADO"
    elif dia_semana == 6:
        tipo_dia = "DOMINGO"
    else:
        tipo_dia = "HABIL"

    return tipo_dia

def get_street_number_comoir(nombre: str) -> int | None:
    """
    Devuelve el código numérico (COMO IR) de la primera calle (tipo VIA) que coincida con el nombre dado.

    Parámetro:
    - nombre: str, nombre de la calle o avenida (ej: "bulevar españa")

    Retorna:
    - int: código de la calle (ej: 2562)
    - None si no se encontró ninguna coincidencia tipo VIA
    """
    url = "https://api.montevideo.gub.uy/ubicacionesRest/infoUbicacion/lugaresDeInteresYVias/"
    params = {"nombre": nombre}

    headers = {
        "sec-ch-ua-platform": "macOS",
        "Referer": "https://m.montevideo.gub.uy/",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138"',
        "DNT": "1",
        "sec-ch-ua-mobile": "?0"
    }

    response = requests.get(url, params=params, headers=headers)
    response.raise_for_status()
    resultados = response.json()

    for r in resultados:
        if r.get("descTipo") == "VIA" and "codigo" in r:
            return r["codigo"]

    return None

def parse_tramos_ordenados(json_data):
    tramos_totales = []

    for entrada in json_data[:3]: 
        tramo_actual = []
        ruta = entrada.get("ruta", {})
        directo = ruta.get("directo", {})
        trasbordo = ruta.get("trasbordo")

        # Primer tramo (siempre está)
        tramo1 = {
            "descripcion": directo.get("descripcion"),
            "paradaOrigen": directo.get("paradaOrigen", {}).get("descripcion"),
            "paradaDestino": (trasbordo or directo).get("paradaOrigen" if trasbordo else "paradaDestino", {}).get("descripcion"),
            "caminarOrigen": f"{directo.get('caminarSalida', {}).get('largo', 0)} m",
            "caminarDestino": "0 m" if trasbordo else f"{directo.get('caminarLlegada', {}).get('largo', 0)} m"
        }
        tramo_actual.append(tramo1)

        # Segundo tramo (solo si hay trasbordo)
        if trasbordo:
            tramo2 = {
                "descripcion": trasbordo.get("descripcion"),
                "paradaOrigen": trasbordo.get("paradaOrigen", {}).get("descripcion"),
                "paradaDestino": trasbordo.get("paradaDestino", {}).get("descripcion"),
                "caminarOrigen": "0 m",
                "caminarDestino": f"{trasbordo.get('caminarLlegada', {}).get('largo', 0)} m"
            }
            tramo_actual.append(tramo2)
        tramos_totales.append({"tramos": tramo_actual})

    return tramos_totales

def get_ids_para_direccion(direccion: str) -> tuple[int, int, str]:
    direccion_split = direccion.split(" esquina ")
    if (len(direccion_split) == 2):
        direccionPrimerParam = get_street_number_comoir(direccion_split[0])
        direccionSegundoParam = get_street_number_comoir(direccion_split[1])
        tipo = "ESQUINA"
    else:   
        direccionDic = geocodificar_direccion(direccion)
        direccionSegundoParam =  direccionDic['numero_puerta']
        direccionNombreCalle = direccionDic['nombre_calle']
        direccionPrimerParam = get_street_number_comoir(direccionNombreCalle)
        tipo = "DIRECCION"
    return direccionPrimerParam, direccionSegundoParam, tipo

def get_eta_lineas(parada_id: int, lineas: list = None, cantPorLinea: int = 3):
    """
    Obtiene los ETAs de las líneas específicas en una parada usando los endpoints nextETA y variantes.
    
    Args:
        parada_id: ID de la parada
        lineas: Lista de líneas a consultar (ej: ["181", "407"]). Si es None, consulta todas las líneas.
        cantPorLinea: Cantidad de próximos buses por línea
        
    Returns:
        Lista de diccionarios con información de ETAs por línea
    """
    
    variantes_info = get_variantes_parada(parada_id)
    
    eta_data = get_next_eta(parada_id, lineas, cantPorLinea)
    
    return combinar_eta_con_lineas(eta_data, variantes_info)

def get_next_eta(parada_id: int, lineas: list = None, cantPorLinea: int = 3):
    """
    Consulta el endpoint nextETA para obtener información de ETAs.
    
    Args:
        parada_id: ID de la parada
        lineas: Lista de líneas a filtrar (opcional)
        cantPorLinea: Cantidad de próximos buses por línea
        
    Returns:
        Respuesta del endpoint nextETA
    """
    url = "https://m.montevideo.gub.uy/stmonlineRest/nextETA"
    
    headers = {
        "Content-Type": "application/json",
        "Referer": "https://m.montevideo.gub.uy/",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "DNT": "1",
        "sec-ch-ua-platform": "macOS",
        "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138"',
        "sec-ch-ua-mobile": "?0"
    }
    
    body = {
        "variante": [],
        "parada": parada_id,
        "linea": lineas if lineas else [],
        "cantPorLinea": cantPorLinea
    }
    
    response = requests.post(url, json=body, headers=headers)
    response.raise_for_status()
    return response.json()


def get_variantes_parada(parada_id: int):
    """
    Obtiene información de variantes disponibles en una parada.
    
    Args:
        parada_id: ID de la parada
        
    Returns:
        Información de variantes, líneas y destinos de la parada
    """
    url = f"https://api.montevideo.gub.uy/transporteRest/variantes/{parada_id}"
    
    headers = {
        "Referer": "https://m.montevideo.gub.uy/",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "DNT": "1",
        "sec-ch-ua-platform": "macOS",
        "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138"',
        "sec-ch-ua-mobile": "?0"
    }
    
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.json()


def combinar_eta_con_lineas(eta_data, variantes_info):
    """
    Combina los datos de ETA con la información de líneas usando las variantes.
    
    Args:
        eta_data: Respuesta del endpoint nextETA
        variantes_info: Respuesta del endpoint variantes
        
    Returns:
        Lista de buses con información completa incluyendo línea y destino
    """
    resultados = []
    
    variante_a_linea = {}
    variante_a_destino = {}
    
    for linea_id, variantes in variantes_info.get("variantes", {}).items():
        linea_nombre = variantes_info.get("lineas", {}).get(linea_id, linea_id)
        for variante in variantes:
            variante_a_linea[variante] = linea_nombre
    
    for variante_id, destino in variantes_info.get("destinos", {}).items():
        variante_a_destino[int(variante_id)] = destino
    
    for feature in eta_data.get("features", []):
        properties = feature.get("properties", {})
        variante = properties.get("variante")
        
        if variante in variante_a_linea:
            linea = variante_a_linea[variante]
            destino = variante_a_destino.get(variante, "Destino no disponible")
            
            resultado = {
                "linea": linea,
                "destino": destino,
                "eta_segundos": properties.get("eta"),
                "eta_minutos": round(properties.get("eta", 0) / 60, 1),
                "distancia_metros": properties.get("dist"),
                "codigo_bus": properties.get("codigoBus"),
                "codigo_empresa": properties.get("codigoEmpresa"),
                "variante": variante,
                "posicion": properties.get("pos"),
                "coordenadas": feature.get("geometry", {}).get("coordinates", [])
            }
            resultados.append(resultado)
    
    resultados.sort(key=lambda x: x.get("eta_segundos", float('inf')))
    
    return resultados
