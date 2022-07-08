import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const CheckIcon = ({ size = 18, color = COLORS.WHITE }: IconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6L6.5 11.5L17 1" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}
