import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const MenuIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.86664H16M0 0.599976H16M0 9.13331H16M0 13.4H16" stroke={color} />
        </svg>
    )
}
