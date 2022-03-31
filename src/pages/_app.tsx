import * as React from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store, persistor } from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import ProtectedRoute from '../lib/ProtectedRoute'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SessionProvider {...{ session }}>
                    <ProtectedRoute>
                        <Component {...pageProps} />
                    </ProtectedRoute>
                </SessionProvider>
            </PersistGate>
        </Provider>
    )
}

export default MyApp
