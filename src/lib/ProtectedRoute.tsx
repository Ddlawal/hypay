import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from '../hooks/useStoreHooks'
import { User } from '../reducers/auth'

const ProtectedRoute: FC = ({ children }) => {
    const protectedRoutes = ['/dashboard/home', '/dashboard/products', '/createstore']
    const { user } = useAppSelector((state) => state?.auth as { user: User })

    const router = useRouter()
    const { pathname } = router
    console.log(user, pathname)

    if (!user) {
        if (protectedRoutes.includes(pathname) && typeof window !== 'undefined') {
            router.push('/login')
            return <div>...loading</div>
        }
    } else {
        if (pathname === '/login' && typeof window !== 'undefined') {
            router.push('/dashboard/home')
            return <div>...loading</div>
        }
    }

    return <div>{children}</div>
}

export default ProtectedRoute
