import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const LockIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.1454 0.89502C10.4238 0.89502 5.74246 5.57632 5.74246 11.2979V16.4994H0.541016V37.3052H31.7497V16.4994H26.5483V11.2979C26.5483 5.57632 21.867 0.89502 16.1454 0.89502ZM16.1454 6.09647C19.0582 6.09647 21.3468 8.38511 21.3468 11.2979V16.4994H10.9439V11.2979C10.9439 8.38511 13.2326 6.09647 16.1454 6.09647Z"
                fill={color}
            />
        </svg>
    )
}
