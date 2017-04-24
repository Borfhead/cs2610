from django.shortcuts import render
from .models import project
# Create your views here.
def index(request):
    newest_projects = project.objects.order_by('-pub_date')[:5]
    context = {'newest_projects' : newest_projects}
    return render(request, 'portfolio/index.html', context)
    
def projects_index(request):
    projects_list = project.objects.order_by('-pub_date')
    context = {'projects_list' : projects_list}
    return render(request, 'portfolio/projects.html', context)