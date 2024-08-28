from django.urls import path
from .views import SignupView, LoginView,ProductListAPIView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('products/', ProductListAPIView.as_view(), name='login'),
]
