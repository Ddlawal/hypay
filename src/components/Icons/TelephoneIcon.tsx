import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const TelephoneIcon = ({ size = 30, color = COLORS.PINK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 25.5V25H7.5H5.4C4.32614 25 3.5 24.1739 3.5 23.1V2.4C3.5 1.32614 4.32614 0.5 5.4 0.5H23.1C24.1739 0.5 25 1.32614 25 2.4V23.1C25 24.1739 24.1739 25 23.1 25H19.5H19V25.5V28.5C19 28.8364 18.8901 29.0778 18.7339 29.2339C18.5778 29.3901 18.3364 29.5 18 29.5H9C8.66362 29.5 8.42216 29.3901 8.26605 29.2339C8.10994 29.0778 8 28.8364 8 28.5V25.5ZM6 8.5H5.5V9V12V12.5H6H10.5H11V12V9V8.5H10.5H6ZM17 13.5V13H16.5H12H11.5V13.5V16.5V17H12H16.5H17V16.5V13.5ZM11.5 12V12.5H12H16.5H17V12V9V8.5H16.5H12H11.5V9V12ZM17 18V17.5H16.5H12H11.5V18V21V21.5H12H16.5H17V21V18ZM6 13H5.5V13.5V16.5V17H6H10.5H11V16.5V13.5V13H10.5H6ZM5.5 21V21.5H6H10.5H11V21V18V17.5H10.5H6H5.5V18V21ZM10.5 29H11V28.5V25.5V25H10.5H9H8.5V25.5V28.5V29H9H10.5ZM18 29H18.5V28.5V25.5V25H18H13.5H13V25.5V28.5V29H13.5H18ZM22.5 21.5H23V21V18V17.5H22.5H18H17.5V18V21V21.5H18H22.5ZM22.5 17H23V16.5V13.5V13H22.5H18H17.5V13.5V16.5V17H18H22.5ZM22.5 12.5H23V12V9V8.5H22.5H18H17.5V9V12V12.5H18H22.5ZM22.5 6.5H23V6V3V2.5H22.5H6H5.5V3V6V6.5H6H22.5ZM27.5 6.15C27.5 5.46134 27.9368 5 28.5 5C29.0632 5 29.5 5.46134 29.5 6.15V21C29.5 21.6724 29.0836 22.1281 28.5396 22.1492C28.1988 22.0849 27.9452 21.9442 27.778 21.7651C27.608 21.5829 27.5 21.3325 27.5 21V6.15Z"
                fill={color}
                stroke={color}
            />
        </svg>
    )
}
