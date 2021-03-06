from django.contrib import admin
from django.urls import path
from core import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('getTopMovies/', views.get_top_movies),
    path('searchMovies/', views.search_movies), 
]
