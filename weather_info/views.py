# weather_info/views.py
# from django.shortcuts import render
import requests
from dotenv import load_dotenv
import os
load_dotenv()


def weather():
    api_key = os.getenv('REACT_APP_OPENWEATHERMAP_API_KEY')
    print(api_key)
    city = 'Wichita'
    units = 'imperial'
    url = (f'http://api.openweathermap.org/data/2.5/weather?q={city}'
           f'&units={units}&appid={api_key}')
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data
    return None
