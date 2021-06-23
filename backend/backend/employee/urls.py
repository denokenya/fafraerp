from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("api", views.EmployeeViewSet, "employees")

urlpatterns = router.urls
