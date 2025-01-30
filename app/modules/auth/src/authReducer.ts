import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    isAuthenticated: boolean;
    user: {
        id: string | null;
        token: string | null;
    };
};

const initialState: AuthState = {
    isAuthenticated: false,
    user: {
        id: null,
        token: null,
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ id: string; token: string }>) => {
            state.isAuthenticated = true;
            state.user = action.payload; // Storing user ID and token
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = { id: null, token: null };
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
