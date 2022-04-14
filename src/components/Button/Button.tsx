import React, { FC, ReactNode } from 'react'
import cx from 'classnames'

type ButtonProps = {
    children?: ReactNode
    className?: string
    padding?: string
    size?: 'xs' | 'sm' | 'base' | 'lg' | string
    disabled?: boolean
    primary?: boolean
    outlined?: boolean
    preventDefault?: boolean
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    padding,
    primary,
    outlined,
    size = 'sm',
    preventDefault,
    onClick,
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
                        : 'bg-hypay-pink text-white'
                    : '',
                `rounded-md leading-6 text-${size}`
            )}
        >
            {children}
        </button>
    )
}
