import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_INITIAL_STATE } from './authConstants';

const authSlice = createSlice({
    name: AUTH_INITIAL_STATE.AuthActionName,
    initialState: AUTH_INITIAL_STATE.InitialState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string; accessToken: string }>) => {
            state.isAuthenticated = true;
            state.user = action.payload; // Storing user ID and token
        },
        logout: state => {
            state.isAuthenticated = false;
            state.user = { username: null, accessToken: null };
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
