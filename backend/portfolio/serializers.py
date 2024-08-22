from rest_framework import serializers
from .models import Education, Experience

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('school', 'degree', 'years', 'completed', 'description', 'ordinal')

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('title', 'company', 'years', 'description', 'ordinal')