import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const MoreOptionsHIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 26 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(-90 2.5 2.5)" fill={color} />
            <circle cx="12.5" cy="2.5" r="2.5" transform="rotate(-90 12.5 2.5)" fill={color} />
            <circle cx="23.5" cy="2.5" r="2.5" transform="rotate(-90 23.5 2.5)" fill={color} />
        </svg>
    )
}
