import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const SessionIcon = ({ size = 18, color = COLORS.PINK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.23268 0.666748C3.28674 0.666748 2.37955 1.04252 1.71067 1.7114C1.04179 2.38028 0.666016 3.28748 0.666016 4.23341V7.33341H3.99935V4.00008H7.33268V0.666748H4.23268ZM10.666 0.666748V4.00008H15.666V0.666748H10.666ZM18.9993 0.666748V4.00008H22.3327V7.33341H25.666V4.23341C25.666 2.26675 24.066 0.666748 22.0993 0.666748H18.9993ZM0.666016 10.6667V15.6667H3.99935V10.6667H0.666016ZM13.9993 10.6667C12.1493 10.6667 10.666 12.1501 10.666 14.0001V25.6667H22.0993C23.0453 25.6667 23.9525 25.291 24.6214 24.6221C25.2902 23.9532 25.666 23.046 25.666 22.1001V10.6667H13.9993ZM28.9993 10.6667V14.0001H32.3327V17.3334H35.666V14.0001C35.666 12.1501 34.1827 10.6667 32.3327 10.6667H28.9993ZM13.9993 14.0001H22.3327V22.3334H13.9993V14.0001ZM0.666016 19.0001V22.1001C0.666016 24.0667 2.26602 25.6667 4.23268 25.6667H7.33268V22.3334H3.99935V19.0001H0.666016ZM32.3327 20.6667V25.6667H35.666V20.6667H32.3327ZM10.666 29.0001V32.3334C10.666 34.1834 12.1493 35.6667 13.9993 35.6667H17.3327V32.3334H13.9993V29.0001H10.666ZM32.3327 29.0001V32.3334H28.9993V35.6667H32.3327C34.1827 35.6667 35.666 34.1834 35.666 32.3334V29.0001H32.3327ZM20.666 32.3334V35.6667H25.666V32.3334H20.666Z"
                fill={color}
            />
        </svg>
    )
}