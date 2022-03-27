import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const ShareIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M27.1346 22.0757C25.8695 22.0757 24.702 22.4815 23.7875 23.1592L14.5897 17.0762C14.7437 16.3034 14.7437 15.5116 14.5897 14.7388L23.7875 8.65578C24.702 9.33347 25.8695 9.73928 27.1346 9.73928C30.0733 9.73928 32.4615 7.55606 32.4615 4.86964C32.4615 2.18322 30.0733 0 27.1346 0C24.1959 0 21.8077 2.18322 21.8077 4.86964C21.8077 5.34037 21.8787 5.79081 22.0163 6.22096L13.2802 12.0037C11.9839 10.4332 9.92421 9.41463 7.60256 9.41463C3.6784 9.41463 0.5 12.3202 0.5 15.9075C0.5 19.4948 3.6784 22.4003 7.60256 22.4003C9.92421 22.4003 11.9839 21.3818 13.2802 19.8113L22.0163 25.594C21.8787 26.0242 21.8077 26.4787 21.8077 26.9453C21.8077 29.6317 24.1959 31.815 27.1346 31.815C30.0733 31.815 32.4615 29.6317 32.4615 26.9453C32.4615 24.2589 30.0733 22.0757 27.1346 22.0757ZM27.1346 2.75946C28.4086 2.75946 29.4429 3.70498 29.4429 4.86964C29.4429 6.03429 28.4086 6.97981 27.1346 6.97981C25.8606 6.97981 24.8263 6.03429 24.8263 4.86964C24.8263 3.70498 25.8606 2.75946 27.1346 2.75946ZM7.60256 19.4786C5.4496 19.4786 3.69615 17.8756 3.69615 15.9075C3.69615 13.9393 5.4496 12.3364 7.60256 12.3364C9.75552 12.3364 11.509 13.9393 11.509 15.9075C11.509 17.8756 9.75552 19.4786 7.60256 19.4786ZM27.1346 29.0555C25.8606 29.0555 24.8263 28.11 24.8263 26.9453C24.8263 25.7807 25.8606 24.8352 27.1346 24.8352C28.4086 24.8352 29.4429 25.7807 29.4429 26.9453C29.4429 28.11 28.4086 29.0555 27.1346 29.0555Z"
                fill={color}
            />
        </svg>
    )
}