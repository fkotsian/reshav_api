import requests
import logging

class MovieClient:
    """
    This is a wrapper for the https://www.themoviedb.org api
    """
    """
    curl --request GET \
  --url 'https://api.themoviedb.org/3/movie/76341' \
  --header 'Authorization: Bearer <<access_token>>' \
  --header 'Content-Type: application/json;charset=utf-8'
    """
    def __init__(self, api_key):
        self.url = "https://api.themoviedb.org/3/movie/"
        self.api_key = api_key
        if self.validate_key() == 200:
            logging.info("Movie Client initialized")
        else:
            raise ValueError("Invalid API key")
        pass

    def validate_key(self):
        r = requests.get(f'{self.url}550?api_key={self.api_key}')
        return r.status_code

    def get_top_movies(self):
        r = requests.get(f"{self.url}top_rated?api_key={self.api_key}")
        if r.status_code == 200:
            return r.json()
        else:
            logging.error("Something went wrong")
            return {} 