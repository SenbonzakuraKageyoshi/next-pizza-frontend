import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, removeToken, updateToken } from "../../../service/service";
import { AuthFormValues } from "../../types/authForm";
import { User } from "../../types/user"; 

const namespace: string = 'auth';

export const fetchRegister = createAsyncThunk('auth/register', async (payload: AuthFormValues): Promise<User>  => {
    const { data } = await client.post<User>(`/${namespace}/register`, payload);
    updateToken(data.token);
    return data;
});

export const fetchLogin = createAsyncThunk('auth/login', async (payload: Pick<AuthFormValues, 'userTelephone' | 'userMail' | 'userPassword'>): Promise<User> => {
    const { data } = await client.post<User>(`/${namespace}/login`, payload)
    updateToken(data.token);
    return data;
});

export const fetchUser = createAsyncThunk('auth/get-user', async (token: string): Promise<User> => {
    const { data } = await client.post<User>(`/${namespace}/get-user`, null, {headers: {
        Authorization: 'Bearer ' + token
    }});

    return data;
});

interface InitialState {
    data: User | null,
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected'
}

const initialState: InitialState = {
    data: null,
    status: 'idle',
}

const userSlice = createSlice({
    name: '@user',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
            state.status = 'idle';
            removeToken();
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRegister.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchRegister.rejected, (state) => {
            state.data = null;
            state.status = 'rejected';
        });
        builder.addCase(fetchLogin.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchLogin.rejected, (state) => {
            state.data = null;
            state.status = 'rejected';
        });
        builder.addCase(fetchUser.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchUser.rejected, (state) => {
            state.data = null;
            state.status = 'rejected';
        });
    }
});

export const userReducer = userSlice.reducer;

export const { logout } = userSlice.actions;