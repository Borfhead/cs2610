# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-23 04:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('language', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('git_link', models.CharField(max_length=255)),
            ],
        ),
        migrations.AlterField(
            model_name='resume_file',
            name='file',
            field=models.FileField(upload_to='Resume/'),
        ),
    ]