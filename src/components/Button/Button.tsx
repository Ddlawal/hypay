import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

type ButtonProps = {
    children?: ReactNode
    className?: string
    size?: 'sm' | 'base' | 'lg'
    disabled?: boolean
    primary?: boolean
    outlined?: boolean
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, className, primary, outlined, size = 'sm', onClick }) => {
    return (
        <button
            onClick={onClick}
            className={classNames(
                className,
                primary
                    ? outlined
                        ? 'border border-hypay-pink bg-white text-hypay-pink'
                        : 'bg-hypay-pink text-white'
                    : '',
                `rounded-md py-1.5 px-2 leading-6 text-${size}`
            )}
        >
            {children}
        </button>
    )
}
