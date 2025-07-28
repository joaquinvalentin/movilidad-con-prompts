"""
Utilidades para resolución de ubicaciones del sistema ComoIr de Montevideo.
Estas funciones replican la lógica del código JavaScript original de la aplicación ComoIr.
"""

import requests
from typing import Any, List, Dict
import utils  # Import del utils principal


def to_capital_case(text: str) -> str:
    """
    Convierte texto a formato capital case (primera letra de cada palabra en mayúscula).
    Replica la funcionalidad de toCapitalCase del código JavaScript original.
    """
    if not text:
        return text
        
    words = text.split()
    capitalized_words = []
    
    for word in words:
        if len(word) > 0:
            capitalized = word[0].upper() + word[1:].lower()
            capitalized_words.append(capitalized)
    
    return ' '.join(capitalized_words)


def get_api_headers() -> Dict[str, str]:
    """Retorna los headers estándar para las APIs de Montevideo."""
    return {
        "Referer": "https://m.montevideo.gub.uy/",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "DNT": "1",
    }


def buscar_lugares_y_vias(termino_busqueda: str) -> List[Dict[str, Any]]:
    """
    Busca lugares de interés y vías (calles) que coincidan con el término de búsqueda.
    """
    if not termino_busqueda or len(termino_busqueda.strip()) < 2:
        return []
        
    url = f"https://api.montevideo.gub.uy/ubicacionesRest/infoUbicacion/lugaresDeInteresYVias/?nombre={termino_busqueda.strip()}"
    
    response = requests.get(url, headers=get_api_headers())
    response.raise_for_status()
    
    results = response.json()
    
    # Capitalizar nombres como hace la app original
    for item in results:
        if 'nombre' in item:
            item['nombre'] = to_capital_case(item['nombre'])
            
    return results


def buscar_esquinas_por_via(codigo_via: str, termino_esquina: str) -> List[Dict[str, Any]]:
    """
    Busca calles que se cruzan con una vía específica para formar esquinas.
    """
    url = f"https://api.montevideo.gub.uy/ubicacionesRest/infoUbicacion/esquinas/{codigo_via}?nombre={termino_esquina}"
    
    response = requests.get(url, headers=get_api_headers())
    response.raise_for_status()
    
    return response.json()


def obtener_coordenadas_esquina(codigo_via1: str, codigo_via2: str) -> Dict[str, Any]:
    """
    Obtiene las coordenadas exactas de una esquina específica.
    """
    url = f"https://api.montevideo.gub.uy/ubicacionesRest/esquinas/posicion/{codigo_via1}/{codigo_via2}"
    
    response = requests.get(url, headers=get_api_headers())
    response.raise_for_status()
    
    result = response.json()
    
    # Agregar información de las vías para el nombre completo
    result['via'] = codigo_via1
    result['via2'] = codigo_via2
    result['descTipo'] = 'ESQUINA'
    
    return result


def obtener_coordenadas_direccion(codigo_via: str, numero: str) -> Dict[str, Any]:
    """
    Obtiene las coordenadas de una dirección específica (calle + número).
    """
    url = f"https://api.montevideo.gub.uy/ubicacionesRest/direcciones/posicion/{codigo_via}/{numero}"
    
    response = requests.get(url, headers=get_api_headers())
    response.raise_for_status()
    
    result = response.json()
    
    # Agregar metadatos
    result['descTipo'] = 'DIRECCION'
    result['numero'] = numero
    result['via'] = codigo_via
    
    return result


def obtener_coordenadas_lugar_interes(codigo_lugar: str, tipo_lugar: str) -> Dict[str, Any]:
    """
    Obtiene las coordenadas de un lugar de interés específico.
    """
    # Mapeo de tipos a endpoints
    endpoint_map = {
        'CULTURA': 'cultura/posicion/',
        'PARQUE': 'nombresDeParque/',
        'PLAYA': 'playas/',
        'EDUCACION': 'educacion/',
        'ESPACIO LIBRE': 'nombresDeEspacioLibre/',
        'PATRIMONIO': 'patrimonio/',
        'MONUMENTO': 'monumentos/',
        'DEPORTE': 'deporte/',
        'SALUD': 'salud/',
        'VIA': 'vias/punto/'
    }
    
    endpoint = endpoint_map.get(tipo_lugar.upper())
    if not endpoint:
        raise ValueError(f"Tipo de lugar no soportado: {tipo_lugar}")
    
    url = f"https://api.montevideo.gub.uy/ubicacionesRest/{endpoint}{codigo_lugar}"
    
    response = requests.get(url, headers=get_api_headers())
    response.raise_for_status()
    
    return response.json()


def geocodificacion_reversa(longitud: float, latitud: float, incluir_direcciones: bool = True) -> Dict[str, Any]:
    """
    Convierte coordenadas en una descripción de ubicación legible.
    """
    url = f"https://api.montevideo.gub.uy/ubicacionesRest/geodecodificacion/ubicacion?"
    
    if incluir_direcciones:
        url += "direcciones=true&"
    
    url += f"x={longitud}&y={latitud}"
    
    response = requests.get(url, headers=get_api_headers())
    response.raise_for_status()
    
    return response.json()


def obtener_parametros_ubicacion(ubicacion: Dict[str, Any]) -> List[str]:
    """
    Construye los parámetros para la API basados en el tipo de ubicación.
    """
    params = []
    
    if ubicacion['descTipo'] == 'DIRECCION':
        params = [ubicacion['via'], ubicacion['numero']]
    elif ubicacion['descTipo'] == 'ESQUINA':
        params = [ubicacion['via'], ubicacion['via2']]
    elif ubicacion['descTipo'] == 'VIA':
        params = [ubicacion['codigo']]
    else:
        # LUGAR DE INTERES u otros
        params = [ubicacion['codigo']]
        
    return params


def obtener_tipo_para_url(ubicacion: Dict[str, Any]) -> str:
    """
    Determina el tipo de ubicación para usar en la URL de la API.
    """
    desc_tipo = ubicacion.get('descTipo')
    desc_subtipo = ubicacion.get('descSubtipo')
    
    # Para lugares de interés, usar el subtipo si existe
    if desc_tipo in ['LUGAR DE INTERES'] and desc_subtipo:
        return desc_subtipo
    # Para otros tipos, usar el tipo principal
    else:
        return desc_tipo


def resolver_ubicacion_completa(descripcion_ubicacion: str) -> List[Dict[str, Any]]:
    """
    Resuelve cualquier descripción de ubicación en datos estructurados completos.
    Implementa la lógica completa de autocompleteAddress del código original.
    
    Args:
        descripcion_ubicacion: Descripción en lenguaje natural 
            (ej: "18 de julio 1234", "pocitos esquina buxareo", "shopping tres cruces")
        
    Returns:
        Lista de ubicaciones resueltas con todos los datos necesarios para calcular rutas
    """
    descripcion = descripcion_ubicacion.strip().lower()
    resultados = []
    
    # Caso 1: Descripción con número (dirección)
    if any(char.isdigit() for char in descripcion):
        partes = descripcion.split()
        numero = None
        
        # Buscar el número al final
        for i, parte in enumerate(reversed(partes)):
            if parte.isdigit() and len(parte) >= 2 and len(parte) <= 5:
                numero = int(parte)
                # Reconstruir el nombre de la calle sin el número
                nombre_calle = ' '.join(partes[:-i-1]) if i > 0 else ' '.join(partes[:-1])
                break
        
        if numero:
            # Buscar la calle
            vias = buscar_lugares_y_vias(nombre_calle)
            
            for via in vias:
                if via.get('descTipo') == 'VIA':
                    try:
                        # Obtener coordenadas de la dirección
                        direccion = obtener_coordenadas_direccion(via['codigo'], str(numero))
                        
                        # Crear resultado completo
                        resultado = {
                            'nombre': f"{to_capital_case(via['nombre'])} {numero}",
                            'descTipo': 'DIRECCION',
                            'descSubtipo': None,
                            'codigo': via['codigo'],
                            'numero': numero,
                            'via': via['codigo'],
                            'geoJSON': direccion.get('geoJSON'),
                            'descripcion': f"{to_capital_case(via['nombre'])} {numero}"
                        }
                        resultados.append(resultado)
                    except Exception as e:
                        # Si falla la resolución de coordenadas, continuar
                        continue
    
    # Caso 2: Descripción con "esquina", "esq", "y" (intersección)
    palabras_esquina = ['esquina', 'esq', 'esq.', 'y']
    esquina_detectada = False
    
    for palabra in palabras_esquina:
        if palabra in descripcion:
            partes = descripcion.split(palabra)
            if len(partes) == 2:
                calle1 = partes[0].strip()
                calle2 = partes[1].strip()
                
                if len(calle1) > 0 and len(calle2) > 0:
                    esquina_detectada = True
                    
                    # Buscar la primera calle
                    vias1 = buscar_lugares_y_vias(calle1)
                    
                    for via1 in vias1:
                        if via1.get('descTipo') == 'VIA':
                            try:
                                # Buscar calles que crucen con la primera
                                esquinas = buscar_esquinas_por_via(via1['codigo'], calle2)
                                
                                for via2 in esquinas:
                                    if via2.get('descTipo') == 'VIA':
                                        try:
                                            # Obtener coordenadas de la esquina
                                            esquina = obtener_coordenadas_esquina(via1['codigo'], via2['codigo'])
                                            
                                            # Crear resultado completo
                                            resultado = {
                                                'nombre': f"{to_capital_case(via1['nombre'])} y {to_capital_case(via2['nombre'])}",
                                                'descTipo': 'ESQUINA',
                                                'descSubtipo': None,
                                                'via': via1['codigo'],
                                                'via2': via2['codigo'],
                                                'geoJSON': esquina.get('geoJSON'),
                                                'descripcion': f"{to_capital_case(via1['nombre'])} y {to_capital_case(via2['nombre'])}"
                                            }
                                            resultados.append(resultado)
                                        except:
                                            continue
                            except:
                                continue
                    break
    
    # Caso 3: Búsqueda general (lugares de interés, calles simples)
    if not esquina_detectada and not any(char.isdigit() for char in descripcion):
        ubicaciones = buscar_lugares_y_vias(descripcion_ubicacion)
        
        for ubicacion in ubicaciones:
            try:
                # Si es un lugar de interés, obtener sus coordenadas
                if ubicacion.get('descTipo') != 'VIA':
                    tipo = ubicacion.get('descSubtipo') if ubicacion.get('descSubtipo') else ubicacion.get('descTipo')
                    
                    try:
                        coordenadas = obtener_coordenadas_lugar_interes(ubicacion['codigo'], tipo)
                        
                        resultado = {
                            'nombre': ubicacion['nombre'],
                            'descTipo': ubicacion['descTipo'],
                            'descSubtipo': ubicacion.get('descSubtipo'),
                            'codigo': ubicacion['codigo'],
                            'geoJSON': coordenadas.get('geoJSON') or coordenadas.get('punto', {}).get('geoJSON'),
                            'descripcion': ubicacion['nombre']
                        }
                        resultados.append(resultado)
                    except:
                        # Si no se pueden obtener coordenadas, agregar sin ellas
                        resultado = {
                            'nombre': ubicacion['nombre'],
                            'descTipo': ubicacion['descTipo'],
                            'descSubtipo': ubicacion.get('descSubtipo'),
                            'codigo': ubicacion['codigo'],
                            'descripcion': ubicacion['nombre']
                        }
                        resultados.append(resultado)
                else:
                    # Es una VIA (calle), agregarla tal como está
                    resultado = {
                        'nombre': ubicacion['nombre'],
                        'descTipo': ubicacion['descTipo'],
                        'descSubtipo': ubicacion.get('descSubtipo'),
                        'codigo': ubicacion['codigo'],
                        'descripcion': ubicacion['nombre']
                    }
                    resultados.append(resultado)
            except:
                continue
    
    return resultados


def calcular_ruta_bus_api(origen: Dict[str, Any], destino: Dict[str, Any]) -> Dict[str, Any]:
    """
    Llama a la API de rutas de bus con ubicaciones ya resueltas.
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

    tipo_origen = obtener_tipo_para_url(origen)
    tipo_destino = obtener_tipo_para_url(destino)
    
    if not tipo_origen or not tipo_destino:
        raise ValueError("No se pudo determinar el tipo de ubicación")
    
    base_url = f"https://api.montevideo.gub.uy/comoirRest/rest/comoir/bus/{tipo_origen}/{tipo_destino}"

    # Construir parámetros
    params_origen = obtener_parametros_ubicacion(origen)
    params_destino = obtener_parametros_ubicacion(destino)
    
    params = []
    for param in params_origen:
        params.append(("paramOrigen", param))
    for param in params_destino:
        params.append(("paramDestino", param))

    response = requests.get(base_url, params=params, headers=headers)
    response.raise_for_status()
    
    return response.json()


def calcular_ruta_caminando_api(origen: Dict[str, Any], destino: Dict[str, Any]) -> Dict[str, Any]:
    """
    Llama a la API de rutas caminando con ubicaciones ya resueltas.
    """
    tipo_origen = obtener_tipo_para_url(origen)
    tipo_destino = obtener_tipo_para_url(destino)
    
    if not tipo_origen or not tipo_destino:
        raise ValueError("No se pudo determinar el tipo de ubicación")
    
    url = f"https://api.montevideo.gub.uy/comoirRest/rest/comoir/caminando/{tipo_origen}/{tipo_destino}?"
    
    params_origen = obtener_parametros_ubicacion(origen)
    params_destino = obtener_parametros_ubicacion(destino)
    
    for param in params_origen:
        url += f"paramOrigen={param}&"
    for param in params_destino:
        url += f"paramDestino={param}&"
    
    # Remover último &
    url = url.rstrip('&')
    
    response = requests.get(url, headers=get_api_headers())
    response.raise_for_status()
    
    return response.json() 