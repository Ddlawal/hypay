import classNames from 'classnames'
import { FC } from 'react'

type ButtonProps = {
    className?: string
    size?: 'sm' | 'base' | 'lg'
    disabled?: string
    primary?: boolean
}

export const Button: FC<ButtonProps> = ({ children, className, primary, size = 'sm' }) => {
    return (
        <button
            className={classNames(
                className,
                primary && 'bg-hypay-pink text-white',
                `rounded-md py-1.5 px-2 leading-6 text-${size}`
            )}
        >
            {children}
        </button>
    )
}
