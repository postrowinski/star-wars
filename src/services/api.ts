import axios from 'axios';

const baseURL = "https://swapi.dev/api";

export const apiCall = () => {
    return axios.create({
        baseURL
    });
}