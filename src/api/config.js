import axios from 'axios'

export const axiosBase = axios.create({
    // baseURL : `http://localhost:5000`
    baseURL : `https://backend.groways.io`
})