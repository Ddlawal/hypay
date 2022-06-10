import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const LocationIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.3569 18.5392C19.7534 18.5392 21.6962 16.6237 21.6962 14.2608C21.6962 11.8979 19.7534 9.98242 17.3569 9.98242C14.9604 9.98242 13.0176 11.8979 13.0176 14.2608C13.0176 16.6237 14.9604 18.5392 17.3569 18.5392Z"
                stroke={color}
                strokeWidth="2.89287"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.3566 2.85156C14.2877 2.85156 11.3444 4.05359 9.17437 6.19321C7.00429 8.33282 5.78516 11.2348 5.78516 14.2606C5.78516 16.9589 6.36662 18.7244 7.95481 20.6783L17.3566 31.3743L26.7585 20.6783C28.3467 18.7244 28.9281 16.9589 28.9281 14.2606C28.9281 11.2348 27.709 8.33282 25.5389 6.19321C23.3689 4.05359 20.4256 2.85156 17.3566 2.85156V2.85156Z"
                stroke={color}
                strokeWidth="2.89287"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
