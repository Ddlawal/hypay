import * as React from 'react'
import { IconProps } from '../../../interfaces/icons'
import { COLORS } from '../../../lib/constants/colors'

export function RTItalicIcon({ size = 16, color = COLORS.PRIMARY }: IconProps): JSX.Element {
    return (
        <svg
            width={size}
            height={size}
            className="cursor-pointer"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.7864 1.73104V0.211914H3.91207V1.73104H7.81622L4.49694 12.3649H0.114258V13.884H9.98857V12.3649H6.08442L9.40371 1.73104H13.7864Z"
                fill={color}
            />
        </svg>
    )
}
