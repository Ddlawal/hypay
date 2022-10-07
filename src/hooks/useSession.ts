/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useStoreHooks'
import { logout, Token, UserInfo } from '../store/reducers/auth'

type SessionProps = { user: UserInfo | null; token: Token | null }

export const useSession = (): SessionProps => {
    const { sessionExpiryTime, user, token } = useAppSelector((state) => state?.auth)
    const dispatch = useAppDispatch()

    const timeToExpiry = sessionExpiryTime - Date.now()
    const sessionExpired = timeToExpiry <= 0

    const verifySession = useCallback(() => {
        if (sessionExpired) {
            // Show modal then logout
            dispatch(logout())
            return { user: null }
        }
    }, [sessionExpired])

    useEffect(() => {
        verifySession()
    }, [])

    return { user, token }
}
