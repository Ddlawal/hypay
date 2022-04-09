import React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const LoaderIcon = ({ size = 48, color = COLORS.PRIMARY }: IconProps): JSX.Element => {
    return (
        <svg
            width={size}
            height={size}
            version="1.1"
            id="L4"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
            xmlSpace="preserve"
        >
            <circle fill={color} stroke="none" cx="15" cy="50" r={size / 5}>
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.05" />
            </circle>
            <circle fill={color} stroke="none" cx="50" cy="50" r={size / 5}>
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
            </circle>
            <circle fill={color} stroke="none" cx="85" cy="50" r={size / 5}>
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.15" />
            </circle>
        </svg>
    )
}
