from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from Popolapp.models import Questions, Request, Main_screen, Contact_items

# Create your views here.


def main(request):
    main_screen = Main_screen.objects.all()
    contact_items  = Contact_items.objects.all()
    return render(request, 'index.html', {'main_screen':main_screen, 'contact_items':contact_items})



def message(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        phone_number = request.POST.get('phone_number') 
        message = request.POST.get('message') 
        clients_message_and_number = f"{message} | Номер телефона:{phone_number}"
        mail = send_mail(f'{name}', f'{clients_message_and_number}', 'popolam.2022@mail.ru', ['popolamnsk@yandex.ru'], fail_silently=False)
        return HttpResponseRedirect('/')

def order(request):
    if request.method == 'POST':
        name = request.POST.get('clients_name')
        phone_number = request.POST.get('clients_phone_number') 
        message = request.POST.get('clients_order') 
        mail = send_mail(f'{name}', f'{message}', 'popolam.2022@mail.ru', ['popolamnsk@yandex.ru'], fail_silently=False)
        return HttpResponseRedirect('/')

def admin_order(request):
    requester = Request()
    if request.method == 'POST':
        requester.request_name = request.POST.get('clients_name')
        requester.request_phone_number = request.POST.get('clients_phone_number')
        requester.save()
        return HttpResponseRedirect('/')



def admin_message(request):
    questions = Questions()
    if request.method == 'POST':
        questions.name = request.POST.get('name')
        questions.phone_number = request.POST.get('phone_number') 
        questions.message = request.POST.get('message') 
        questions.save()
        return HttpResponseRedirect('/')
