import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const UpArrowIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 6.57698L6.49995 1.5M6.49995 1.5L12 6.57698M6.49995 1.5L6.49995 13.5"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
