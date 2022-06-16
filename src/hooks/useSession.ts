/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useStoreHooks'
import { logout, UserInfo } from '../store/reducers/auth'

type SessionProps = { user: UserInfo | null }

export const useSession = (): SessionProps => {
    const { sessionExpiryTime, user } = useAppSelector((state) => state?.auth)
    const dispatch = useAppDispatch()

    const timeToExpiry = sessionExpiryTime - Date.now()
    const sessionExpired = timeToExpiry <= 0

    const verifySession = useCallback(() => {
        if (sessionExpired) {
            // Show modal then logout
            dispatch(logout())
            localStorage.clear()
            return { user: null }
        }
    }, [sessionExpired])

    useEffect(() => {
        verifySession()
    }, [])

    return { user }
}
