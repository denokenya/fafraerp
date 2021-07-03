from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from .models import Employee, Designation, Department, Role
from .serializers import EmployeeSerializer, DepartmentSerializer, DesignationSerializer, RoleSerializer


class DesignationViewSet(ModelViewSet):
    queryset = Designation.objects.all()
    serializer_class = DesignationSerializer
    permission_classes = [AllowAny]


class DepartmentViewSet(ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    permission_classes = [AllowAny]


class RoleViewSet(ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    permission_classes = [AllowAny]


class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [AllowAny]
