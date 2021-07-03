from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("designationapi", views.DesignationViewSet, "designations")
router.register("departmentapi", views.DepartmentViewSet, "departments")
router.register("roleapi", views.RoleViewSet, "roles")
router.register("employeeapi", views.EmployeeViewSet, "employees")


#urlpatterns = router.urls
urlpatterns = [
    path('', include(router.urls)),
]
