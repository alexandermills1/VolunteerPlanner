# /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP_django_app/views.py
# from django.shortcuts import render # * * * * * * * * * * * * * * * * * * *
import os
from django.http import JsonResponse  # * * * * * * * * * * * * * * * * * * *
# from django.http import JsonResponse, HttpResponse
# from django.contrib.auth import authenticate, login, logout
# from .models import App_User, Volunteer
from .models import Volunteer
# from django.core.serializers import serialize
from django.db.models import Sum
from datetime import datetime
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
# * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
from django.views.decorators.csrf import csrf_exempt
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
# * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_volunteers_count(request, date):
    try:
        date_object = datetime.strptime(date, "%Y-%m-%d").date()
        total_volunteers = Volunteer.objects \
            .filter(registration_date=date_object) \
            .aggregate(total=Sum('num_guests'))['total']
        return JsonResponse({
            "volunteers_count": total_volunteers if total_volunteers else 0
        })
    except Exception as e:
        print(e)
        return JsonResponse({"error": str(e)})


# # * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
# @csrf_exempt
# @api_view(["POST"])
# @permission_classes([IsAuthenticated])
# def register_volunteer(request):
#     # need to verify if they are already signed up, user can sign up multiple times
#     # add sendgrid
#     try:
#         user = request.user
#         date = request.data.get('date')
#         num_guests = request.data.get('num_guests', 0)
#         date_object = datetime.strptime(date, "%Y-%m-%d").date()
#         volunteer = Volunteer(user=user,
#                               registration_date=date_object,
#                               num_guests=num_guests)
#         volunteer.save()

#         return JsonResponse({"message": "Volunteer registered successfully"})

#     except Exception as e:
#         print(e)
#         return JsonResponse({"error": str(e)})

@csrf_exempt
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def register_volunteer(request):
    try:
        user = request.user
        date = request.data.get('date')
        num_guests = request.data.get('num_guests', 0)

        date_object = datetime.strptime(date, "%Y-%m-%d").date()

        volunteer = Volunteer(user=user,
                              registration_date=date_object,
                              num_guests=num_guests)
        volunteer.save()

        # Send email using SendGrid
        message = Mail(
            from_email='acmills19@gmail.com',
            # to_emails=user.email,
            to_emails='acmills19@gmail.com',
            subject='You are registered',
            html_content=f'<strong>You are registered to help {date_object.strftime("%Y-%m-%d")}</strong>'
        )
        try:
            sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
            response = sg.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
        except Exception as e:
            print(e)

        return JsonResponse({"message": "Volunteer registered successfully"})

    except Exception as e:
        print(e)
        return JsonResponse({"error": str(e)})