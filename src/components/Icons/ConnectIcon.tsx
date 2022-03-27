import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const ConnectIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.4406 23.0389C22.6579 23.0389 23.6448 22.0566 23.6448 20.8449C23.6448 19.6332 22.6579 18.6509 21.4406 18.6509C20.2232 18.6509 19.2363 19.6332 19.2363 20.8449C19.2363 22.0566 20.2232 23.0389 21.4406 23.0389Z"
                fill={color}
            />
            <path
                d="M6.01088 7.68055C7.22825 7.68055 8.21513 6.69825 8.21513 5.48652C8.21513 4.27478 7.22825 3.29248 6.01088 3.29248C4.79351 3.29248 3.80664 4.27478 3.80664 5.48652C3.80664 6.69825 4.79351 7.68055 6.01088 7.68055Z"
                fill={color}
            />
            <path
                d="M28.053 31.8152C27.1811 31.8152 26.3288 31.5578 25.6038 31.0757C24.8788 30.5935 24.3138 29.9082 23.9801 29.1064C23.6464 28.3046 23.5591 27.4223 23.7292 26.5711C23.8993 25.7199 24.3192 24.938 24.9357 24.3243C25.5523 23.7106 26.3378 23.2927 27.193 23.1234C28.0481 22.9541 28.9345 23.041 29.7401 23.3731C30.5456 23.7052 31.2341 24.2676 31.7185 24.9893C32.2029 25.7109 32.4615 26.5593 32.4615 27.4271C32.458 28.5899 31.9924 29.704 31.1664 30.5261C30.3404 31.3483 29.2211 31.8117 28.053 31.8152ZM28.053 25.2331C27.6171 25.2331 27.1909 25.3618 26.8284 25.6029C26.4659 25.8439 26.1834 26.1866 26.0166 26.5875C25.8497 26.9884 25.8061 27.4296 25.8911 27.8552C25.9762 28.2808 26.1861 28.6717 26.4944 28.9786C26.8027 29.2854 27.1954 29.4944 27.623 29.579C28.0506 29.6637 28.4938 29.6202 28.8965 29.4542C29.2993 29.2881 29.6436 29.0069 29.8858 28.6461C30.128 28.2853 30.2573 27.8611 30.2573 27.4271C30.2555 26.8458 30.0227 26.2887 29.6097 25.8776C29.1967 25.4665 28.6371 25.2348 28.053 25.2331Z"
                fill={color}
            />
            <path
                d="M31.3594 15.3597C31.3475 11.2901 29.718 7.39055 26.827 4.51289C23.9359 1.63523 20.0182 0.0133219 15.9297 0.00145583C13.297 -0.0359231 10.7046 0.64713 8.43527 1.97609L9.64761 3.84102C10.5091 3.42886 11.3921 3.06267 12.2927 2.744C10.4708 6.32238 9.45524 10.2534 9.31697 14.2627H2.70424C2.82773 12.4513 3.35481 10.6901 4.24721 9.1067L2.59403 7.68058C1.22268 10.0095 0.499855 12.6602 0.5 15.3597C0.499711 17.3767 0.898614 19.3739 1.67393 21.2374C2.44924 23.1009 3.58577 24.7941 5.01861 26.2203C6.45145 27.6465 8.15252 28.7777 10.0247 29.5495C11.8968 30.3212 13.9034 30.7182 15.9297 30.718C17.8944 30.7364 19.843 30.3634 21.6607 29.6209L20.9995 27.5366C19.1925 28.3057 17.23 28.6438 15.2684 28.5239C12.9181 24.9258 11.6206 20.7474 11.5212 16.4567H31.2492C31.3403 16.0985 31.3774 15.7288 31.3594 15.3597ZM12.4029 28.0851C10.2113 27.4312 8.20853 26.2652 6.56167 24.6844C4.3749 22.4571 3.01454 19.5556 2.70424 16.4567H9.31697C9.46862 20.5124 10.5226 24.484 12.4029 28.0851ZM11.5212 14.2627C11.6089 9.98598 12.8663 5.81398 15.1582 2.19549H16.7012C18.9931 5.81398 20.2505 9.98598 20.3382 14.2627H11.5212ZM22.5424 14.2627C22.4586 10.1973 21.4006 6.21059 19.4565 2.6343C22.0496 3.37827 24.3548 4.88835 26.0669 6.96475C27.779 9.04115 28.8175 11.586 29.0449 14.2627H22.5424Z"
                fill={color}
            />
        </svg>
    )
}