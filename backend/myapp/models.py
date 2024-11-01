from django.db import models

class Course(models.Model):
    CourseID = models.CharField(max_length=100)
    title = models.CharField(max_length=300)
    image = models.ImageField(upload_to='uploads/')
    teacher =models.CharField(max_length=300 , null=True)
    teacherImage = models.ImageField(upload_to='uploads/', default='uploads/default_teacher_image.jpg')
    description = models.TextField()
    bigDescription = models.TextField( null=True)
    price =models.CharField(max_length=100 , null=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class Videos(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True)
    VidTitle = models.CharField(max_length=300)
    VidLink = models.CharField(max_length=250)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.VidTitle


class Users(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=250)
    courses = models.ManyToManyField(Course, related_name='students')

    def __str__(self):
        return self.name