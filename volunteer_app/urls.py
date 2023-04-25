from django.urls import path

from . import views

urlpatterns = [
    path('volunteers_count/<str:date>/', views.get_volunteers_count, name='volunteers_count'),
    # path('', views.index, name='index'),
]