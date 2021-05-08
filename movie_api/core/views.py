from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

import os
import logging

log = logging.getLogger(__name__)

from movie_client import MovieClient

if "API_KEY" in os.environ:
    movie_client = MovieClient(os.environ['API_KEY'])
    logging.info("Movie client initialized")
    log.debug('Message that you want')
    print(movie_client.get_top_movies())
else:
    raise ValueError("Please Set API_KEY environment variable")
    
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def get_top_movies(request):
    return JsonResponse(movie_client.get_top_movies())