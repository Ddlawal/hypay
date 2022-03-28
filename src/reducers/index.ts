import { combineReducers } from '@reduxjs/toolkit'
import baseApi from '../services'
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import auth from '../reducers/auth'
import ui from './ui'

const persistConfig = {
    storage: storageSession,
    key: 'hypay',
    // whitelist: ["auth"],
}

const rootStore = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    auth,
    ui,
})

const rootReducer = persistReducer(persistConfig, rootStore)

export default rootReducer
