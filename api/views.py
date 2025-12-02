from rest_framework.generics import CreateAPIView

from .serializers import FeedbackSerializer

from .models import Feedback


class FeedbackCreateView(CreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer