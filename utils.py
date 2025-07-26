import json
import math

def read_paradas_json(filepath: str = "paradas.json"):
    """
    Reads and parses JSON data from the given file (default: paradas.txt).

    Args:
        filepath (str): Path to the file containing JSON data.

    Returns:
        The parsed JSON data (usually a dict or list).
    """
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data

def get_closest_stop_id(latitude: float, longitude: float, filepath: str = "paradas.json") -> int:
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
    stops = get_stops_within_radius(latitude, longitude, float('inf'), filepath)
    
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
    # Radio de la Tierra en metros
    R = 6371000  
    
    # Convertir grados a radianes
    lat1_rad = math.radians(lat1)
    lon1_rad = math.radians(lon1)
    lat2_rad = math.radians(lat2)
    lon2_rad = math.radians(lon2)
    
    # Diferencias
    dlat = lat2_rad - lat1_rad
    dlon = lon2_rad - lon1_rad
    
    # Fórmula de Haversine
    a = math.sin(dlat/2)**2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(dlon/2)**2
    c = 2 * math.asin(math.sqrt(a))
    
    return R * c


def get_stops_within_radius(latitude: float, longitude: float, max_distance: float, filepath: str = "paradas.json") -> list:
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
    paradas = read_paradas_json(filepath)
    
    stops_within_radius = []
    
    for parada in paradas:
        # Extract coordinates from the location
        stop_longitude = parada['location']['coordinates'][0]
        stop_latitude = parada['location']['coordinates'][1]
        
        # Calculate Haversine distance in meters
        distance = haversine_distance(latitude, longitude, stop_latitude, stop_longitude)
        
        # Add to results if within radius
        if distance <= max_distance:
            stops_within_radius.append({
                'busstopId': parada['busstopId'],
                'distance': distance,
                'street1': parada['street1'],
                'street2': parada['street2'],
                'coordinates': [stop_latitude, stop_longitude]
            })
    
    # Sort by distance (closest first)
    stops_within_radius.sort(key=lambda x: x['distance'])
    
    return stops_within_radius


