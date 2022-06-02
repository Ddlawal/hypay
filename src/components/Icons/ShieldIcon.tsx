import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const ShieldIcon = ({ size = 13, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size + 2} viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.25 1L11.5 3V8C11.5 10.25 9.5 12.5 6.25 13.5C3 12.5 1 10.5 1 8V3L6.25 1Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4 7L5.5 8.5L8.5 5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
