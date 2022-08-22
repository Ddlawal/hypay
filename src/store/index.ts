import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import persistedReducer from './reducers'
import baseApi from './services'
import logger from 'redux-logger'
import { productApi } from './services/products'
import { requestApi } from './services/requests'
import { merchantApi } from './services/merchant'
import { messageApi } from './services/messages'

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(
            baseApi.middleware,
            productApi.middleware,
            requestApi.middleware,
            merchantApi.middleware,
            messageApi.middleware
        ),

    devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
