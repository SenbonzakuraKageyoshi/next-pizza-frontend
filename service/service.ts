import axios from "axios";

export const client = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const updateToken = (token: string) => {
    return localStorage.setItem('pizza-app-token', token);
};

export const getToken = () => {
    return localStorage.getItem('pizza-app-token');
};

export const removeToken = () => {
    localStorage.removeItem('pizza-app-token');
};

export const selectProduct = async (ProductId: number, UserId: number) => {
    const data = client.post('/products/select-product', {ProductId, UserId}, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
};