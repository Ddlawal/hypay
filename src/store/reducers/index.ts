import { combineReducers } from '@reduxjs/toolkit'
import baseApi from '../services'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './auth'
import ui from './ui'
import cart from './cart'
import temporaryDataSlice from './temporaryData'
import { productApi } from '../services/products'
import { requestApi } from '../services/requests'
import { merchantApi } from '../services/merchant'
import { messageApi } from '../services/messages'
import { onlineTheme } from '../services/onlineStore'
import { notificationSettings } from '../services/settings/notificationSettings'
import { cartApi } from '../services/cart'

const persistConfig = {
    storage,
    key: 'hypay',
    blacklist: [productApi.reducerPath, requestApi.reducerPath],
    whitelist: ['ui'],
}

export const rootStore = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [requestApi.reducerPath]: requestApi.reducer,
    [merchantApi.reducerPath]: merchantApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [onlineTheme.reducerPath]: onlineTheme.reducer,
    [notificationSettings.reducerPath]: notificationSettings.reducer,
    auth,
    ui,
    temporaryDataSlice,
    cart,
})

const persistedReducer = persistReducer(persistConfig, rootStore)

export default persistedReducer
