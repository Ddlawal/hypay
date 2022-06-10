import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const BookTagIcon = ({ size = 30, color = COLORS.PINK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6 4.25C6 3.91848 6.1317 3.60054 6.36612 3.36612C6.60054 3.1317 6.91848 3 7.25 3H22.25C22.5815 3 22.8995 3.1317 23.1339 3.36612C23.3683 3.60054 23.5 3.91848 23.5 4.25V28L19.125 24.875L14.75 28L10.375 24.875L6 28V4.25Z"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.0015 14.25H18.5015"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.0015 19.2502H18.5015"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.0015 9.25H18.5015"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
