import * as React from 'react'
import { IconProps } from '../../../interfaces/icons'
import { COLORS } from '../../../lib/constants/colors'

export function RTAlignRightIcon({ size = 18, color = COLORS.PRIMARY }: IconProps): JSX.Element {
    return (
        <svg
            width={size}
            height={size}
            className="cursor-pointer"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.42754 4.90918H16.6816"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M3.00951 1.49121H16.6816"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M3.00951 8.32715H16.6816"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M6.42754 11.7451H16.6816"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}
