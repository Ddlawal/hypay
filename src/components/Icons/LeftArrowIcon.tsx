import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const LeftArrowIcon = ({ size = 18, color = COLORS.PRIMARY, onClick }: IconProps): JSX.Element => {
    return (
        <svg
            onClick={onClick}
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.5794 0.418219C10.8487 0.686086 11 1.04934 11 1.42811C11 1.80687 10.8487 2.17013 10.5794 2.43799L3.46782 9.50862L10.5794 16.5793C10.8411 16.8487 10.9859 17.2095 10.9826 17.584C10.9793 17.9585 10.8282 18.3168 10.5619 18.5816C10.2955 18.8465 9.93515 18.9967 9.55846 18.9999C9.18177 19.0032 8.81886 18.8592 8.5479 18.599L0.420639 10.5185C0.151304 10.2506 -4.32191e-07 9.88739 -4.15635e-07 9.50862C-3.99079e-07 9.12986 0.151304 8.7666 0.420639 8.49874L8.5479 0.418219C8.81732 0.150434 9.18268 -7.94376e-08 9.56363 -6.27856e-08C9.94459 -4.61336e-08 10.3099 0.150434 10.5794 0.418219Z"
                fill={color}
            />
        </svg>
    )
}
