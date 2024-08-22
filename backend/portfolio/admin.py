from django.contrib import admin
from .models import Education, Experience


class EducationAdmin(admin.ModelAdmin):
    list_display = ("school", "degree", "years", "completed", "description")
# Register your models here.

class ExperienceAdmin(admin.ModelAdmin):
    list_display = ("title", "company", "years", "description")

admin.site.register(Education, EducationAdmin)
admin.site.register(Experience, ExperienceAdmin)