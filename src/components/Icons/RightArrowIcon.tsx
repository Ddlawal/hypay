import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const RightArrowIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.382399 0.418219C0.137549 0.686086 0 1.04934 0 1.42811C0 1.80687 0.137549 2.17013 0.382399 2.43799L6.84743 9.50862L0.382399 16.5793C0.144488 16.8487 0.0128435 17.2095 0.0158193 17.584C0.018795 17.9585 0.156153 18.3168 0.398309 18.5816C0.640464 18.8465 0.968042 18.9967 1.31049 18.9999C1.65294 19.0032 1.98285 18.8592 2.22918 18.599L9.6176 10.5185C9.86245 10.2506 10 9.88739 10 9.50862C10 9.12986 9.86245 8.7666 9.6176 8.49874L2.22918 0.418219C1.98425 0.150434 1.65211 0 1.30579 0C0.959466 0 0.627323 0.150434 0.382399 0.418219Z"
                fill={color}
            />
        </svg>
    )
}
