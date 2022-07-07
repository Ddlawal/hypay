import * as React from 'react'
import { IconProps } from '../../../interfaces/icons'
import { COLORS } from '../../../lib/constants/colors'

export function RTUnderlineIcon({ size = 18, color = COLORS.PRIMARY }: IconProps): JSX.Element {
    return (
        <svg
            width={size}
            height={size}
            className="cursor-pointer"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.82136 0.192373H11.2261V7.87324C11.2261 8.66625 11.0392 9.37429 10.6654 9.99737C10.2953 10.6167 9.77227 11.1057 9.09632 11.4644C8.42038 11.8194 7.62737 11.9969 6.7173 11.9969C5.80722 11.9969 5.01421 11.8194 4.33827 11.4644C3.66232 11.1057 3.13742 10.6167 2.76358 9.99737C2.39351 9.37429 2.20847 8.66625 2.20847 7.87324V0.192373H3.61323V7.75995C3.61323 8.32638 3.73785 8.83051 3.98708 9.27233C4.23631 9.71037 4.59128 10.0559 5.05198 10.3089C5.51645 10.5581 6.07156 10.6828 6.7173 10.6828C7.36303 10.6828 7.91814 10.5581 8.38262 10.3089C8.84709 10.0559 9.20206 9.71037 9.44751 9.27233C9.69675 8.83051 9.82136 8.32638 9.82136 7.75995V0.192373Z"
                fill={color}
            />
            <rect x="0.803711" y="15.0225" width={size * 0.7372} height={size * 0.06702} fill={color} />
        </svg>
    )
}
