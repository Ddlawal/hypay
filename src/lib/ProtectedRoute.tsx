import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { LoaderIcon } from '../components/Icons/LoaderIcon'
import { LoadingPage } from '../components/Layout/LoadingPage'
import { useSession } from '../hooks/useSession'

const ProtectedRoute: FC = ({ children }) => {
    const protectedRoutes = ['/dashboard/home', '/dashboard/products', '/dashboard/messages', '/createstore']
    const notAvailableWhileLogedInRoute = ['/login', '/signup']
    const { user } = useSession()
    const router = useRouter()
    const { pathname } = router

    if (!user) {
        if (protectedRoutes.includes(pathname) && typeof window !== 'undefined') {
            router.push('/login')
            return <LoadingPage />
        }
    } else {
        if (notAvailableWhileLogedInRoute.includes(pathname) && typeof window !== 'undefined') {
            router.push('/dashboard/home')
            return (
                <div className="flex h-screen w-full flex-col items-center justify-center">
                    <LoaderIcon />
                    <p className="font-bld text-center text-xl">Loading...</p>
                </div>
            )
        }
    }

    return <div>{children}</div>
}

export default ProtectedRoute
