# Generated by Django 3.2.3 on 2021-05-19 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='employeeDateOfBirth',
            field=models.DateField(default='1900-01-01'),
        ),
        migrations.AddField(
            model_name='employee',
            name='employeeDateOfJoining',
            field=models.DateTimeField(default='1900-01-01'),
        ),
    ]
