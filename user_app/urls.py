# user_app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.user_sign_up, name='register'),
    path('user/login/', views.user_log_in, name='signin'),
    path('user/curruser/', views.curr_user, name='curruser'),
    path('user/logout/', views.user_log_out, name='signout'),
    path('api/get_weather_data/<str:date>/',
         views.get_weather_data,
         name='get_weather_data'),
    path('', views.send_the_index, name='index'),
]
