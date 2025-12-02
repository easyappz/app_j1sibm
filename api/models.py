from django.db import models
from django.core.validators import RegexValidator


class Feedback(models.Model):
    name = models.CharField(max_length=255, min_length=1)
    phone = models.CharField(
        max_length=20,
        validators=[
            RegexValidator(
                r'^\+?[7|8][ \\-]?[0-9]{10,}$'
            )
        ],
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'api_feedback'