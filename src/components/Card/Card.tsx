import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

type CardProps = {
    children?: ReactNode
    className?: string
    bg?: string
    elevation?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'
    rounded?: boolean
    padding?: string
}

export const Card: FC<CardProps> = ({ children, className, bg = 'bg-white', elevation, rounded, padding }) => {
    const shadow = elevation ? 'shadow-' + elevation : 'shadow'
    return (
        <div className={classNames(className, bg, shadow, rounded && 'rounded-lg', padding ? padding : 'py-4 px-6')}>
            {children}
        </div>
    )
}
