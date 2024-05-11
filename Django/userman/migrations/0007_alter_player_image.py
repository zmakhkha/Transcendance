# Generated by Django 4.2.11 on 2024-05-04 17:26

from django.db import migrations, models
import userman.validators


class Migration(migrations.Migration):

    dependencies = [
        ('userman', '0006_alter_player_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='image',
            field=models.ImageField(default='default.png', upload_to='store/images', validators=[userman.validators.max_size_validator]),
        ),
    ]
