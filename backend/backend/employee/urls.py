from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("employees", views.EmployeeViewSet , "employees")

urlpatterns = router.urls

