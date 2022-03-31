import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import rootReducer from '../reducers'
import baseApi from '../services'
import logger from 'redux-logger'

const middlewareHandler = (getDefaultMiddleware: any) => {
    const middlewareList = [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }).concat(baseApi.middleware),
        logger,
    ]

    return middlewareList
}

export const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),

    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
