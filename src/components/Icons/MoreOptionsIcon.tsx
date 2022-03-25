import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const MoreOptionsIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 6 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.80712 14.5009C3.62372 14.5009 4.2857 13.8294 4.2857 13.0009C4.2857 12.1725 3.62372 11.501 2.80712 11.501C1.99053 11.501 1.32855 12.1725 1.32855 13.0009C1.32855 13.8294 1.99053 14.5009 2.80712 14.5009Z"
                fill={color}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.80712 3.99994C3.62372 3.99994 4.2857 3.32838 4.2857 2.49997C4.2857 1.67156 3.62372 1 2.80712 1C1.99053 1 1.32855 1.67156 1.32855 2.49997C1.32855 3.32838 1.99053 3.99994 2.80712 3.99994Z"
                fill={color}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.80712 24.9999C3.62372 24.9999 4.2857 24.3284 4.2857 23.5C4.2857 22.6716 3.62372 22 2.80712 22C1.99053 22 1.32855 22.6716 1.32855 23.5C1.32855 24.3284 1.99053 24.9999 2.80712 24.9999Z"
                fill={color}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
