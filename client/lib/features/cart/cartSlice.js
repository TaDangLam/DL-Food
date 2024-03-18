import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(i => i._id === action.payload._id);
            if(existingItem){
                state.cart[existingItem].quantity += 1;
                state.cart[existingItem].total = state.cart[existingItem].quantity * state.cart[existingItem].item.price;
            }else{
                const newItem = {
                    item: action.payload,
                    quantity: 1,
                    total: action.payload.price
                }
            }
            state.cart.push(newItem);
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;