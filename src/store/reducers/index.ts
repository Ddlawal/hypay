import { combineReducers } from '@reduxjs/toolkit'
import baseApi from '../services'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './auth'
import ui from './ui'
import temporaryDataSlice from './temporaryData'
import { productApi } from '../services/products'

const persistConfig = {
    storage,
    key: 'hypay',
    blacklist: [productApi.reducerPath],
}

export const rootStore = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    auth,
    ui,
    temporaryDataSlice,
})

const persistedReducer = persistReducer(persistConfig, rootStore)

export default persistedReducer
