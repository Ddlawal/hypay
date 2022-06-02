import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const TransactionSentArrow = ({ size = 24, color = COLORS.PINK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22C2.75 21.59 3.09 21.25 3.5 21.25H20.5C20.91 21.25 21.25 21.59 21.25 22C21.25 22.41 20.91 22.75 20.5 22.75Z"
                fill={color}
            />
            <path
                d="M18.9995 18.2499C18.8095 18.2499 18.6195 18.1799 18.4695 18.0299L4.46945 4.02994C4.17945 3.73994 4.17945 3.25994 4.46945 2.96994C4.75945 2.67994 5.23945 2.67994 5.52945 2.96994L19.5295 16.9699C19.8195 17.2599 19.8195 17.7399 19.5295 18.0299C19.3795 18.1799 19.1895 18.2499 18.9995 18.2499Z"
                fill={color}
            />
            <path
                d="M5 14.52C4.59 14.52 4.25 14.18 4.25 13.77V3.5C4.25 3.09 4.59 2.75 5 2.75H15.27C15.68 2.75 16.02 3.09 16.02 3.5C16.02 3.91 15.68 4.25 15.27 4.25H5.75V13.77C5.75 14.18 5.41 14.52 5 14.52Z"
                fill={color}
            />
        </svg>
    )
}
