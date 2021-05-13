import axios from 'axios';

const apiClient = axios.create({
    baseURL:"http://localhost:8000"
});

export function getTopMoviesApi() {
    // check localStorage before calling endpoint
    let cachedMovies = localStorage.getItem('topMovies');
    console.log("cachedMovies", cachedMovies);
    if (cachedMovies){
        console.log("don't make request");
        return new Promise(resolve => {cachedMovies});
    }
    console.log("make request");
    let promise = apiClient.get('/getTopMovies/');
    const dataPromise = promise.then((response) => response.data);
    console.log("dataPromise", dataPromise);
    return dataPromise;
}

export function searchMoviesApi(query) {
    // check localStorage before calling endpoint
    // headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
    let data = {"query":query};
    console.log("data", data);
    let cachedMovies = localStorage.getItem(query);
    console.log("cachedMovies", cachedMovies);
    if (cachedMovies){
        console.log("don't make request");
        return new Promise(resolve => {cachedMovies});
    }
    console.log("make request");
    let promise = apiClient.post('/searchMovies/', 
        data,
    );
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}