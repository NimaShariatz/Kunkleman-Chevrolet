from django.contrib import admin
from .models import Vehicle

# Register your models here.

class VehicleAdmin(admin.ModelAdmin):
  list_display = ("stock_number", "owner", "location")

admin.site.register(Vehicle, VehicleAdmin)