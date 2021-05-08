import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:8000"
});

export function getTopMovies(setPlanData) {
    let res = api.get('/getTopMovies/');
    console.log(res);
    return res;
}