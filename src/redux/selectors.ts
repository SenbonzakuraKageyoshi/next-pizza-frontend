import { RootState } from "./store"

export const modal = (state: RootState) => state.modal.isOpened;
export const user  = (state: RootState) => state.user;
export const selectedProducts  = (state: RootState) => state.selectedProducts;