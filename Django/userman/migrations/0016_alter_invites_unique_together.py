# Generated by Django 4.2.11 on 2024-06-19 14:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userman', '0015_rename_msg_invites_room_id'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='invites',
            unique_together={('sender', 'receiver')},
        ),
    ]
