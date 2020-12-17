
from django.contrib import admin
from django.conf.urls import url, include
from django.views.generic import TemplateView
from students import urls as api_urls

urlpatterns = [
    url('admin/', admin.site.urls),
    url('api/', include(api_urls)),
    url('', TemplateView.as_view(template_name='index.html')),
]
