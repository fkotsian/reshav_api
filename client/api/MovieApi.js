import axios from 'axios';

const apiClient = axios.create({
    baseURL:"http://localhost:8000"
});

export function getTopMoviesApi() {
    // check localStorage before calling endpoint
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
    console.log("make request");
    let promise = apiClient.post('/searchMovies/', 
        data,
    );
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}