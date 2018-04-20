# Generated by Django 2.0.3 on 2018-04-03 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('etas', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='code',
        ),
        migrations.RemoveField(
            model_name='project',
            name='ers',
        ),
        migrations.AddField(
            model_name='project',
            name='category',
            field=models.CharField(choices=[('AS', 'AppScan'), ('BB', 'BugBounty'), ('BT', 'BreakTime'), ('EG', 'Guide'), ('ES', 'ERS'), ('ET', 'Task'), ('SC', 'Consulting'), ('QG', 'QualysGuard')], max_length=80, null=True, verbose_name='프로젝트 분류'),
        ),
        migrations.AddField(
            model_name='project',
            name='ers_code',
            field=models.CharField(max_length=80, null=True, verbose_name='ERS 요청번호'),
        ),
        migrations.AddField(
            model_name='project',
            name='project_code',
            field=models.CharField(max_length=80, null=True, verbose_name='프로젝트 코드'),
        ),
        migrations.AlterField(
            model_name='project',
            name='agent',
            field=models.BooleanField(verbose_name='Agent 진단 여부'),
        ),
        migrations.AlterField(
            model_name='project',
            name='appscan',
            field=models.BooleanField(verbose_name='AppScan 진행 여부'),
        ),
        migrations.AlterField(
            model_name='project',
            name='checker',
            field=models.CharField(max_length=80, verbose_name='진행자'),
        ),
        migrations.AlterField(
            model_name='project',
            name='classification',
            field=models.CharField(choices=[('Rq', 'Request'), ('Ev', 'Event'), ('NA', 'N/A')], max_length=80, verbose_name='진행 배경'),
        ),
        migrations.AlterField(
            model_name='project',
            name='requester',
            field=models.CharField(max_length=80, verbose_name='요청자'),
        ),
        migrations.AlterField(
            model_name='project',
            name='site',
            field=models.CharField(choices=[('Auction', '옥션'), ('Gmarket', '지마켓'), ('G9', '지구'), ('Common', '공통'), ('ETC', '기타')], max_length=80, null=True, verbose_name='영역'),
        ),
        migrations.AlterField(
            model_name='project',
            name='status',
            field=models.CharField(choices=[('Op', 'Open'), ('Cl', 'Closed'), ('Fx', 'Fixed'), ('Hd', 'Holding')], max_length=80, null=True, verbose_name='상태'),
        ),
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(max_length=80, null=True, verbose_name='프로젝트 명'),
        ),
    ]