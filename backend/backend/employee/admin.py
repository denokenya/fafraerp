from django.contrib import admin
from .models import Employee, Designation, Department, Role

'''Actions to be performed'''


def update_designation(modeladmin, request, queryset):
    queryset.update(role="Admin")


update_designation.short_description = 'Update role'


class DesignationAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']
    ordering = ['name']
    list_display_links = ['name']


class DepartmentAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']
    ordering = ['name']
    list_display_links = ['name']


class RoleAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']
    ordering = ['name']
    list_display_links = ['name']


class EmployeeAdmin(admin.ModelAdmin):

    list_display = [
        'employeeID',
        'employeeFirstName',
        'employeeLastName',
        # 'role',
        'designation',
        'department',
        'employeePhone',
        'employeeEmail',
        'is_active',


    ]
    search_fields = [
        'employeeID',
        'employeeFirstName',
        'employeeLastName',
        'employeePhone',
        'employeeEmail'

    ]
    ordering = ['employeeID']
    list_display_links = [
        'employeeID',
        'employeeFirstName',
        'employeeLastName',
    ]

    list_filter = [
        'role',
        'designation',
        'department',
    ]

    actions = [update_designation]


admin.site.register(Employee, EmployeeAdmin)

admin.site.register(Designation, DesignationAdmin)
admin.site.register(Department, DesignationAdmin)
admin.site.register(Role, RoleAdmin)
