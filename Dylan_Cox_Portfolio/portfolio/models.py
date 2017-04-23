from __future__ import unicode_literals
from django.db import models

# Create your models here.
class resume_file(models.Model):
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='Resume/')
    
    def __str__(self):
        return self.name