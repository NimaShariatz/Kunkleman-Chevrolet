After creating a virtual environment, did `python -m pip install Django`. You can also just do `pip install -r requirements.txt` since Django is a requirement.

`django-admin startproject backend` -> creates a django project called backend

`python manage.py makemigrations` & `python manage.py migrate` -> commit changes from models to SQLite 











# Account Stuff

### Django Admin
- Username: CoreAdmin Password: Goofy6540 Email: nimashariat77@gmail.com


# Libraries
- django-cors-headers: to avoid the 403 forbidden errors that are raised by using ReactJS as frontend

- djangorestframework: so we can use django rest framework for the views.py which simplifies syntax. 
so no need to have `@csrf_exempt`, or `json.loads(request.body)`. use `request.data` instead. has built in support for djangorestframework-simplejwt which we'll need for login

