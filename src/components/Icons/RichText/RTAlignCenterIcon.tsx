import * as React from 'react'
import { IconProps } from '../../../interfaces/icons'
import { COLORS } from '../../../lib/constants/colors'

export function RTAlignCenterIcon({ size = 18, color = COLORS.PRIMARY }: IconProps): JSX.Element {
    return (
        <svg
            width={size}
            height={size}
            className="cursor-pointer"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.80352 4.90918H14.0576"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M1.52446 1.49121H16.3359"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M1.52446 8.32715H16.3359"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M3.80352 11.7451H14.0576"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}
