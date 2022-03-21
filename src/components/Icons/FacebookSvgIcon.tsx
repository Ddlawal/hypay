import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const FacebookSvgIcon = ({ size = 18, color = COLORS.PRIMARY, onClick }: IconProps): JSX.Element => {
    return (
        <svg
            width={size}
            height={size}
            onClick={onClick}
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M37.3218 0.841553H2.3618C1.52105 0.841553 0.841797 1.5208 0.841797 2.36155V37.3216C0.841797 38.1623 1.52105 38.8416 2.3618 38.8416H37.3218C38.1625 38.8416 38.8418 38.1623 38.8418 37.3216V2.36155C38.8418 1.5208 38.1625 0.841553 37.3218 0.841553ZM35.8018 35.8016H27.057V24.1261H31.997L32.738 18.3928H27.057V14.7306C27.057 13.0681 27.5178 11.9376 29.8975 11.9376H32.9328V6.80755C32.4055 6.7363 30.6053 6.57955 28.5058 6.57955C24.1263 6.57955 21.129 9.2538 21.129 14.1606V18.3881H16.1795V24.1213H21.1338V35.8016H3.8818V3.88155H35.8018V35.8016Z"
                fill={color}
            />
        </svg>
    )
}
