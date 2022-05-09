import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const ArrowUpIcon = ({ size = 18, color = COLORS.WHITE, onClick }: IconProps): JSX.Element => {
    return (
        <svg
            onClick={onClick}
            width={size}
            height={size}
            viewBox="0 0 30 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.660346 12.5029C1.08329 12.8212 1.65686 13 2.2549 13C2.85295 13 3.42651 12.8212 3.84946 12.5029L15.0136 4.09834L26.1778 12.5029C26.6031 12.8122 27.1729 12.9833 27.7642 12.9794C28.3556 12.9756 28.9212 12.797 29.3394 12.4822C29.7576 12.1674 29.9948 11.7415 29.9999 11.2964C30.0051 10.8512 29.7777 10.4223 29.3669 10.1021L16.6082 0.497118C16.1852 0.178813 15.6117 -9.53674e-07 15.0136 -9.53674e-07C14.4156 -9.53674e-07 13.842 0.178813 13.4191 0.497118L0.660346 10.1021C0.237527 10.4205 0 10.8523 0 11.3025C0 11.7527 0.237527 12.1845 0.660346 12.5029Z"
                fill={color}
            />
        </svg>
    )
}
