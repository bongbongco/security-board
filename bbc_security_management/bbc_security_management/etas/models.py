from django.db import models
from taggit.managers import TaggableManager
from django.contrib.humanize.templatetags.humanize import naturaltime
from imagekit.models import ProcessedImageField
from bbc_security_management.users import models as user_models
from django.utils.encoding import python_2_unicode_compatible
from django.db.models.functions import ExtractWeekDay


@python_2_unicode_compatible
class TimeStampedModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


@python_2_unicode_compatible
class Worker(TimeStampedModel):

    name = models.CharField('이름', max_length=80, null=True)
    role = models.CharField('역할', max_length=80, null=True)
    status = models.BooleanField('수행 여부')
    comment = models.CharField('담당 업무', max_length=80, null=True)
     
    def __str__(self):
        return '{}'.format(self.name)


@python_2_unicode_compatible
class Business(TimeStampedModel):

    business_code = models.CharField(
        '사업 명', 
        max_length=80, 
        null=True
        )
    workers = models.ManyToManyField(
        Worker, 
        verbose_name='이름'
        )
    
    @property
    def project_count(self):
        return self.projects.all().count()
    
    def __str__(self):
        return '{}'.format(self.business_code)


@python_2_unicode_compatible
class Issue(TimeStampedModel):

    business_code = models.ForeignKey(
        Business, 
        on_delete=models.CASCADE, 
        null=True, 
        related_name='issues', 
        verbose_name='사업 명'
        )
    issue = models.TextField(null=True)
    business_status = models.TextField(null=True)
    caption = models.TextField(null=True)
    creator = models.ForeignKey(
        user_models.User, 
        on_delete=models.CASCADE, 
        null=True, 
        related_name='issue_writer'
    )
    tags = TaggableManager()

    @property
    def natural_time(self):
        return naturaltime(self.created_at)

    def __str__(self):
        return '{} - {} - {}'.format(self.business_code, self.created_at, self.issue)


@python_2_unicode_compatible
class Project(TimeStampedModel):

    PROJECT_CATEGORY = (
        ('AS', 'AppScan'),
        ('BB', 'BugBounty'),
        ('BT', 'BreakTime'),
        ('EG', 'Guide'),
        ('ES', 'ERS'),
        ('ET', 'Task'),
        ('SC', 'Consulting'),
        ('QG', 'QualysGuard')
    )

    STATUS_CHOICES = (
        ('Open', 'Open'),
        ('Closed', 'Closed'),
        ('Fixed', 'Fixed'),
        ('Holding', 'Holding'),
    )

    CLASSIFICATION_CHOICES = (
        ('Request', 'Request'),
        ('Event', 'Event'),
        ('N/A', 'N/A'),
    )

    SITE_CHOICES = (
        ('Auction', '옥션'),
        ('Gmarket', '지마켓'),
        ('G9', '지구'),
        ('Common', '공통'),
        ('ETC', '기타'),
    )
    business_code = models.ForeignKey(
        Business, 
        on_delete=models.CASCADE, 
        null=True, 
        related_name='projects'
        )
    project_code = models.CharField(
        '프로젝트 코드', 
        max_length=80, 
        null=True
        )
    category = models.CharField(
        '프로젝트 분류', 
        max_length=80, 
        choices=PROJECT_CATEGORY, 
        null=True
        )
    title = models.CharField(
        '프로젝트 명', 
        max_length=80, 
        null=True
        ) 
    status = models.CharField(
        '상태', 
        max_length=80, 
        choices=STATUS_CHOICES, 
        null=True
        )
    classification = models.CharField(
        '진행 배경', 
        choices=CLASSIFICATION_CHOICES, 
        max_length=80
        ) 
    site = models.CharField(
        '영역', 
        max_length=80, 
        choices=SITE_CHOICES, 
        null=True
        )
    ers_code = models.CharField(
        'ERS 요청번호', 
        max_length=80, 
        null=True
        )
    opened_at = models.DateField(
        '프로젝트 등록일', 
        null=True, 
        blank=True
        )
    closed_at = models.DateField(
        '개선 완료일', 
        null=True, 
        blank=True
        )
    agent = models.BooleanField('Agent 진단 여부')
    appscan = models.BooleanField('AppScan 진행 여부')
    #creator = models.ForeignKey(user_models.User, on_delete=models.SET_NULL, null=True)
    requester = models.CharField('요청자', max_length=80)
    checker = models.ManyToManyField(Worker, verbose_name='검수자')

    @property
    def vulnerability_count(self):
        return self.vulnerabilitys.all().count()
   
    def __str__(self):
        return '{} - {}'.format(self.project_code, self.title)


@python_2_unicode_compatible
class Vulnerability(TimeStampedModel):

    CLASS_CHOICES = (
        ('MOBILE', '모바일'),
        ('PAYMENT', '페이먼트 (결제 시 금액/인증/쿠폰 조작 등)'),
        ('Platform_GMKT', '플랫폼 : GMKT'),
        ('Platform_IAC', '플랫폼 : IAC'),
        ('Platform_OTHER', '플랫폼 : OTHER'),
        ('SELLING', '셀링 (교환/반품/취소 등)'),
        ('SERVER/NETWORK', '서버/네트워크'),
    )

    AREA_CHOICES = (
        ('eBay', '이베이'),
        ('Vender', '벤더'),
    )

    SERVICE_CHOICES = (
        ('Ext', '외부'),
        ('Int', '내부'),
    )

    LEVEL_CHOICES = (
        ('Emergency', '긴급'),
        ('High', '상'),
        ('Medium', '중'),
        ('Low', '하'),
    )

    IMPACT_CHOICES = (
        ('P0', 'P0'),
        ('P1', 'P1'),
        ('P2', 'P2'),
        ('P3', 'P3'),
    )

    STATUS_CHOICES = (
        ('Open', 'Open'),
        ('Closed', 'Closed'),
        ('Fixed', 'Fixed'),
        ('Holding', 'Holding'),
    )

    project_code = models.ForeignKey(
        Project, 
        on_delete=models.CASCADE, 
        null=True, 
        related_name='vulnerabilitys',
        verbose_name='프로젝트 명'
        )
    project_vuln_code = models.CharField(
        '프로젝트 취약점 분류 코드', 
        max_length=80
        )
    title = models.CharField(
        '취약점 명', 
        max_length=80
        )
    sub_title = models.CharField(
        '요약', 
        max_length=140
        )
    vuln_class = models.CharField(
        '분류', 
        choices=CLASS_CHOICES, 
        max_length=80
        )
    vuln_code = models.CharField(
        '취약점 코드', 
        max_length=80
        )
    area = models.CharField(
        '영역', 
        choices=AREA_CHOICES, 
        max_length=80
        )
    service = models.CharField(
        '서비스 형태', 
        choices=SERVICE_CHOICES, 
        max_length=80
        )
    level = models.CharField(
        '위험도', 
        choices=LEVEL_CHOICES, 
        max_length=80
        )
    impact = models.CharField(
        '영향도', 
        choices=IMPACT_CHOICES, 
        max_length=80
        )
    status = models.CharField(
        '상태', 
        max_length=80, 
        choices=STATUS_CHOICES, 
        null=True)
    opened_at = models.DateField(
        '취약점 등록일', 
        null=True, 
        blank=True)
    closed_at = models.DateField(
        '개선 완료일', 
        null=True, 
        blank=True)
    summary = models.TextField(null=True)
    solution = models.TextField(null=True)

    def __str__(self):
        return '{} - {}'.format(self.project_vuln_code, self.title)


@python_2_unicode_compatible
class Report(TimeStampedModel):

    project_vuln_code = models.ForeignKey(
        Vulnerability, 
        on_delete=models.CASCADE, 
        null=True, 
        related_name='reports',
        verbose_name='취약점 코드'
        )
    sequence = models.CharField(
        '순서', 
        max_length=80, 
        null=True
        )
    caption = models.CharField(
        '설명', 
        max_length=140, 
        null=True
        )
    image = models.ImageField(null=True)

    def __str__(self):
        return '{} - {}'.format(self.project_vuln_code, self.caption)


@python_2_unicode_compatible
class ProjectComment(TimeStampedModel):

    project_code = models.ForeignKey(
        Project, 
        on_delete=models.CASCADE, 
        null=True, 
        related_name='comments',
        verbose_name='프로젝트 코드')
    creator = models.ForeignKey(
        user_models.User, 
        on_delete=models.SET_NULL, 
        null=True,
        verbose_name='작성자')
    message = models.TextField()

    def __str__(self):
        return '{}'.format(self.message)


@python_2_unicode_compatible
class IssueComment(TimeStampedModel):

    issue = models.ForeignKey(
        Issue, 
        on_delete=models.CASCADE, 
        null=True, 
        related_name='comments',
        verbose_name='이슈')
    creator = models.ForeignKey(
        user_models.User, 
        on_delete=models.SET_NULL, 
        null=True,
        verbose_name='작성자')
    message = models.TextField()

    def __str__(self):
        return '{}'.format(self.message)