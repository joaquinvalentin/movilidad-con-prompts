"""
FastMCP quickstart example.

cd to the `examples/snippets/clients` directory and run:
    uv run server fastmcp_quickstart stdio
"""

import json
import urllib.request
import urllib.error
from datetime import datetime
from typing import List, Dict, Any

from mcp.server.fastmcp import FastMCP

# Create an MCP server
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

