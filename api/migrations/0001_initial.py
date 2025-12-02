from django.db import migrations, models
from django.core.validators import MinLengthValidator, RegexValidator


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, validators=[MinLengthValidator(1)])),
                ('phone', models.CharField(max_length=20, validators=[RegexValidator(regex=r'^\\+?[7|8][ \\-]?[0-9]{10,}$')])),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'api_feedback',
            },
        ),
    ]