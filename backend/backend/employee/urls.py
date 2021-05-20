from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("employees", views.PostViewSet , "employees")

urlpatterns = router.urls