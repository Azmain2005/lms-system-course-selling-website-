from django.shortcuts import render
from rest_framework import generics
from .models import Course,Videos,Users
from .serializers import CourseSerializer,VideoSerializer,UsersSerializer

# Create your views here.
class CourseListCreate(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    lookup_field ="pk"




class VideoListCreate(generics.ListCreateAPIView):
    queryset = Videos.objects.all()
    serializer_class = VideoSerializer

class VideoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = VideoSerializer
    lookup_field ="pk"



class UsersListCreate(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class UsersRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
    lookup_field ="pk"

def index(request):
    return render(request,'index.html')