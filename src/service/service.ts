import axios from "axios";
import { SelectedProduct } from "../types/product";

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
    const data = await client.post('/products/select-product', {ProductId, UserId}, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
};


export const incrementSelectedProductNumber = async (UserId: number, id: number): Promise<SelectedProduct[]> => {
    const { data } = await client.post<SelectedProduct[]>('/products/add-selected-product', {UserId, id}, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
}

export const decrementSelectedProductNumber = async (UserId: number, id: number): Promise<SelectedProduct[]> => {
    const { data } = await client.post<SelectedProduct[]>('/products/remove-selected-product', {UserId, id}, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
}