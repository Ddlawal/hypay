import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const CoinsIcon = ({ size = 40, color = COLORS.PINK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M31.1803 19.8652C35.9754 19.8652 39.8626 17.6569 39.8626 14.9327C39.8626 12.2086 35.9754 10.0002 31.1803 10.0002C26.3852 10.0002 22.498 12.2086 22.498 14.9327C22.498 17.6569 26.3852 19.8652 31.1803 19.8652Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.3132 22.7023C25.1033 22.7023 22.6309 20.0998 22.6309 18.5923V25.0498C22.6309 27.7748 26.5183 29.9798 31.3132 29.9798C36.113 29.9798 40.0005 27.7748 40.0005 25.0498V18.7473C40.0005 20.2573 37.5255 22.7023 31.3132 22.7023Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.3132 32.68C25.7583 32.68 22.6309 30.1775 22.6309 28.67V35.0675C22.6309 37.7925 26.5183 40 31.3132 40C36.113 40 40.0005 37.7925 40.0005 35.0675V28.5925C40.0005 30.1 36.8705 32.68 31.3132 32.68Z"
                fill={color}
            />
            <path
                d="M9.84228 9.86498C15.278 9.86498 19.6846 7.65663 19.6846 4.93249C19.6846 2.20835 15.278 0 9.84228 0C4.40654 0 0 2.20835 0 4.93249C0 7.65663 4.40654 9.86498 9.84228 9.86498Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.1548 12.702C3.11744 12.702 0.3125 10.0995 0.3125 8.59204V15.0495C0.3125 17.7745 4.7199 19.9795 10.1548 19.9795C15.5947 19.9795 19.9996 17.7745 19.9996 15.0495V8.74704C19.9996 10.257 17.1921 12.702 10.1548 12.702Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.1548 22.6798C3.85742 22.6798 0.3125 20.1773 0.3125 18.6698V25.0673C0.3125 27.7923 4.7199 29.9998 10.1548 29.9998C15.5947 29.9998 19.9996 27.7923 19.9996 25.0673V18.5923C19.9996 20.0998 16.4496 22.6798 10.1548 22.6798Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.1548 32.68C3.85742 32.68 0.3125 30.1775 0.3125 28.67V35.0675C0.3125 37.7925 4.7199 40 10.1548 40C15.5947 40 19.9996 37.7925 19.9996 35.0675V28.5925C19.9996 30.1 16.4496 32.68 10.1548 32.68Z"
                fill={color}
            />
        </svg>
    )
}
