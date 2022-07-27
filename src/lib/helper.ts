import { UserInfo } from '../store/reducers/auth'

export const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
}

export const debounce = <T>(cb: (args: T) => void, delay = 500) => {
    let timeout: NodeJS.Timeout

    return (args: T) => {
        clearTimeout(timeout)

        timeout = setTimeout(() => {
            cb(args)
        }, delay)
    }
}

export const updateUserInLocalStorage = (userData: Partial<UserInfo>) => {
    const currentUser = JSON.parse(localStorage.getItem('user') || '')
    localStorage.setItem('user', JSON.stringify({ ...currentUser, user: { ...currentUser.user, ...userData } }))
}

export function readCokie(cookieName: string): string | undefined {
    return document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${cookieName}=`))
        ?.split('=')[1]
}

export const setCookie = (name: string, value: string) => {
    document.cookie = `${name}=${value}`
}

export const removeCookie = (name: string) => {
    document.cookie = `${name}=;max-age=0`
}

export const USER_PENDING_2FA_AUTH = 'user_2fa'
