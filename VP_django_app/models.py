# /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP_django_app/models.py
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class App_User(AbstractUser):
    email = models.EmailField(blank=False, null=False, unique=True)
    name = models.CharField(max_length=255, null=False, blank=False)
    # Tells Django to utilize users email as their username
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.name} | {self.email}"


class Event(models.Model):
    organizer = models.ForeignKey(App_User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    max_volunteers = models.IntegerField()

    def __str__(self):
        return self.title


class Volunteer(models.Model):
    user = models.ForeignKey(App_User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    registration_date = models.DateField(auto_now_add=True)
    num_guests = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username} - {self.event.title}"


class Waitlist(models.Model):
    user = models.ForeignKey(App_User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    waitlist_date = models.DateField(auto_now_add=True)
    num_guests = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username} - {self.event.title}"


class Message(models.Model):
    sender = models.ForeignKey(App_User, related_name='sent_messages', on_delete=models.CASCADE)
    receiver = models.ForeignKey(App_User, related_name='received_messages', on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender.username} -> {self.receiver.username}"
