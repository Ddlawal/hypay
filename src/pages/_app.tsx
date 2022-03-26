import * as React from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store, persistor, wrapper } from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider {...{ session }}>
            <Provider store={store()}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </SessionProvider>
    )
}

export default wrapper.withRedux(MyApp)
