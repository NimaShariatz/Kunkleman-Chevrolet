from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Vehicle

# Create your views here.



@api_view(['GET'])
def get_vehicles(request):
  vehicles = Vehicle.objects.all()
  data = [
    {
      "id":           v.id,
      "stock_number": v.stock_number,
      "brand":        v.brand,
      "model":        v.model,
      "name":         v.name,
      "year":         v.year,
      "price":        v.price,
      "mileage":      v.mileage,
      "vehicle_type": v.vehicle_type,
      "transmission": v.transmission,
      "fuel_type":    v.fuel_type,
      "colour":       v.colour,
      "location":     v.location,
    }
    for v in vehicles
  ]
  return Response(data)