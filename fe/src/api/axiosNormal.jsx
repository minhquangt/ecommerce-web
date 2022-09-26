import axios from 'axios';

const axiosNormal = axios.create({
    baseURL: 'http://localhost:5000',
});

export default axiosNormal;
