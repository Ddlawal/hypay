import * as React from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import ProtectedRoute from '../lib/ProtectedRoute'
import { persistStore } from 'redux-persist'
import { Toaster } from 'react-hot-toast'

const persistor = persistStore(store)

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <Provider store={store}>
            <SessionProvider {...{ session }}>
                <PersistGate loading={null} persistor={persistor}>
                    <ProtectedRoute>
                        <Component {...pageProps} />
                        <Toaster />
                    </ProtectedRoute>
                </PersistGate>
            </SessionProvider>
        </Provider>
    )
}

export default MyApp
