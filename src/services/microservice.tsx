import axios from 'axios';

const api = axios.create({
    baseURL: 'http://is.gd/create.php?callback=?'
});

export default api;