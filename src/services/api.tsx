import axios from 'axios';

const api = axios.create({
    baseURL: 'https://urlshortenertds.herokuapp.com'
});

export default api;