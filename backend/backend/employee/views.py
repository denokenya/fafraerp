from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from .models import Employee
from .serializers import EmployeeSerializer


class PostViewSet(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny]
