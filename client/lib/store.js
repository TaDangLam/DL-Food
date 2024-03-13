import { configureStore } from '@reduxjs/toolkit'
import cateReducer from '@/lib/features/category/categorySlice'

export const store = configureStore({
    reducer: {
        category: cateReducer
    }
});
