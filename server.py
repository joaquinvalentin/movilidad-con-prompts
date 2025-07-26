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
