from django.db import models
from django.db.models import Max
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings


class Vehicle(models.Model):

    VEHICLE_TYPES = [
      ('U', 'Used'),
      ('N', 'New'),
    ]
    TRANSMISSION_TYPES = [
      ('A', 'Automatic'),
      ('M', 'Manual'),
    ]
    FUEL_TYPES = [
        ('E', 'Electric'),
        ('P', 'Petrol'),
    ]
    COLOUR_CHOICES = [
      ('blue',       'Blue'),
      ('red',        'Red'),
      ('yellow',     'Yellow'),
      ('bronze',     'Bronze'),
      ('pink',       'Pink'),
      ('green',      'Green'),
      ('black',      'Black'),
      ('white',      'White'),
      ('teal',       'Teal'),
      ('turquoise',  'Turquoise'),
      ('other',      'Other'),
    ]


    owner = models.ForeignKey( # Accounts user foreignKey
      settings.AUTH_USER_MODEL,
      on_delete=models.CASCADE, # can be SET_NULL (vehicle stays in DB, owner becomes null (good for inventory you want to keep)), CASCADE ( vehicle gets deleted too (probably not what you want for a dealership)), or PROTECT (prevents deleting the user if they have vehicles)
      #null=True, # can be null
      #blank=True, # can be blank
      related_name='vehicles' # lets you do user.vehicles.all() to get all vehicles belonging to a user.
    )


    # Identity
    brand       = models.CharField(max_length=100)
    model       = models.CharField(max_length=100)
    name        = models.CharField(max_length=200)
    year        = models.DateField()

    # Listing
    location    = models.TextField()
    price       = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0.01)])
    description = models.TextField()

    # Details
    vehicle_type      = models.CharField(max_length=1, choices=VEHICLE_TYPES)
    stock_number      = models.PositiveIntegerField(unique=True, editable=False)
    mileage           = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    transmission      = models.CharField(max_length=1, choices=TRANSMISSION_TYPES)
    fuel_type         = models.CharField(max_length=1, choices=FUEL_TYPES)
    cylinders         = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(16)])
    colour            = models.CharField(max_length=20, choices=COLOUR_CHOICES)
    upholstery_colour = models.CharField(max_length=20, choices=COLOUR_CHOICES)

    def save(self, *args, **kwargs):
      if not self.pk:  # if primary key doesn't exist yet. otherwise this runs on "save" as well. not good.
        max_stock = Vehicle.objects.aggregate(Max('stock_number'))['stock_number__max'] # queries the DB for the highest stock_number currently in the table. Returns something like {'stock_number__max': 42}
        self.stock_number = (max_stock or 0) + 1
      super().save(*args, **kwargs) #  calls Django's original save method to actually write the record to the database. This must always be called, otherwise nothing gets saved.
      
      
    def __str__(self): # for admin panel naming
      return f"{self.year} {self.brand} {self.model} — Stock #{self.stock_number}"