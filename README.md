# Movilidad Con Prompts - Montevideo Public Transport MCP Server

A Model Context Protocol (MCP) server that provides real-time and scheduled bus information for Montevideo, Uruguay's public transportation system. This server exposes comprehensive tools for querying bus schedules, routes, real-time arrival information, and complete location resolution.

> Built for the "Build your MCP" Hackathon organized by Google Developers Groups Uruguay.

## 🚌 Available MCP Tools

### **Core Route Planning Tools**

### 1. `consultar_rutas_omnibus_mejorado`
**Purpose**: Advanced route planning between two locations with complete location resolution

**Parameters**:
- `direccionOrigen` (string): Origin address in natural language
- `direccionDestino` (string): Destination address in natural language  
- `incluir_alternativas` (bool, optional): Include alternative routes (default: true)

**Returns**: Complete route information with:
- Resolved origin and destination details
- Route segments with bus lines and transfers
- Walking distances
- Alternative location suggestions

**Use Cases**:
- "¿Cómo voy de 18 de Julio 1234 a Pocitos?"
- "Ruta desde shopping tres cruces hasta ciudad vieja"
- "De pocitos esquina buxareo a plaza independencia"

### 2. `calcular_ruta_caminando`
**Purpose**: Calculate walking routes between two locations

**Parameters**:
- `direccionOrigen` (string): Origin address
- `direccionDestino` (string): Destination address

**Returns**: Walking route with distance, time, and turn-by-turn directions

### **Location Resolution Tools**

### 3. `resolver_ubicacion_completa`
**Purpose**: **Main location resolver** - converts any natural language location description into structured data

**Parameters**:
- `descripcion_ubicacion` (string): Location description in natural language

**Handles**:
- **Addresses**: "18 de Julio 1234", "Colonia 1825"
- **Intersections**: "18 de Julio esquina Rio Branco", "Pocitos y Buxareo"
- **Places of Interest**: "Shopping Tres Cruces", "Plaza Independencia", "Hospital de Clínicas"
- **Beaches**: "Playa Pocitos", "Playa Carrasco"
- **Parks**: "Parque Rodó", "Parque Batlle"

**Returns**:
- Exact coordinates (geoJSON)
- Location type and subtype
- Internal codes for API calls
- Complete metadata for route calculation

### 4. `buscar_lugares_y_vias`
**Purpose**: Search for places of interest and streets

**Parameters**:
- `termino_busqueda` (string): Search term

**Returns**: List of matching locations with codes and types

### 5. `buscar_esquinas_por_via`
**Purpose**: Find streets that intersect with a specific street

**Parameters**:
- `codigo_via` (string): Main street code
- `termino_esquina` (string): Intersecting street name

**Returns**: List of intersecting streets

### 6. `obtener_coordenadas_esquina`
**Purpose**: Get exact coordinates of a specific intersection

**Parameters**:
- `codigo_via1` (string): First street code
- `codigo_via2` (string): Second street code

**Returns**: Complete intersection data with coordinates

### 7. `obtener_coordenadas_direccion`
**Purpose**: Get coordinates of a specific address (street + number)

**Parameters**:
- `codigo_via` (string): Street code
- `numero` (string): House number

**Returns**: Complete address data with coordinates

### 8. `obtener_coordenadas_lugar_interes`
**Purpose**: Get coordinates of places of interest

**Parameters**:
- `codigo_lugar` (string): Place code
- `tipo_lugar` (string): Place type (CULTURA, DEPORTE, EDUCACION, PARQUE, etc.)

**Returns**: Complete place data with coordinates

### 9. `geocodificacion_reversa`
**Purpose**: Convert coordinates to human-readable address

**Parameters**:
- `longitud` (float): X coordinate (longitude)
- `latitud` (float): Y coordinate (latitude)
- `incluir_direcciones` (bool, optional): Include nearby addresses

**Returns**: Location information for the coordinates

### **Real-time and Schedule Tools**

### 10. `consultar_horarios_programados_omnibus`
**Purpose**: Query scheduled bus times near a specific address

**Parameters**:
- `direccion` (string): Address in natural language
- `tiempo` (optional string): Date and time in "YYYY-MM-DD HH:MM" format
- `radio` (optional float): Search radius in meters (default: 200m)

**Returns**: Scheduled bus times for nearby stops

### 11. `consultar_rutas_omnibus` (Legacy)
**Purpose**: Original route planning tool (use `consultar_rutas_omnibus_mejorado` instead)

### 12. `consultar_eta_tiempo_real`
**Purpose**: Get real-time estimated arrival times (ETAs) for buses

**Parameters**:
- `parada_id` (integer): Bus stop ID
- `lineas` (optional array): Specific bus lines to query

**Returns**: Real-time bus arrival information

## 🛠️ Usage Examples

### **Smart Route Planning**
```python
# The LLM can now handle complex natural language queries:

# Simple address to address
result = consultar_rutas_omnibus_mejorado(
    direccionOrigen="18 de Julio 1234",
    direccionDestino="Pocitos"
)

# Intersection to place of interest
result = consultar_rutas_omnibus_mejorado(
    direccionOrigen="18 de Julio esquina Rio Branco", 
    direccionDestino="Shopping Tres Cruces"
)

# Place to place with alternatives
result = consultar_rutas_omnibus_mejorado(
    direccionOrigen="Hospital de Clínicas",
    direccionDestino="Ciudad Vieja",
    incluir_alternativas=True
)
```

### **Location Resolution**
```python
# Resolve any location description
locations = resolver_ubicacion_completa("Shopping cerca de Pocitos")

# Search for places
places = buscar_lugares_y_vias("hospital")

# Get intersection coordinates
intersection = obtener_coordenadas_esquina("123", "456")  # street codes
```

### **Real-time Information**
```python
# Get real-time bus arrivals
eta_info = consultar_eta_tiempo_real(
    parada_id=1234,
    lineas=["181", "407"]
)

# Get scheduled times
schedule = consultar_horarios_programados_omnibus(
    direccion="Plaza Independencia",
    tiempo="2024-01-15 14:00"
)
```

## 🔄 Tool Integration Workflow

### **For "Cómo ir de X a Y" queries:**

1. **Option A - Direct Route Planning:**
   ```python
   # LLM can directly use the enhanced tool
   result = consultar_rutas_omnibus_mejorado(origen, destino)
   ```

2. **Option B - Step-by-step Resolution:**
   ```python
   # For ambiguous locations, resolve first
   origenes = resolver_ubicacion_completa(origen)
   destinos = resolver_ubicacion_completa(destino)
   
   # Then calculate route with specific locations
   result = consultar_rutas_omnibus_mejorado(
       origenes[0]['descripcion'], 
       destinos[0]['descripcion']
   )
   ```

3. **Option C - Explore and Choose:**
   ```python
   # Search for options
   opciones = buscar_lugares_y_vias("shopping")
   
   # Let user choose and then plan route
   result = consultar_rutas_omnibus_mejorado(origen, opcion_elegida)
   ```

## 🌟 Key Features

- **Natural Language Processing**: Handles complex location descriptions
- **Intelligent Location Resolution**: Automatically detects addresses, intersections, places
- **Complete API Coverage**: Full access to Montevideo's transportation APIs
- **Error Handling**: Graceful fallbacks and alternative suggestions
- **Real-time Integration**: Live bus tracking and ETAs
- **Flexible Querying**: From simple to complex route planning scenarios

## 📋 Supported Location Types

- **Addresses**: Street name + number (e.g., "18 de Julio 1234")
- **Intersections**: Street1 + esquina/y + Street2 (e.g., "18 de Julio esquina Rio Branco")
- **Places of Interest**: 
  - Shopping centers
  - Hospitals and clinics
  - Schools and universities
  - Parks and recreational areas
  - Beaches
  - Cultural sites
  - Sports facilities
  - Government buildings
- **Neighborhoods**: General area names (e.g., "Pocitos", "Ciudad Vieja")
- **Landmarks**: Well-known places (e.g., "Plaza Independencia", "Mercado del Puerto")

## 🔧 Technical Details

### Configuration
The server connects to multiple Montevideo government APIs:
- **Location Services**: `https://api.montevideo.gub.uy/ubicacionesRest/`
- **Bus Schedules**: `https://api.montevideo.gub.uy/transporteRest/`
- **Real-time ETAs**: `https://m.montevideo.gub.uy/stmonlineRest/`
- **Route Planning**: `https://api.montevideo.gub.uy/comoirRest/`
- **Geocoding**: `https://direcciones.ide.uy/api/v0/geocode/`

### Code Organization
- **`server.py`**: Main MCP server with all tools exposed to LLMs
- **`utils.py`**: General utilities for bus data processing and geocoding
- **`como_ir/`**: Package containing ComoIr-specific location resolution logic
  - **`como_ir/utils.py`**: All location resolution functions translated from the original JavaScript ComoIr app

### Error Handling
- Automatic fallbacks for failed location resolution
- Alternative suggestions when primary resolution fails
- Graceful degradation for API timeouts
- Comprehensive error messages for debugging

This comprehensive tool set enables LLMs to handle complex transportation queries in natural language, automatically resolving locations and providing detailed route information for Montevideo's public transport system.
