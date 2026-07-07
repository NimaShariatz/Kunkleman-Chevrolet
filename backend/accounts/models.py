from django.db import models
from django.contrib.auth.models import AbstractUser # extends Django's built-in AbstractUser. Access to username, password, email, etc.) and methods (is_authenticated, set_password, etc

# Create your models here.


class User(AbstractUser):
  USER_TYPES = ["Admin", "User"]
  user_type = models.CharField(max_length=1, choices=USER_TYPES)
  
  email = models.EmailField(blank=False)
  province = models.TextField()
  city = models.TextField()
  street_name = models.TextField()
  postal_code = models.CharField(max_length=7)
  




