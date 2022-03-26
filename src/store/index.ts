import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore } from 'redux-persist'
import rootReducer from '../reducers'
// import { persistStore } from 'redux-persist'
import baseApi from '../services'
import { Action } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

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

export const store = () =>
    configureStore({
        reducer: rootReducer,

        middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),

        devTools: process.env.NODE_ENV !== 'production',
    })

export const persistor = persistStore(store())

setupListeners(store().dispatch)

export type AppStore = ReturnType<typeof store>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
// Infer the `RootState` and `AppDispatch` types from the store itself
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<AppStore['dispatch']>

export const wrapper = createWrapper<AppStore>(store)
