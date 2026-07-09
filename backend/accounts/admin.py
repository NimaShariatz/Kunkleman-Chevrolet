from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


# purpose: allow the django admin panel to update and create users with these fields in them
class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + ( #for the admin/ page. email is a default fied
        ('Additional Info', {
            'fields': ('user_type', 'city', 'province', 'street_name', 'postal_code')
        }),
    )
    add_fieldsets = UserAdmin.add_fieldsets + ( #for the admin/ "create user" page
        ('Additional Info', {
            'fields': ('email', 'user_type', 'city', 'province', 'street_name', 'postal_code')
        }),
    )

admin.site.register(User, CustomUserAdmin)

# Register your models here.
