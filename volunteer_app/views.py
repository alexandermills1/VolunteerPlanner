# /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP_django_app/views.py
import os
from django.http import JsonResponse  
from .models import Volunteer
from django.db.models import Sum
from datetime import datetime
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


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


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_volunteers_list(request, date):
    try:
        date_object = datetime.strptime(date, "%Y-%m-%d").date()
        volunteers = Volunteer.objects.filter(registration_date=date_object)
        volunteers_data = [{"id": v.id, "name": f"{v.user.first_name} {v.user.last_name}", "num_guests": v.num_guests} for v in volunteers]
        return JsonResponse({"volunteers": volunteers_data})
    except Exception as e:
        print(e)
        return JsonResponse({"error": str(e)})


@csrf_exempt
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def register_volunteer(request):
    try:
        user = request.user
        print(user)
        date = request.data.get('date')
        print(date)
        num_guests = request.data.get('num_guests', 0)
        print(num_guests)
        # date_object = datetime.strptime(date, "%Y-%m-%d").date()
        # print(date_object)
        volunteer = Volunteer(user=user,
                              registration_date=date,
                              num_guests=num_guests)
        volunteer.save()

        # Send email using SendGrid
        message = Mail(
            from_email='acmills19@gmail.com',  # using my email for the example
            # to_emails=user.email, # use this for real world
            to_emails='acmills19@gmail.com',
            subject='You are registered',
            html_content=f'<strong>You are registered to help '
            f'{ date }</strong>'

            # f'{date.strftime("%Y-%m-%d")}</strong>'
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


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_volunteer_registration(request, date):
    try:
        user = request.user
        date_object = datetime.strptime(date, "%Y-%m-%d").date()
        volunteer = Volunteer.objects.filter(user_id=user.id, registration_date=date_object).first()
        if volunteer is None:
            return JsonResponse({"error": "Volunteer registration not found"})
        volunteer.delete()
        return JsonResponse({"message": "Volunteer registration deleted successfully"})
    except Exception as e:
        print(e)
        return JsonResponse({"error": str(e)})
    

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user_volunteer_list(request):
    try:
        user = request.user
        volunteer_list = Volunteer.objects.filter(user=user)
        volunteer_data = [{"id": v.id, "registration_date": v.registration_date.strftime("%Y-%m-%d"), "num_guests": v.num_guests} for v in volunteer_list]
        return JsonResponse({"user_volunteer_list": volunteer_data})
    except Exception as e:
        print(e)
        return JsonResponse({"error": str(e)})


# # I dont know how this program will react to me not including the num of guests
# @api_view(["DELETE"])
# @permission_classes([IsAuthenticated])
# def delete_volunteer_registration(request, date):
#     try:
#         user = request.user
#         print(user)
#         date = request.data.get('date')
#         print(date)
#         # date_object = datetime.strptime(date, "%Y-%m-%d").date()
#         # volunteer = Volunteer.objects.filter(user_id=user_id, registration_date=date_object)
#         volunteer = Volunteer(user=user,
#                         registration_date=date)
#         volunteer.delete()
#         return JsonResponse({"message": "Volunteer registration deleted successfully"})
#     except Exception as e:
#         print(e)
#         return JsonResponse({"error": str(e)})


# # * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *



# # * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
# @api_view(["DELETE"])
# @permission_classes([IsAuthenticated])
# def delete_volunteer_registration(request, user_id, date):
#     try:
#         date_object = datetime.strptime(date, "%Y-%m-%d").date()
#         volunteer = Volunteer.objects.filter(user_id=user_id, registration_date=date_object)
#         volunteer.delete()
#         return JsonResponse({"message": "Volunteer registration deleted successfully"})
#     except Exception as e:
#         print(e)
#         return JsonResponse({"error": str(e)})



# # * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

# @csrf_exempt
# @api_view(["POST"])
# @permission_classes([IsAuthenticated])
# def register_volunteer(request):

#     try:
#         user = request.user
#         print(user)
#         date = request.data.get('date')
#         print(date)
#         num_guests = request.data.get('num_guests', 0)
#         print(num_guests)
#         # date_object = datetime.strptime(date, "%Y-%m-%d").date()
#         # print(date_object)
#         volunteer = Volunteer(user=user,
#                               registration_date=date,
#                               num_guests=num_guests)
#         volunteer.save()

#         return JsonResponse({"message": "Volunteer registered successfully"})

#     except Exception as e:
#         print(e)
#         return JsonResponse({"error": str(e)})

# # * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *