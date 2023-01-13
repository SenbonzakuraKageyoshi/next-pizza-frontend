import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modalSlice/modal";
import { userReducer } from "./userSlice/userSlice";

const store = configureStore({
    reducer: {
        modal: modalReducer,
        user: userReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;