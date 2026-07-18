from django.contrib import admin
from django.urls import path
from accounts.views import signup, me
from vehicles.views import get_vehicles
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView


urlpatterns = [
  path('admin/', admin.site.urls),
  path('api/signup/', signup), # - creates a user
  path('api/login/', TokenObtainPairView.as_view()), # - returns access + refresh token
  path('api/token/refresh/', TokenRefreshView.as_view()), 
  path('api/me/', me), # - returns user info (requires auth)returns user info (requires auth)
  path('api/schema/', SpectacularAPIView.as_view(), name='schema'),      # - raw OpenAPI schema (JSON)
  path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema')),  # - interactive UI
  path('api/vehicles/', get_vehicles), # - returns vehicles data to home page
]