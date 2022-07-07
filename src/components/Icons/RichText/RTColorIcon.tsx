import * as React from 'react'
import { IconProps } from '../../../interfaces/icons'
import { COLORS } from '../../../lib/constants/colors'

export function RTColorIcon({ size = 18, color = COLORS.PRIMARY }: IconProps): JSX.Element {
    return (
        <svg
            width={size}
            height={size}
            className="cursor-pointer"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x={size * 0.0827}
                y={size * 0.046}
                width={size * 0.7372}
                height={size * 0.7372}
                rx={size * 0.0335}
                fill={color}
                stroke="white"
                strokeWidth={size * 0.06702}
            />
        </svg>
    )
}
