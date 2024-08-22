from django.db import models

class Education(models.Model):
    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    years = models.CharField(max_length=255)
    completed = models.BooleanField(default=True)
    description = models.TextField()
    ordinal = models.IntegerField()

    def __str__(self) -> str:
        return self.school
    
class Experience(models.Model):
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    years = models.CharField(max_length=255)
    description = models.TextField()
    ordinal = models.IntegerField()

    def __str__(self) -> str:
        return self.title
    