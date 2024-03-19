import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        accessToken: null,
        refreshToken: null
    },
    reducers: {
        Login: (state, action) => {
            state.user = action.payload.data;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        Register: (state, action) => {
            state.user = action.payload;
        },
        UpdateUser: (state, action) => {
            state.user = action.payload
        },
        Logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
        }

    }
})

export const { Login, Logout, Register, UpdateUser } = authSlice.actions;
export default authSlice.reducer;