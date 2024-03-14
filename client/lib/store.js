import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

import cateReducer from '@/lib/features/category/categorySlice'
import productReducer from '@/lib/features/product/productSlice'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({ 
  category: cateReducer,
  product: productReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export let persistor = persistStore(store)
