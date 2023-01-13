import { RootState } from "./store"

export const modal = (state: RootState) => state.modal.isOpened;
export const user  = (state: RootState) => state.user;