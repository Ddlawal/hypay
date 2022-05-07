import { useAppSelector } from '../hooks/useStoreHooks'
import { User } from '../store/reducers/auth'

type SessionProps = { user: User | null; sessionExpired: boolean }

export const useSession = (): SessionProps => {
    const { sessionExpiryTime, user } = useAppSelector((state) => state?.auth)

    const timeToExpiry = sessionExpiryTime - Date.now()
    const sessionExpired = timeToExpiry <= 0

    if (sessionExpired) {
        // Show modal then logout
        localStorage.clear()
        return { user: null, sessionExpired: true }
    }

    return { user, sessionExpired }
}
