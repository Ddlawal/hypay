import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

type FacebookIconProps = IconProps & { fillColor?: string }

export function FacebookIcon({
    size = 18,
    color = COLORS.PINK,
    fillColor = COLORS.WHITE,
}: FacebookIconProps): JSX.Element {
    return (
        <svg width={size} height={size} viewBox="0 0 82 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            {fillColor && <circle cx="41.2276" cy="41.5001" r="40.7725" fill={fillColor} />}
            <path
                d="M35.2229 62.7018V42.4222H29.8105V35.1206H35.2229V28.8841C35.2229 23.9834 38.4199 19.4829 45.7867 19.4829C48.7693 19.4829 50.9749 19.7662 50.9749 19.7662L50.8011 26.5847C50.8011 26.5847 48.5518 26.563 46.0972 26.563C43.4407 26.563 43.0151 27.7759 43.0151 29.7891V35.1206H51.0123L50.6643 42.4222H43.0151V62.7018H35.2229Z"
                fill={color}
            />
        </svg>
    )
}
