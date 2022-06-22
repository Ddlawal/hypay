import * as React from 'react'
import { IconProps } from '../../../interfaces/icons'
import { COLORS } from '../../../lib/constants/colors'

export function RTStrikeThroughIcon({ size = 18, color = COLORS.PRIMARY }: IconProps): JSX.Element {
    return (
        <svg
            width={size}
            height={size}
            className="cursor-pointer"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.16609 0.192373H10.5708V7.87324C10.5708 8.66625 10.3839 9.37429 10.0101 9.99737C9.64001 10.6167 9.117 11.1057 8.44105 11.4644C7.7651 11.8194 6.9721 11.9969 6.06202 11.9969C5.15195 11.9969 4.35894 11.8194 3.68299 11.4644C3.00705 11.1057 2.48215 10.6167 2.1083 9.99737C1.73823 9.37429 1.5532 8.66625 1.5532 7.87324V0.192373H2.95796V7.75995C2.95796 8.32638 3.08257 8.83051 3.3318 9.27233C3.58104 9.71037 3.936 10.0559 4.3967 10.3089C4.86118 10.5581 5.41629 10.6828 6.06202 10.6828C6.70776 10.6828 7.26287 10.5581 7.72734 10.3089C8.19182 10.0559 8.54679 9.71037 8.79224 9.27233C9.04147 8.83051 9.16609 8.32638 9.16609 7.75995V0.192373Z"
                fill={color}
            />
            <rect x="0.148438" y="7.04785" width={size * 0.7372} height={size * 0.06702} fill={color} />
        </svg>
    )
}
