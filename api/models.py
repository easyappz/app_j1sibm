from django.db import models
from django.core.validators import RegexValidator


class Feedback(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(
        max_length=20,
        validators=[
            RegexValidator(
                r'^\\+?[78][0-9\\s\\-\\(]???[0-9][0-9]{2}[0-9]{7}$'
            )
        ],
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'api_feedback'
