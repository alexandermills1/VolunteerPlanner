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

    path('volunteers_list/<str:date>/',
         views.get_volunteers_list,
         name='volunteers_list'),  # this one

    path('delete_volunteer_registration/<str:date>/',
         views.delete_volunteer_registration,
         name='delete_volunteer_registration'),

    path('user_volunteer_list/',
         views.get_user_volunteer_list,
         name='user_volunteer_list'),
]

# * * * * * * * * * *
# path('delete_volunteer_registration/<int:user_id>/<str:date>/',
#      views.delete_volunteer_registration,
#      name='delete_volunteer_registration'),

# path('register_volunteer/<str:date>/',
#      views.register_volunteer,
#      name='register_volunteer'),
# path('unregister_volunteer/<str:date>/',
#      views.unregister_volunteer,
#      name='unregister_volunteer'),
# * * * * * * * * * *
# ]
