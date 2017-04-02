from django.shortcuts import render
from django.http import HttpResponse
from time import gmtime, strftime
# Create your views here.

def index(response):
    time = strftime("%Y-%m-%d %H:%M:%S", gmtime())
    return HttpResponse('Hello World! Date and time is: ' +time)