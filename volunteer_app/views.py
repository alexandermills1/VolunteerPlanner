# /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP_django_app/views.py
# from django.shortcuts import render, redirect
# from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
# from django.contrib.auth import authenticate, login, logout
# from .models import App_User, Volunteer
from .models import Volunteer
# from django.core.serializers import serialize
from django.db.models import Sum
from datetime import datetime
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse


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
