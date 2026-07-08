from django.contrib import admin
from django.urls import path
from accounts.views import signup

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/signup/', signup),
]
