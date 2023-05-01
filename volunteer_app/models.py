# volunteer_app/models.py
from django.db import models
from user_app.models import App_User


class Volunteer(models.Model):
    user = models.ForeignKey(App_User, on_delete=models.CASCADE)
    registration_date = models.DateField()
    # auto_now_add was messing up the incoming date going into db
    # registration_date = models.DateField(auto_now_add=True)
    num_guests = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} - {self.id}"
