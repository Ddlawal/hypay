import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const TransactionRecievedArrow = ({ size = 24, color = COLORS.GREEN }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.99945 18.2499C4.80945 18.2499 4.61945 18.1799 4.46945 18.0299C4.17945 17.7399 4.17945 17.2599 4.46945 16.9699L18.4695 2.96994C18.7595 2.67994 19.2395 2.67994 19.5295 2.96994C19.8195 3.25994 19.8195 3.73994 19.5295 4.02994L5.52945 18.0299C5.37945 18.1799 5.18945 18.2499 4.99945 18.2499Z"
                fill={color}
            />
            <path
                d="M15.27 18.25H5C4.59 18.25 4.25 17.91 4.25 17.5V7.22998C4.25 6.81998 4.59 6.47998 5 6.47998C5.41 6.47998 5.75 6.81998 5.75 7.22998V16.75H15.27C15.68 16.75 16.02 17.09 16.02 17.5C16.02 17.91 15.68 18.25 15.27 18.25Z"
                fill={color}
            />
            <path
                d="M20.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22C2.75 21.59 3.09 21.25 3.5 21.25H20.5C20.91 21.25 21.25 21.59 21.25 22C21.25 22.41 20.91 22.75 20.5 22.75Z"
                fill={color}
            />
        </svg>
    )
}
