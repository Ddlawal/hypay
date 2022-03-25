import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

type CardProps = {
    children?: ReactNode
    bg?: string
    elevation?: number
    rounded?: boolean
}

export const Card: FC<CardProps> = ({ children, rounded }) => {
    return <div className={classNames(rounded && 'rounded-lg')}>{children}</div>
}
