from xml.etree.ElementInclude import include
from django.urls import path, include
from rest_framework import routers
from .views import OrderViewSet, book, books, main, OrderViewSet

router = routers.DefaultRouter()
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('', main),
    path('book/', book),
    path('books/', books),
    path('', include(router.urls))
]