from django.conf.urls import url
from . import views

app_name = 'etas'

urlpatterns = [
    url(
        regex=r'^project/all$',
        view=views.ListAllProject.as_view(),
        name='all_projects'
    ),
    url(
        regex=r'^project/this_year$',
        view=views.ListThisYearProject.as_view(),
        name='this_year_projects'
    ),
    url(
        regex=r'^vulnerability/all$',
        view=views.ListAllVulnerability.as_view(),
        name='all_vulnerabilitys'
    ),
    url(
        regex=r'^vulnerability/closed/this_year$',
        view=views.ListThisYearClosedVulnerability.as_view(),
        name='all_vulnerabilitys'
    ),
    url(
        regex=r'^projectcomment/all$',
        view=views.ListAllProjectComment.as_view(),
        name='all_comments'
    ),
    url(
        regex=r'^issuecomment/all$',
        view=views.ListAllIssueComment.as_view(),
        name='all_comments'
    ),
    url(
        regex=r'^issue/all$',
        view=views.ListAllIssue.as_view(),
        name='all_summary'
    ),
    url(
        regex=r'^business/all$',
        view=views.ListAllBusiness.as_view(),
        name='all_summary'
    ),
]