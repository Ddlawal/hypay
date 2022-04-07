import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const TrashCanIcon = ({ size = 18, color = COLORS.PRIMARY }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.1016 0.84375H6.10156C4.99856 0.84375 4.10156 1.74075 4.10156 2.84375V4.84375H0.101562V6.84375H2.10156V18.8438C2.10156 19.9468 2.99856 20.8438 4.10156 20.8438H14.1016C15.2046 20.8438 16.1016 19.9468 16.1016 18.8438V6.84375H18.1016V4.84375H14.1016V2.84375C14.1016 1.74075 13.2046 0.84375 12.1016 0.84375ZM6.10156 2.84375H12.1016V4.84375H6.10156V2.84375ZM14.1016 18.8438H4.10156V6.84375H14.1016V18.8438Z"
                fill={color}
            />
        </svg>
    )
}
