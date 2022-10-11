import React, { FC, ReactNode } from 'react'
import cx from 'classnames'
import { COLORS } from '../../lib/constants/colors'
import { LoaderIcon } from '../Icons'

type ButtonProps = {
    children?: ReactNode
    className?: string
    padding?: string
    size?: 'xs' | 'sm' | 'base' | 'lg' | string
    disabled?: boolean
    primary?: boolean
    outlined?: boolean
    loading?: boolean
    loaderColor?: keyof typeof COLORS
    loaderSize?: number
    preventDefault?: boolean
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    padding,
    primary,
    outlined,
    loading,
    loaderColor,
    loaderSize,
    size = 'sm',
    preventDefault,
    onClick,
    type,
    disabled,
}) => {
    return (
        <button
            onClick={(e) => {
                if (preventDefault) {
                    e.preventDefault()
                }
                onClick?.()
            }}
            className={cx(
                className,
                padding ? padding : 'py-1.5 px-2',
                primary
                    ? outlined
                        ? 'border border-hypay-pink bg-white text-hypay-pink'
                        : disabled
                        ? 'bg-hypay-light-gray text-hypay-gray'
                        : 'bg-hypay-pink text-white'
                    : '',
                `rounded-md leading-6 text-${size} flex items-center justify-center`
            )}
            type={type}
            disabled={disabled}
        >
            {loading ? (
                <LoaderIcon size={loaderSize ? loaderSize : 18} color={loaderColor ? loaderColor : COLORS.WHITE} />
            ) : (
                children
            )}
        </button>
    )
}
