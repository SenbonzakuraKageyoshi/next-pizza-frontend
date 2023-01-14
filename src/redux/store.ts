import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modalSlice/modal";
import { userReducer } from "./userSlice/userSlice";
import { selectedProductsReducer } from "./selectedProductsSlice/selectedProductsSlice";

const store = configureStore({
    reducer: {
        modal: modalReducer,
        user: userReducer,
        selectedProducts: selectedProductsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;