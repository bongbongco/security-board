from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers
import datetime

class ListAllProject(APIView):

    def get(self, request, format=None):

        all_project = models.Project.objects.all()

        serializer = serializers.ProjectSerializer(all_project, many=True)

        return Response(data=serializer.data)


class ListThisYearProject(APIView): 

    def get(self, request, format=None):

        today = datetime.datetime.today()

        this_year_project = models.Project.objects.filter(
            created_at__range=[
                datetime.date(today.year, 1, 1), today
                ]
            )

        serializer = serializers.ProjectDateSerializer(this_year_project, many=True)

        return Response(data=serializer.data)


class ListThisYearClosedVulnerability(APIView): 

    def get(self, request, format=None):

        today = datetime.datetime.today()

        this_year_closed_vulnerability = models.Vulnerability.objects.filter(
            closed_at__range=[
                datetime.date(today.year, 1, 1), today
                ]
            )

        serializer = serializers.VulnerabilityClosedDateSerializer(this_year_closed_vulnerability, many=True)

        return Response(data=serializer.data)


class ListAllVulnerability(APIView):

    def get(self, request, format=None):

        all_vulnerability = models.Vulnerability.objects.all()

        serializer = serializers.VulnerabilitySerializer(all_vulnerability, many=True)

        return Response(data=serializer.data)


class ListAllProjectComment(APIView):
    
    def get(self, request, format=None):

        all_comment = models.ProjectComment.objects.all()

        serializer = serializers.ProjectCommentSerializer(all_comment, many=True)

        return Response(data=serializer.data)


class ListAllIssueComment(APIView):
    
    def get(self, request, format=None):

        all_comment = models.IssueComment.objects.all()

        serializer = serializers.IssueCommentSerializer(all_comment, many=True)

        return Response(data=serializer.data)


class ListAllIssue(APIView):

    def get(self, request, format=None):

        all_summary = models.Issue.objects.all()

        serializer = serializers.IssueSerializer(all_summary, many=True)

        return Response(data=serializer.data)

        
class ListAllBusiness(APIView):

    def get(self, request, format=None):

        all_business = models.Business.objects.all()

        serializer = serializers.BusinessSerializer(all_business, many=True)

        return Response(data=serializer.data)