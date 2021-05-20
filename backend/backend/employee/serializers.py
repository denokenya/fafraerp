from rest_framework import serializers
from . import models


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        fields = fields ='__all__'
        model = models.Employee
