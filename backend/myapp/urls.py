from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path("courses/", views.CourseListCreate.as_view(), name="course-create-views"),
    path("courses/<int:pk>/", views.CourseRetrieveUpdateDestroy.as_view(), name="update",),


    path("videos/", views.VideoListCreate.as_view(), name="video-create-views"),
    path("videos/<int:pk>/", views.VideoRetrieveUpdateDestroy.as_view(), name="update",),

    path("users/", views.UsersListCreate.as_view(), name="video-create-views"),
    path("users/<int:pk>/", views.UsersRetrieveUpdateDestroy.as_view(), name="update",)
]

