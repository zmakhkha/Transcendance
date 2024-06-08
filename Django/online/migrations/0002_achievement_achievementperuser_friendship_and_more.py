# Generated by Django 4.2.13 on 2024-05-17 17:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('online', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Achievement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=56)),
                ('path', models.CharField(max_length=56)),
                ('xp', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='AchievementPerUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('obtaining_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Friendship',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='FriendshipRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('P', 'Pending'), ('A', 'Accepted'), ('R', 'Rejected')], default='P', max_length=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='GameHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('player_score', models.DecimalField(decimal_places=2, max_digits=5)),
                ('opponent_score', models.DecimalField(decimal_places=2, max_digits=5)),
                ('game_mode', models.CharField(choices=[('T', 'TOURNAMENT'), ('O', 'OPPONENT'), ('B', 'BOT')], default='O', max_length=1)),
                ('game_duration_minutes', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
        migrations.CreateModel(
            name='Invites',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('P', 'PENDING'), ('A', 'ACCEPTED'), ('R', 'REJECTED')], default='P', max_length=1)),
                ('date', models.DateField(auto_now=True)),
                ('msg', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('B', 'BALL'), ('P', 'PADDLE'), ('G', 'BGC'), ('A', 'AVATAR')], max_length=1)),
                ('name', models.CharField(max_length=32)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('path', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='ItemsPerUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('purchase_date', models.DateTimeField(auto_now_add=True)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='online.item')),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('is_read', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=255)),
                ('coins', models.IntegerField(default=0)),
                ('status', models.CharField(choices=[('O', 'ONLINE'), ('F', 'OFFLINE')], default='F', max_length=1)),
                ('level', models.IntegerField(default=0)),
                ('email', models.CharField(default='example@gmail.com', max_length=255, unique=True)),
                ('firstname', models.CharField(max_length=32)),
                ('lastname', models.CharField(max_length=32)),
                ('friends', models.ManyToManyField(through='online.Friendship', to='online.player')),
            ],
            options={
                'ordering': ['level'],
            },
        ),
        migrations.DeleteModel(
            name='User',
        ),
        migrations.AddField(
            model_name='message',
            name='receiver',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='received_messages', to='online.player'),
        ),
        migrations.AddField(
            model_name='message',
            name='sender',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sent_messages', to='online.player'),
        ),
        migrations.AddField(
            model_name='itemsperuser',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='online.player'),
        ),
        migrations.AddField(
            model_name='invites',
            name='receiver',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='received_invites', to='online.player'),
        ),
        migrations.AddField(
            model_name='invites',
            name='sender',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sent_invites', to='online.player'),
        ),
        migrations.AddField(
            model_name='gamehistory',
            name='opponent',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='opponent_games', to='online.player'),
        ),
        migrations.AddField(
            model_name='gamehistory',
            name='player',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='games_as_player', to='online.player'),
        ),
        migrations.AddField(
            model_name='friendshiprequest',
            name='from_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sent_requests', to='online.player'),
        ),
        migrations.AddField(
            model_name='friendshiprequest',
            name='to_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='received_requests', to='online.player'),
        ),
        migrations.AddField(
            model_name='friendship',
            name='player1',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='friendships1', to='online.player'),
        ),
        migrations.AddField(
            model_name='friendship',
            name='player2',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='friendships2', to='online.player'),
        ),
        migrations.AddField(
            model_name='achievementperuser',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='online.item'),
        ),
        migrations.AddField(
            model_name='achievementperuser',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='online.player'),
        ),
    ]
