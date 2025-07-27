# Movilidad Con Prompts - Montevideo Public Transport MCP Server

A Model Context Protocol (MCP) server that provides real-time and scheduled bus information for Montevideo, Uruguay's public transportation system. This server exposes three powerful tools for querying bus schedules, routes, and real-time arrival information.

> Built for the "Build your MCP" Hackathon organized by Google Developers Groups Uruguay.

## 🚌 Available MCP Tools

### 1. `consultar_horarios_programados_omnibus`
**Purpose**: Query scheduled bus times near a specific address

**Parameters**:
- `direccion` (string): Address in natural language (e.g., "18 de Julio 1234" or "Pocitos esquina Buxareo")
- `tiempo` (optional string): Date and time in "YYYY-MM-DD HH:MM" format (defaults to current time)
- `radio` (optional float): Search radius in meters (default: 200m)

**Returns**: Array of nearby bus stops with scheduled bus times, including:
- Bus stop location (street intersection)
- Scheduled departure times
- Bus line numbers
- Destinations
- Minutes until arrival

**Use Cases**:
- Planning trips with scheduled bus information
- Finding bus stops near a location
- Getting comprehensive schedule data for a specific time

### 2. `consultar_rutas_omnibus`
**Purpose**: Find bus routes between two addresses

**Parameters**:
- `direccionOrigen` (string): Origin address ("street number" or "street esquina street")
- `direccionDestino` (string): Destination address (same format)

**Returns**: Array of route options, each containing:
- Sequence of route segments
- Bus lines to take
- Transfer points
- Walking distances at origin and destination
- Stop descriptions

**Use Cases**:
- Trip planning between two locations
- Finding optimal routes with transfers
- Getting detailed walking instructions

### 3. `consultar_eta_tiempo_real`
**Purpose**: Get real-time estimated arrival times (ETAs) for buses at a specific stop

**Parameters**:
- `parada_id` (integer): Bus stop ID (obtained from `consultar_horarios_programados_omnibus`)
- `lineas` (optional array): Specific bus lines to query (e.g., ["181", "407"])

**Returns**: Real-time information including:
- Bus line numbers
- Destinations
- ETA in minutes and seconds
- Distance of approaching buses
- Bus and company codes
- GPS coordinates

**Use Cases**:
- Real-time arrival information
- Checking specific bus lines
- Live tracking of approaching buses

### Configuration
The server is configured to connect to Montevideo's public APIs:
- **Geocoding**: `https://direcciones.ide.uy/api/v0/geocode/BusquedaDireccion`
- **Bus Schedules**: `https://api.montevideo.gub.uy/transporteRest/`
- **Real-time ETAs**: `https://m.montevideo.gub.uy/stmonlineRest/`
- **Route Planning**: `https://api.montevideo.gub.uy/comoirRest/`

## 📋 Usage Examples

### Finding Bus Schedules
```python
# Get buses near Plaza Independencia at 2 PM today
result = consultar_horarios_programados_omnibus(
    direccion="Plaza Independencia",
    tiempo="2024-01-15 14:00",
    radio=300
)
```

### Planning a Route
```python
# Route from Pocitos to Ciudad Vieja
result = consultar_rutas_omnibus(
    direccionOrigen="Pocitos esquina Buxareo",
    direccionDestino="Ciudadela esquina 25 de Mayo"
)
```

### Real-time Bus Tracking
```python
# Check when the next 181 bus arrives at stop 1234
result = consultar_eta_tiempo_real(
    parada_id=1234,
    lineas=["181"]
)
```
