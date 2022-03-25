import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const BagIcon = ({ size = 18, color = COLORS.YELLOW }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6 7.89128V4.51205C6 2.64502 8.24375 1.13281 11 1.13281C13.7625 1.13281 16 2.64924 16 4.51205V7.89128M1 6.20166H21V19.7186H1V6.20166Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    )
}
