from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField, 
    TaggitSerializer)
from bbc_security_management.users import models as user_models
from . import models


class FeedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.user_models.User
        fields = (
            'username',
        )


class ReportSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Report
        fields = '__all__'


class ProjectCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.ProjectComment
        fields = '__all__'


class IssueCommentSerializer(serializers.ModelSerializer):

    creator = FeedUserSerializer(read_only=True)

    class Meta:
        model = models.IssueComment
        fields = (
            'id',
            'message',
            'creator',
            'created_at',
        )


class WorkerSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Worker
        fields = '__all__'


class VulnerabilitySerializer(serializers.ModelSerializer):
    
    reports = ReportSerializer(many=True)

    class Meta:
        model = models.Vulnerability
        fields = (
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
            'summary',
            'solution',
            'reports',
            'created_at',
            'updated_at',
            'closed_at',
        )


class ProjectSerializer(serializers.ModelSerializer):

    vulnerabilitys = VulnerabilitySerializer(many=True)
    comments = ProjectCommentSerializer(many=True)

    class Meta:
        model = models.Project
        fields = (
            'project_code',
            'category',
            'title',
            'status',
            'classification',
            'site',
            'ers_code',
            'closed_at', 
            'agent',
            'appscan',
            #'creator',
            'requester',
            'checker',
            'vulnerability_count',
            'vulnerabilitys',
            'created_at',
            'updated_at',
            'comments',
        )


class ProjectDateSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Project
        fields = (
            'id',
            'project_code',
            'title',
            'vulnerability_count',
            'opened_at',
        )


class VulnerabilityClosedDateSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Vulnerability
        fields = (
            'project_vuln_code',
            'title',
            'closed_at',
        )


class BusinessSerializer(serializers.ModelSerializer):

    projects = ProjectDateSerializer(many=True)

    class Meta:
        model = models.Business
        fields = (
            'id',
            'business_code',
            'project_count',
            'projects',
        )


class IssueSerializer(TaggitSerializer, serializers.ModelSerializer):

    comments = IssueCommentSerializer(many=True)
    creator = FeedUserSerializer()
    tags = TagListSerializerField() 
    business_code = BusinessSerializer(read_only=True)

    class Meta:
        model = models.Issue
        fields = (
            'id',
            'business_code',
            'issue',
            'business_status',
            'caption',
            'creator',
            'tags',
            'natural_time',
            'comments',
        )