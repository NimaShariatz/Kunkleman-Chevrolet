from django.db import models
from django.contrib.auth.models import AbstractUser # extends Django's built-in AbstractUser. Access to username, password, email, etc.) and methods (is_authenticated, set_password, etc



  # Tiering
  # 1 - superuser: god
  # 2 - Admin: controls things
  # 3 - User: usual users

# AbstractUser gives these fields for free: username, password, first_name, last_name, is_staff, is_active, date_joined
class User(AbstractUser):
  USER_TYPES = [ # for a django bug
      ("A", "Admin"),
      ("U", "User"),
  ]
  user_type = models.CharField(max_length=1, choices=USER_TYPES, default="U")
  
  email = models.EmailField(blank=False)
  province = models.TextField()
  city = models.TextField()
  street_name = models.TextField()
  postal_code = models.CharField(max_length=7)
  




