import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const WarningIcon = ({ size = 18, color = COLORS.RED }: IconProps): JSX.Element => {
    return (
        <svg
            width={size}
            height={size}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 478.125 478.125"
            xmlSpace="preserve"
        >
            <circle cx="239.904" cy="314.721" r="35" fill={color} />
            <path
                d="M256.657,127.525h-31.9c-10.557,0-19.125,8.645-19.125,19.125v101.975c0,10.48,8.645,19.125,19.125,19.125h31.9
                   c10.48,0,19.125-8.645,19.125-19.125V146.65C275.782,136.17,267.138,127.525,256.657,127.525z"
                fill={color}
            />
            <path
                d="M239.062,0C106.947,0,0,106.947,0,239.062s106.947,239.062,239.062,239.062c132.115,0,239.062-106.947,239.062-239.062
                   S371.178,0,239.062,0z M239.292,409.734c-94.171,0-170.595-76.348-170.595-170.596c0-94.248,76.347-170.595,170.595-170.595
                   s170.595,76.347,170.595,170.595C409.887,333.387,333.464,409.734,239.292,409.734z"
                fill={color}
            />
        </svg>
    )
}
