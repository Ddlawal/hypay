import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore } from 'redux-persist'
import rootReducer from '../reducers'
import baseApi from '../services'

const middlewareHandler = (getDefaultMiddleware: any) => {
    const middlewareList = [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }).concat(baseApi.middleware),
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
