# weather_info/urls.py
from django.urls import path
from .views import weather

urlpatterns = [
    # path('api/get_weather_data/<str:date>/',
    #      views.get_weather_data,
    #      name='get_weather_data'),
    path('', weather, name='weather'),

]
