from django.contrib import admin
from . import models


@admin.register(models.Business)
class BusinessAdmin(admin.ModelAdmin):

    list_display = (
        'business_code',
        #'workers',
    )

@admin.register(models.Worker)
class WorkerAdmin(admin.ModelAdmin):

    list_display = (
        'name',
        'role',
        'status',
        'comment',
    )

@admin.register(models.Project)
class ProjectAdmin(admin.ModelAdmin):
    
    search_fields = (
        'project_code',
        'title',
    )

    list_filter = (
        'category',
    )

    list_display = (
        'project_code',
        'category',
        'title',
        'status',
        'classification',
        'site',
        'ers_code',
        'opened_at',
        'closed_at',
        'agent',
        'appscan',
        'requester',
    )


@admin.register(models.Vulnerability)
class VulnerabilityAdmin(admin.ModelAdmin):

    search_fields = (
        'project_code',
    )

    list_filter = (
        'project_code',
        'status',
    )

    list_display = (
        'project_code', 
        'project_vuln_code',
        'title',
        'sub_title',
        'vuln_class',
        'vuln_code',
        'area',
        'service',
        'level',
        'impact',
        'status',
        'opened_at',
        'closed_at',
    )


@admin.register(models.Report)
class ReportAdmin(admin.ModelAdmin):

    search_fields = (
        'project_vuln_code',
    )

    list_filter = (
        'project_vuln_code',
    )

    list_display = (
        'project_vuln_code',
        'sequence',
        'caption',
        'image',
    )


@admin.register(models.Issue)
class IssueAdmin(admin.ModelAdmin):

    list_display = (
        'issue',
        'business_status',
        'created_at',
    )


@admin.register(models.ProjectComment)
class CommentAdmin(admin.ModelAdmin):

    list_display = (
        'project_code',
        'message',
        'creator'
    )


@admin.register(models.IssueComment)
class CommentAdmin(admin.ModelAdmin):

    list_display = (
        'issue',
        'message',
        'creator'
    )