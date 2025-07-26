from utils import get_stops_within_radius

# Ejemplo: Buscar paradas dentro de 500 metros
latitude = -34.87240513
longitude = -56.14675823
max_distance = 500  # metros

paradas_cercanas = get_stops_within_radius(latitude, longitude, max_distance)

print(f"Paradas encontradas dentro de {max_distance} metros:")
print(f"Total: {len(paradas_cercanas)} paradas\n")

for i, parada in enumerate(paradas_cercanas[:5]):  # Mostrar las 5 más cercanas
    print(f"{i+1}. ID: {parada['busstopId']}")
    print(f"   Distancia: {parada['distance']:.1f} metros")
    print(f"   Ubicación: {parada['street1']} y {parada['street2']}")
    print()
