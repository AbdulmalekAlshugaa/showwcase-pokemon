import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_INITIAL_STATE } from './authConstants';

const authSlice = createSlice({
    name: AUTH_INITIAL_STATE.AuthActionName,
    initialState: AUTH_INITIAL_STATE.InitialState,
    reducers: {
        login: (state, action: PayloadAction<{ id: string; token: string }>) => {
            state.isAuthenticated = true;
            state.user = action.payload; // Storing user ID and token
        },
        logout: state => {
            state.isAuthenticated = false;
            state.user = { id: null, token: null };
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
