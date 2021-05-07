from django.shortcuts import render
from django.http import HttpResponse

import os

from movie_client import MovieClient

if os.environ['API_KEY']:
    movie_client = MovieClient(os.environ['API_KEY'])
else:
    raise ValueError("Please Set API_KEY environment variable")
    
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")