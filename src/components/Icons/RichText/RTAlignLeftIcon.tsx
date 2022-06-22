import * as React from 'react'
import { IconProps } from '../../../interfaces/icons'
import { COLORS } from '../../../lib/constants/colors'

export function RTAlignLeftIcon({ size = 18, color = COLORS.PRIMARY }: IconProps): JSX.Element {
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
                d="M11.2961 4.90918H1.04199"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M14.7141 1.49121H1.04199"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M14.7141 8.32715H1.04199"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M11.2961 11.7451H1.04199"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}
