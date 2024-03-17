import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        fewProducts: [],
        allProductCategory: [],
        productById: {}
    },
    reducers: {
        setProductByCategory: (state, action) => {
            state.fewProducts = action.payload
        },
        setAllProductByCategory: (state, action) => {
            state.allProductCategory = action.payload
        },
        setAllProductById: (state, action) => {
            state.productById = action.payload
        }
    }
})

export const { setProductByCategory, setAllProductByCategory, setAllProductById } = productSlice.actions;
export default productSlice.reducer;