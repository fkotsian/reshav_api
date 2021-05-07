from django.shortcuts import render
from django.http import HttpResponse

import os
import logging

from movie_client import MovieClient

if "API_KEY" in os.environ:
    movie_client = MovieClient(os.environ['API_KEY'])
    logging.info("Movie client initialized")
else:
    raise ValueError("Please Set API_KEY environment variable")
    
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")