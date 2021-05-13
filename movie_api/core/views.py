from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import json

import os
import logging

logger = logging.getLogger(__name__)

from movie_client import MovieClient

if "API_KEY" in os.environ:
    movie_client = MovieClient(os.environ['API_KEY'])
else:
    raise ValueError("Please Set API_KEY environment variable")
    
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def get_top_movies(request):
    return JsonResponse(movie_client.get_top_movies())

def search_movies(request):
    # check params
    request_body = json.loads(request.body)
    print(request_body)
    if 'query' in request_body:
        query = request_body['query']
    else:
        return HttpResponse(status=400, content=json.dumps({"message":"Pass query param!"}))

    return JsonResponse(movie_client.search_movies(query, ))