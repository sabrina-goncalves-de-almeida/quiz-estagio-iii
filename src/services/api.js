import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.enem.dev/v1'
})

export default api;
