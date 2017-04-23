from django.conf.urls import url
from django.conf import settings
from django.views.static import serve
from . import views

app_name = 'portfolio'
urlpatterns = [
    url(r'^$', views.index),
]