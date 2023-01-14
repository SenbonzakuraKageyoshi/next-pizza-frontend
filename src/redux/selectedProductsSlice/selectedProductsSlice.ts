import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../../service/service";
import { SelectedProduct } from "../../types/product";
import { getToken } from "../../../service/service";

const namespace: string = 'products';

export const fetchSelectedProducts = createAsyncThunk('products/get-selected-products', async (id: number): Promise<SelectedProduct[]>  => {
    const { data } = await client.post<SelectedProduct[]>(`/${namespace}/get-selected-products`, { UserId: id }, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
});

interface InitialState {
    data: SelectedProduct[] | null,
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected'
}

const initialState: InitialState = {
    data: null,
    status: 'idle',
}

const selectedProductsSlice = createSlice({
    name: '@selectedProducts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSelectedProducts.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchSelectedProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchSelectedProducts.rejected, (state) => {
            state.data = null;
            state.status = 'rejected';
        });
    }
});

export const selectedProductsReducer = selectedProductsSlice.reducer;

// export const { logout } = userSlice.actions;