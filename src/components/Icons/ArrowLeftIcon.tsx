import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const ArrowLeftIcon = ({ size = 18, color = COLORS.BLACK, onClick }: IconProps): JSX.Element => {
    return (
        <svg
            onClick={onClick}
            width={size}
            height={size}
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2.2998 9.00001L7.0998 4.20001M2.2998 9.00001L7.0998 13.8M2.2998 9.00001H17.2998" stroke={color} />
        </svg>
    )
}
