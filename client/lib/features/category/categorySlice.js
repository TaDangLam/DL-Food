import { createSlice } from "@reduxjs/toolkit";

export const cateSlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
    },
    reducers: {
        setCategory: (state, action) => {
            state.categories = action.payload
        },
    }
})

export const { setCategory } = cateSlice.actions;
export default cateSlice.reducer;