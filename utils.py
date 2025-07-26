import json
import math

from typing import Any, Dict
import urllib.request
import urllib.error
import urllib.parse
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
    # Get all stops within a very large radius and return the closest one
    stops = get_stops_within_radius(latitude, longitude, float('inf'))
    
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
    # Read the bus stops data
    
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
    
    url_params = urllib.parse.urlencode(params)
    url = f"{url_base}?{url_params}"
    
    try:
        with urllib.request.urlopen(url) as response:
            web_pg = response.read()
            data = json.loads(web_pg.decode('utf-8'))
        
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
        
    except urllib.error.HTTPError as e:
        if e.code == 404:
            raise ValueError("Dirección no encontrada en la base de datos")
        else:
            raise ValueError(f"Error HTTP {e.code}: {e.reason}")
    except urllib.error.URLError as e:
        raise ValueError(f"Error de conexión a la API de direcciones: {e.reason}")
    except json.JSONDecodeError:
        raise ValueError("Error al decodificar la respuesta de la API")
    except Exception as e:
        raise ValueError(f"Error inesperado: {str(e)}")

def get_next_buses_at_stop(stop_id: str, day: str, time: str):
    """
    Devuelve los próximos ómnibus de una parada con solo los campos clave:
    hora, time, destino, linea, minutos y real.
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
    for item in data:
        results.append({
            'hora': item.get('hora'),
            'time': item.get('time'),
            'destino': item.get('destino'),
            'linea': item.get('linea'),
            'minutos': item.get('minutos'),
            'real': item.get('real')
        })

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