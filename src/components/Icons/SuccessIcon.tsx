import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const SuccessIcon = ({ size = 18, color = COLORS.SECONDARY }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2501_677)">
                <rect width="40" height="40" rx="20" fill="#F9F5FF" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.4966 12.3168L16.5633 23.8334L13.3966 20.4501C12.8133 19.9001 11.8966 19.8668 11.2299 20.3334C10.5799 20.8168 10.3966 21.6668 10.7966 22.3501L14.5466 28.4501C14.9133 29.0168 15.5466 29.3668 16.2633 29.3668C16.9466 29.3668 17.5966 29.0168 17.9633 28.4501C18.5633 27.6668 30.0133 14.0168 30.0133 14.0168C31.5133 12.4834 29.6966 11.1334 28.4966 12.3001V12.3168Z"
                    fill={color}
                />
                <rect x="1" y="1" width="38" height="38" rx="19" stroke={color} strokeWidth="2" />
            </g>
            <defs>
                <clipPath id="clip0_2501_677">
                    <rect width="40" height="40" rx="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
