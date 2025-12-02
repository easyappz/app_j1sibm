from rest_framework.generics import CreateAPIView

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from .serializers import FeedbackSerializer

from .models import Feedback


@method_decorator(csrf_exempt, name='dispatch')
class FeedbackCreateView(CreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer