# Generated by Django 2.0.3 on 2018-04-09 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('etas', '0019_auto_20180409_1024'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='closed_at',
            field=models.DateField(null=True, verbose_name='개선 완료일'),
        ),
        migrations.AlterField(
            model_name='vulnerability',
            name='closed_at',
            field=models.DateField(null=True, verbose_name='개선 완료일'),
        ),
    ]
