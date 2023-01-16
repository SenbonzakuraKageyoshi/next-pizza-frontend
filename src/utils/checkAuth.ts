import { IUserState } from "../redux/userSlice/userSlice";
import { getToken } from "../service/service";

export const checkAuth = (userData: IUserState) => {
    if(!userData.data && userData.status === 'rejected' || !getToken()){
        return window.location.href = '/'
    }
};