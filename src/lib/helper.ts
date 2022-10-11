import validator from 'validator'
import { CSSProperties } from 'react'
import toast, { Renderable, ToastPosition } from 'react-hot-toast'
import { WarningIcon, RoundedCheckIcon } from '../components/Icons'
import { COLORS } from '../lib/constants/colors'

type ToastOption = { position: ToastPosition; style: CSSProperties; icon: Renderable }

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

export const checkPhoneNumber = (phoneNumber: string, locale: validator.MobilePhoneLocale = 'pt-PT') => {
    if (!phoneNumber) {
        return true
    }
    return validator.isMobilePhone(phoneNumber, locale)
}

export const formatPhoneNumber = (phoneNumber: string, locale: validator.MobilePhoneLocale = 'pt-PT') => {
    if (locale === 'pt-PT') {
        return Number(phoneNumber)
    } else {
        return phoneNumber.startsWith('234') ? Number(phoneNumber) : Number('234' + Number(phoneNumber))
    }
}

export const showSuccessSnackbar = (message: string, options?: ToastOption) => {
    toast.error(message, {
        position: options?.position || 'bottom-center',
        style: { color: COLORS.WHITE, backgroundColor: COLORS.GREEN },
        icon: RoundedCheckIcon({ color: 'white' }),
        duration: 4000,
    })
}

export const showErrorSnackbar = (message: string, options?: ToastOption) => {
    toast.error(message, {
        position: options?.position || 'bottom-center',
        style: { color: COLORS.WHITE, backgroundColor: COLORS.RED },
        icon: WarningIcon({ color: 'white' }),
        duration: 4000,
    })
}

const formatter = (currency: string) =>
    new Intl.NumberFormat(['en-US', 'pt-BR', 'pt-PT'], { style: 'currency', currency })

export const formatAmount = (amount: number, currency = 'BRL') => {
    return formatter(currency).format(amount).replace('R$', 'R$ ')
}

export const clearLocalStorage = () => {
    const code = localStorage.getItem('merchantCode')
    localStorage.clear()
    if (code) {
        localStorage.setItem('merchantCode', code)
    }
}
