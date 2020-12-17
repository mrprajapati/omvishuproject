from django.db import models
from django.core.validators import RegexValidator

def image_upload(instance, filename):
    """
    Genrate Unique Image name for Student Image.
    """
    ext = filename.split('.')[-1]
    filename = "%s_%s_%s.%s" % (instance.first_name, instance.last_name, instance.email, ext)
    return f'student_images/{filename}'

phone_regex = RegexValidator(regex=r'^\d{10}$', message="Phone number must be entered in the format: 9999999999")

class Student(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    username = models.CharField(max_length=255, unique=True)
    phone_number = models.CharField(validators=[phone_regex], max_length=10, unique=True)
    email = models.EmailField(unique=True)
    image = models.ImageField(upload_to=image_upload)


    def __str__(self):
        return self.email
