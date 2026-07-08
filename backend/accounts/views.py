from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model



User = get_user_model()


@api_view(['POST'])
def signup(request):
  username = request.data.get('username')
  password = request.data.get('password')

  if not username or not password:
    return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

  if User.objects.filter(username=username).exists():
    return Response({"error": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)

  User.objects.create_user(
    username=username,
    password=password,
    email=request.data.get('email', ''),
    user_type='U',
    city=request.data.get('city', ''),
    province=request.data.get('province', ''),
    street_name=request.data.get('street_name', ''),
    postal_code=request.data.get('postal_code', ''),
  )
  return Response({"message": "User created"}, status=status.HTTP_201_CREATED)



# Create your views here.
