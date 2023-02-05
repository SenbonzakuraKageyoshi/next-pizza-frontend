import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { client } from "../../service/service";
import { SelectedProduct } from "../../types/product";
import { getToken } from "../../utils/token";
import { Status } from "../../types/status";

const namespace: string = 'products';

export const fetchSelectedProducts = createAsyncThunk('products/get-selected-products', async (id: number): Promise<SelectedProduct[]> => {
    const { data } = await client.post<SelectedProduct[]>(`/${namespace}/get-selected-products`, { UserId: id }, {headers: {
        Authorization: 'Bearer ' + getToken()
    }});

    return data;
});

interface InitialState {
    data: SelectedProduct[] | null,
    status: Status
}

const initialState: InitialState = {
    data: null,
    status: 'idle',
}

const selectedProductsSlice = createSlice({
    name: '@selectedProducts',
    initialState,
    reducers: {
        addSelectedProductNumber: (state, action: PayloadAction<SelectedProduct['id']>) => {
            if(state.data){
                const currentIndex = state.data.findIndex((el) => el.id === action.payload);
                state.data[currentIndex].productsNumber++
            }
        },
        removeSelectedProductNumber: (state, action: PayloadAction<SelectedProduct['id']>) => {
            if(state.data){
                const currentIndex = state.data.findIndex((el) => el.id === action.payload);
                state.data[currentIndex].productsNumber--
            }
        },
        removeSelectedProduct: (state, action: PayloadAction<SelectedProduct['id']>) => {
            if(state.data){
                state.data = state.data.filter((el) => el.ProductId !== action.payload);
            }
        },
        clearSelectedProducts: (state) => {
            state.data = [];
        },
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

export const { 
    addSelectedProductNumber,
    removeSelectedProductNumber,
    removeSelectedProduct,
    clearSelectedProducts
} = selectedProductsSlice.actions;