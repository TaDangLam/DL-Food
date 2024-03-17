import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {}
    },
    reducers: {
        Login: (state, action) => {
            state.user = action.payload;
        },
        Logout: (state) => {
            state.user = null;
        }
    }
})

export const { Login, Logout } = authSlice.actions;
export default authSlice.reducer;