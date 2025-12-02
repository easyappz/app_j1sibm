from django.db import migrations, models
import django.core.validators


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('phone', models.CharField(max_length=20, validators=[django.core.validators.RegexValidator(regex=r'^\\+?[78][0-9\\s\\-\\(\\)]???[0-9][0-9]{2}[0-9]{7}$')])),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
