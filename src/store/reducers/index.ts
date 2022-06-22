import { combineReducers } from '@reduxjs/toolkit'
import baseApi from '../services'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './auth'
import ui from './ui'
import temporaryDataSlice from './temporaryData'
import { productApi } from '../services/products'
import { requestApi } from '../services/requests'
import { merchantApi } from '../services/merchant'
import { messageApi } from '../services/messages'

const persistConfig = {
    storage,
    key: 'hypay',
    blacklist: [productApi.reducerPath, requestApi.reducerPath, messageApi.reducerPath],
    whitelist: ['ui'],
}

export const rootStore = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [requestApi.reducerPath]: requestApi.reducer,
    [merchantApi.reducerPath]: merchantApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    auth,
    ui,
    temporaryDataSlice,
})

const persistedReducer = persistReducer(persistConfig, rootStore)

export default persistedReducer
