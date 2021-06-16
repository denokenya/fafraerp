from django.contrib import admin
from .models import Employee


class EmployeeAdmin(admin.ModelAdmin):

    list_display = ('employeeID', 'employeeRole', 'employeeDesignation',
                    'employeeDepartment', 'employeeFirstName', 'employeeLastName', 'employeePhone', 'employeeEmail')
    search_fields = ["employeeID"]
    ordering = ["employeeID"]


admin.site.register(Employee, EmployeeAdmin)
