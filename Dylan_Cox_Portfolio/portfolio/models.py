from __future__ import unicode_literals
from django.db import models

# Create your models here.
class resume_file(models.Model):
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='Resume/')
    
    def __str__(self):
        return self.name
        
class project(models.Model):
    name = models.CharField(max_length=255)
    language = models.CharField(max_length=255)
    description = models.TextField()
    git_link = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name