import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
    isOpened: boolean,
};

const initialState: ModalState = {
    isOpened: false
};

const modalSlice = createSlice({
    name: '@modal',
    initialState,
    reducers: {
        changeIsOpened: (state) => {
            state.isOpened = !state.isOpened;
        }
    }
});

export const modalReducer = modalSlice.reducer;

export const { changeIsOpened } = modalSlice.actions;