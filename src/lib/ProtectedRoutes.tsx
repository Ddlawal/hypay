import * as React from 'react'
import { NextPageContext } from 'next'
import { FunctionComponent } from 'react'

const { useRouter } = require('next/router')

export const withAuth = (
    WrappedComponent: FunctionComponent<{} | any> & {
        getInitialProps?(context: NextPageContext<any>): {} | Promise<{}>
    }
) => {
    return (props: any) => {
        if (typeof window !== undefined) {
            const { replace, push, back, pathname } = useRouter()
            const accessToken = window.localStorage.getItem('user')
            const notProtectedRoutes = ['/', '/login', '/signup']
            console.log(pathname)

            if (!accessToken) {
                replace('/login')
                return null
            }

            return <WrappedComponent {...props} />
        }
        return null
    }
}
