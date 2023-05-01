# volunteer_app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('volunteers_count/<str:date>/',
         views.get_volunteers_count,
         name='volunteers_count'),
    path('register_volunteer/',
         views.register_volunteer,
         name='register_volunteer'),


    # * * * * * * * * * *
    # path('register_volunteer/<str:date>/',
    #      views.register_volunteer,
    #      name='register_volunteer'),
    # path('unregister_volunteer/<str:date>/',
    #      views.unregister_volunteer,
    #      name='unregister_volunteer'),
    # * * * * * * * * * *
]
