"""
FastMCP quickstart example.

cd to the `examples/snippets/clients` directory and run:
    uv run server fastmcp_quickstart stdio
"""

import json
import urllib.request
import urllib.error
import urllib.parse
from datetime import datetime
from typing import List, Dict, Any, Optional

from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Movilidad Con Prompts")


@mcp.tool()
def consultar_horarios_omnibus(codigo_parada: int, fecha: str, hora: str) -> List[Dict[str, Any]]:
    """
    Consulta los horarios de pasada de ómnibus en Montevideo.
    
    Args:
        codigo_parada: Código numérico de la parada de ómnibus.
        fecha: Fecha que el usuario quiere consultar. En formato "YYYY-MM-DD" (ej: "2024-03-15")
        hora: Hora desde la cual el usuario quiere consultar. En formato "HH:MM" (ej: "10:00")
    
    Returns:
        Lista de las próximas 10 pasadas con información de línea, hora y destino
    """
    try:
        fecha_obj = datetime.strptime(fecha, "%Y-%m-%d")
    except ValueError:
        raise ValueError("La fecha debe estar en formato 'YYYY-MM-DD' (ej: '2024-03-15')")
    
    dia_semana = fecha_obj.weekday()
    if dia_semana == 5:
        tipo_dia = "SABADO"
    elif dia_semana == 6:
        tipo_dia = "DOMINGO"
    else:
        tipo_dia = "HABIL"
    
    try:
        hora_parts = hora.split(':')
        if len(hora_parts) != 2:
            raise ValueError("Formato de hora inválido")
        hh, mm = int(hora_parts[0]), int(hora_parts[1])
        if not (0 <= hh <= 23 and 0 <= mm <= 59):
            raise ValueError("Hora fuera de rango válido")
    except (ValueError, IndexError):
        raise ValueError("Hora debe estar en formato 'HH:MM' (ej: '10:00')")
    
    url_base = 'http://www.montevideo.gub.uy/transporteRest/'
    url = f"{url_base}pasadas/{codigo_parada}/{tipo_dia}/{hora}"
    
    try:
        with urllib.request.urlopen(url) as response:
            web_pg = response.read()
            data = json.loads(web_pg.decode('utf-8'))
        
        resultados = []
        for pasada in data:
            resultados.append({
                'linea': pasada.get('linea', 'N/A'),
                'hora': pasada.get('horaDesc', 'N/A'),
                'destino': pasada.get('destino', 'N/A')
            })
        
        return resultados
        
    except urllib.error.HTTPError as e:
        raise ValueError(f"Error HTTP {e.code}: {e.reason}")
    except urllib.error.URLError as e:
        raise ValueError(f"Error de conexión: {e.reason}")
    except json.JSONDecodeError:
        raise ValueError("Error al decodificar la respuesta JSON")
    except Exception as e:
        raise ValueError(f"Error inesperado: {str(e)}")


@mcp.tool()
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

