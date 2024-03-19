import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.findIndex(item => item.item._id === action.payload._id);
            if(existingItem !== -1){
                state.cart[existingItem].quantity += 1;
                state.cart[existingItem].total = state.cart[existingItem].quantity * state.cart[existingItem].item.price;
            }else{
                const newItem = {
                    item: action.payload,
                    quantity: 1,
                    total: action.payload.price
                }
                state.cart.push(newItem);
            }
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter(item => item.item._id !== action.payload.item._id);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
})

export const { addToCart, clearCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;