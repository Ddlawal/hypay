import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const TimeIcon = ({ size = 18, color = COLORS.YELLOW }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.0433 0.480713C6.20358 0.480713 0.607422 6.07687 0.607422 12.9166C0.607422 19.7564 6.20358 25.3525 13.0433 25.3525C19.8831 25.3525 25.4792 19.7564 25.4792 12.9166C25.4792 6.07687 19.8831 0.480713 13.0433 0.480713ZM13.0433 22.8653C7.55909 22.8653 3.0946 18.4008 3.0946 12.9166C3.0946 7.43238 7.55909 2.96789 13.0433 2.96789C18.5275 2.96789 22.992 7.43238 22.992 12.9166C22.992 18.4008 18.5275 22.8653 13.0433 22.8653ZM13.6651 6.69866H11.7997V14.1602L18.2664 18.1397L19.2613 16.523L13.6651 13.1653V6.69866Z"
                fill={color}
            />
        </svg>
    )
}
