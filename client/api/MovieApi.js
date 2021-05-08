import axios from 'axios';

const apiClient = axios.create({
    baseURL:"http://localhost:8000"
});

export function getTopMovies() {
    let promise = apiClient.get('/getTopMovies/');
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}