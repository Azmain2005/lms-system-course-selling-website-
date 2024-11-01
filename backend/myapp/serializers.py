from rest_framework import serializers
from .models import Course,Videos,Users

class CourseSerializer (serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class VideoSerializer (serializers.ModelSerializer):
    class Meta:
        model = Videos
        fields = '__all__'

class UsersSerializer (serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'