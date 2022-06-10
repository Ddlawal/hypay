import * as React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import ProtectedRoute from '../lib/ProtectedRoute'
import { Toaster } from 'react-hot-toast'
import { persistStore } from 'redux-persist'

export const persistor = persistStore(store)

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Provider store={store}>
                <SessionProvider session={session}>
                    <PersistGate loading={null} persistor={persistor}>
                        <ProtectedRoute>
                            <Component {...pageProps} />
                            <Toaster />
                        </ProtectedRoute>
                    </PersistGate>
                </SessionProvider>
            </Provider>
        </>
    )
}

export default MyApp
