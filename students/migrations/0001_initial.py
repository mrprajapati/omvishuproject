# Generated by Django 3.1.4 on 2020-12-13 05:55

import django.core.validators
from django.db import migrations, models
import students.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('username', models.CharField(max_length=255, unique=True)),
                ('phone_number', models.CharField(max_length=10, unique=True, validators=[django.core.validators.RegexValidator(message='Phone number must be entered in the format: 9999999999', regex='^\\d{10}$')])),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('image', models.ImageField(upload_to=students.models.image_upload)),
            ],
        ),
    ]
