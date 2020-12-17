from django.conf.urls import url, include
from .views import StudentViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('studentReg', StudentViewSet)


urlpatterns = [
    url('', include(router.urls)),
]