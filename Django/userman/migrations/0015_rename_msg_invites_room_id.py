# Generated by Django 4.2.11 on 2024-06-19 13:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userman', '0014_merge_20240615_1251'),
    ]

    operations = [
        migrations.RenameField(
            model_name='invites',
            old_name='msg',
            new_name='room_id',
        ),
    ]
