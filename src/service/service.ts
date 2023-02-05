import axios from "axios";
import { getToken } from "../utils/token";
import { AdressFormValues } from "../types/forms";
import { Message } from "../types/message";

export const client = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const selectProduct = async (ProductId: number, UserId: number) => {
    const data = await client.post('/products/select-product', {ProductId, UserId}, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
};

export const removeProduct = async (ProductId: number, UserId: number) => {
    const data = await client.post('/products/delete-selected-product', {ProductId, UserId}, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
};

export const removeAllProducts = async (UserId: number) => {
    const data = await client.post('/products/clear-selected-products', {UserId}, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
};

export const incrementSelectedProductNumber = async (UserId: number, id: number) => {
    const { data } = await client.post('/products/add-selected-product', {UserId, id}, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
}

export const decrementSelectedProductNumber = async (UserId: number, id: number) => {
    const { data } = await client.post('/products/remove-selected-product', {UserId, id}, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
}

export const updateUser = async (payload: AdressFormValues) => {
    const { data } = await client.post('/user/update-user', payload, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
}

export const payOrder = async (payload: {UserId: number, orderData: string}) => {
    const { data } = await client.post<Message>('/order/create-order', payload, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
}