from django.contrib import admin
from django.urls import path
from accounts.views import signup, me
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
  path('admin/', admin.site.urls),
  path('api/signup/', signup),
  path('api/login/', TokenObtainPairView.as_view()),
  path('api/token/refresh/', TokenRefreshView.as_view()),
  path('api/me/', me),
]