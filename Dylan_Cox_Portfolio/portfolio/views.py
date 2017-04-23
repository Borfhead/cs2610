from django.shortcuts import render
from .models import project
# Create your views here.
def index(request):
    return render(request, 'portfolio/index.html')
    
def projects_index(request):
    projects_list = project.objects.all()
    context = {'projects_list' : projects_list}
    return render(request, 'portfolio/projects.html', context)