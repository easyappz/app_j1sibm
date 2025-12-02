from django.urls import path
from .views import HelloView, FeedbackCreateView

urlpatterns = [
    path("hello/", HelloView.as_view(), name="hello"),
    path("feedback/", FeedbackCreateView.as_view(), name="feedback-create"),
]
