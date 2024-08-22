from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EducationSerializer, ExperienceSerializer
from .models import Education, Experience

class EducationView(viewsets.ModelViewSet):
    serializer_class = EducationSerializer
    queryset = Education.objects.all()

class ExperienceView(viewsets.ModelViewSet):
    serializer_class = ExperienceSerializer
    queryset = Experience.objects.all()
