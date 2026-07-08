from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from django.http import JsonResponse
import json

User = get_user_model()


@csrf_exempt
def signup(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")

        if User.objects.filter(username=username).exists():
            return JsonResponse({"error": "Username already taken"}, status=400)

        user = User.objects.create_user(
            username=username,
            password=password,
            email=data.get("email", ""),
            user_type="U",
            city=data.get("city", ""),
            province=data.get("province", ""),
            street_name=data.get("street_name", ""),
            postal_code=data.get("postal_code", ""),
        )
        return JsonResponse({"message": "User created"}, status=201)

    return JsonResponse({"error": "Method not allowed"}, status=405)



# Create your views here.
