import { IUserState } from "../redux/userSlice/userSlice";
import { getToken } from "./token";

export const checkAuth = (userData: IUserState) => {
    if(!userData.data && userData.status === 'rejected' || !getToken()){
        return window.location.href = '/'
    }
};