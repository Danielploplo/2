from django.db import models

# Create your models here.
class Questions(models.Model):
    name = models.CharField(max_length=100, null=True)
    phone_number = models.CharField(max_length=20, null=True)
    message = models.CharField(max_length=1000, null=True)
    date = models.DateTimeField(auto_now_add=True)

class Request(models.Model):
    request_name = models.CharField(max_length=100, null=True)
    request_phone_number = models.CharField(max_length=20, null=True)
    date = models.DateTimeField(auto_now_add=True)

class Contact_items(models.Model):
    contact_number = models.CharField(max_length=100, null=True)
    contact_email = models.CharField(max_length=100, null=True)
    date = models.DateTimeField(auto_now_add=True)

class Main_screen(models.Model):
    first_picture_title = models.CharField(max_length=80, null=True)
    first_picture_discription = models.CharField(max_length=100, null=True)
    second_picture_title = models.CharField(max_length=80, null=True)
    second_picture_discription = models.CharField(max_length=100, null=True)    
    date = models.DateTimeField(auto_now_add=True)