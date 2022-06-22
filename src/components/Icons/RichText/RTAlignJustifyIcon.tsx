import * as React from 'react'
import { IconProps } from '../../../interfaces/icons'
import { COLORS } from '../../../lib/constants/colors'

export function RTAlignJustifyIcon({ size = 18, color = COLORS.PRIMARY }: IconProps): JSX.Element {
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
                d="M5.77032 4.90918H16.0244"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M2.35284 4.90918H3.49219"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M5.77032 1.49121H16.0244"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M2.35284 1.49121H3.49219"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M5.77032 8.32715H16.0244"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M2.35284 8.32715H3.49219"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M5.77032 11.7451H16.0244"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M2.35284 11.7451H3.49219"
                stroke={color}
                strokeWidth={size * 0.06702}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}
