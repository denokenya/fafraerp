from rest_framework import serializers
from . import models


class DesignationSerializer(serializers.ModelSerializer):

    class Meta:
        fields = fields = '__all__'
        model = models.Designation


class DepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        fields = fields = '__all__'
        model = models.Department


class RoleSerializer(serializers.ModelSerializer):

    class Meta:
        fields = fields = '__all__'
        model = models.Role


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        fields = fields = '__all__'
        model = models.Employee
