import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        fewProducts: [],
        allProductCategory: []
    },
    reducers: {
        setProductByCategory: (state, action) => {
            state.fewProducts = action.payload
        },
        setAllProductByCategory: (state, action) => {
            state.allProductCategory = action.payload
        }
    }
})

export const { setProductByCategory, setAllProductByCategory } = productSlice.actions;
export default productSlice.reducer;