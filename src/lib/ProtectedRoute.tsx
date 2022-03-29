import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from '../hooks/useStoreHooks'
import { User } from '../reducers/auth'
import { Loader } from '../components/Icons/Loader'

const ProtectedRoute: FC = ({ children }) => {
    const protectedRoutes = ['/dashboard/home', '/dashboard/products', '/createstore']
    const { user } = useAppSelector((state) => state?.auth as { user: User })

    const router = useRouter()
    const { pathname } = router

    if (!user) {
        if (protectedRoutes.includes(pathname) && typeof window !== 'undefined') {
            router.push('/login')
            return (
                <div className="w-sceen flex h-screen flex-col items-center justify-center">
                    <Loader />
                    <p className="font-bld text-center text-xl">Loading...</p>
                </div>
            )
        }
    } else {
        if (pathname === '/login' && typeof window !== 'undefined') {
            router.push('/dashboard/home')
            return (
                <div className="flex h-screen w-full flex-col items-center justify-center">
                    <Loader />
                    <p className="font-bld text-center text-xl">Loading...</p>
                </div>
            )
        }
    }

    return <div>{children}</div>
}

export default ProtectedRoute
