from django.db import models

# Create your models here.


class SurveyQuestion(models.Model):
    respondent = models.CharField(max_length=100)
    counter = models.IntegerField(default=5)

    def __str__(self):
        return self.question_text
