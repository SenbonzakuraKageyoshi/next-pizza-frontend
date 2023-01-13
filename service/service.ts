import axios from "axios";

export const client = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const updateToken = (token: string) => {
    localStorage.setItem('pizza-app-token', token);
};

export const removeToken = () => {
    localStorage.removeItem('pizza-app-token');
};