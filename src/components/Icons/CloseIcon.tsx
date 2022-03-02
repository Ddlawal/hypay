import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const CloseIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.5L12.5 12.5M0.5 12.5L12.5 0.5" stroke={color} />
        </svg>
    )
}
