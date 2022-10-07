import { combineReducers } from '@reduxjs/toolkit'
import baseApi from '../services'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './auth'
import ui from './ui'
import buyer from './buyer'
import cart from './cart'
import temporaryDataSlice from './temporaryData'
import { onlineTheme } from '../services/onlineStore'
import { notificationSettings } from '../services/settings/notificationSettings'
import { buyerApi, cartApi, messageApi, productApi, requestApi } from './api'

const persistConfig = {
    storage,
    key: 'hypay',
    blacklist: [productApi.reducerPath, requestApi.reducerPath],
    whitelist: ['ui', 'buyer'],
}

export const rootStore = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [buyerApi.reducerPath]: buyerApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [requestApi.reducerPath]: requestApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [onlineTheme.reducerPath]: onlineTheme.reducer,
    [notificationSettings.reducerPath]: notificationSettings.reducer,
    auth,
    buyer,
    cart,
    temporaryDataSlice,
    ui,
})

const persistedReducer = persistReducer(persistConfig, rootStore)

export default persistedReducer
