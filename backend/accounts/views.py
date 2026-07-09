from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated


User = get_user_model()

# Purpose: the view for signup.tsx. If succesful, will create the account
# Input: a POST request send by frontend by onsubmit
# Output: a success or fail message
@api_view(['POST'])
def signup(request):
  email = request.data.get('email')
  password = request.data.get('password')

  if not email or not password:
    return Response({"error": "email and password are required"}, status=status.HTTP_400_BAD_REQUEST)

  if User.objects.filter(email=email).exists():
    return Response({"error": "email already taken"}, status=status.HTTP_400_BAD_REQUEST)

  User.objects.create_user(
    username=email,
    first_name=request.data.get('first_name', ''),
    last_name=request.data.get('last_name', ''),
    password=password,
    email=request.data.get('email', ''),
    user_type='U',
    city=request.data.get('city', ''),
    province=request.data.get('province', ''),
    street_name=request.data.get('street_name', ''),
    postal_code=request.data.get('postal_code', ''),
  )
  return Response({"message": "User created"}, status=status.HTTP_201_CREATED)



# Purpose: a view for sending user information
# Input: a GET request send by frontend. the request is rejected with a 401 if no valid JWT is in the Authorization header. 
# If valid, DRF automatically looks up the user from the token and attaches them to request.user
# Output: serializes the user's fields as JSON and sends it back to frontend
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
  user = request.user
  return Response({
    "first_name":  user.first_name,
    "last_name":   user.last_name,
    "email":       user.email,
    "city":        user.city,
    "province":    user.province,
    "street_name": user.street_name,
    "postal_code": user.postal_code,
    "user_type":   user.user_type,
  })