from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token

router = DefaultRouter()
router.register("designation", views.DesignationViewSet, "designations")
router.register("department", views.DepartmentViewSet, "departments")
router.register("role", views.RoleViewSet, "roles")
router.register("employee", views.EmployeeViewSet, "employees")


#urlpatterns = router.urls
urlpatterns = [
    path('api/token', obtain_auth_token, name='api-token'),
    path('api/', include(router.urls)),
]
