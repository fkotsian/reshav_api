import axios from 'axios';

const apiClient = axios.create({
    baseURL:"http://localhost:8000"
});

export function getTopMovies() {
    let promise = apiClient.get('/getTopMovies/');
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}

export function searchMovies(query) {
    // headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
    let data = {"query":query};
    console.log("data", data);
    let promise = apiClient.post('/searchMovies/', 
        data,
    );
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}