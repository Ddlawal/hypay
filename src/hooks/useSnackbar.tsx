import React, { CSSProperties } from 'react'
import toast, { Renderable, ToastPosition } from 'react-hot-toast'
import { WarningIcon, RoundedCheckIcon } from '../components/Icons'
import { COLORS } from '../lib/constants/colors'

type ToastOption = { position: ToastPosition; style: CSSProperties; icon: Renderable }

export const useSnackbar = () => {
    const showSuccessSnackbar = (message: string, options?: ToastOption) => {
        toast.error(message, {
            position: options?.position || 'bottom-center',
            style: { color: COLORS.WHITE, backgroundColor: COLORS.GREEN },
            icon: <RoundedCheckIcon color="white" />,
            duration: 4000,
        })
    }
    const showErrorSnackbar = (message: string, options?: ToastOption) => {
        toast.error(message, {
            position: options?.position || 'bottom-center',
            style: { color: COLORS.WHITE, backgroundColor: COLORS.RED },
            icon: <WarningIcon color="white" />,
            duration: 4000,
        })
    }

    return { showSuccessSnackbar, showErrorSnackbar }
}
