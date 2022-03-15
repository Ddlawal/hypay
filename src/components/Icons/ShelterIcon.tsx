import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const ShelterIcon = ({ size = 18, color = COLORS.YELLOW }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.148 1.08264C16.9698 0.793609 16.7185 0.554368 16.4183 0.387997C16.118 0.221626 15.779 0.133738 15.434 0.132812H4.566C3.868 0.132812 3.211 0.496703 2.852 1.08264L0.143 5.49824C0.0492558 5.65026 -0.000194965 5.82447 5.77679e-07 6.00201C0.00399429 6.94618 0.359495 7.85659 1 8.56293V16.7622C1 17.8412 1.897 18.7186 3 18.7186H17C18.103 18.7186 19 17.8412 19 16.7622V8.56293C19.6405 7.85659 19.996 6.94618 20 6.00201C20.0002 5.82447 19.9507 5.65026 19.857 5.49824L17.148 1.08264ZM17.984 6.24754C17.9223 6.71983 17.6868 7.15398 17.3217 7.46884C16.9566 7.7837 16.4867 7.95773 16 7.95841C14.897 7.95841 14 7.08096 14 6.00201C14 5.93549 13.975 5.8768 13.961 5.81419L13.981 5.81028L13.22 2.08921H15.434L17.984 6.24754ZM8.819 2.08921H11.18L11.993 6.06559C11.958 7.11422 11.08 7.95841 10 7.95841C8.92 7.95841 8.042 7.11422 8.007 6.06559L8.819 2.08921ZM4.566 2.08921H6.78L6.02 5.81028L6.04 5.81419C6.025 5.8768 6 5.93549 6 6.00201C6 7.08096 5.103 7.95841 4 7.95841C3.51325 7.95773 3.04341 7.7837 2.67828 7.46884C2.31315 7.15398 2.07772 6.71983 2.016 6.24754L4.566 2.08921ZM8 16.7622V13.8276H12V16.7622H8ZM14 16.7622V13.8276C14 12.7486 13.103 11.8712 12 11.8712H8C6.897 11.8712 6 12.7486 6 13.8276V16.7622H3V9.7759C3.321 9.85709 3.652 9.91481 4 9.91481C4.56781 9.9151 5.12915 9.79683 5.6465 9.56792C6.16385 9.33901 6.6253 9.00472 7 8.58739C7.733 9.40125 8.807 9.91481 10 9.91481C11.193 9.91481 12.267 9.40125 13 8.58739C13.3747 9.00472 13.8361 9.33901 14.3535 9.56792C14.8708 9.79683 15.4322 9.9151 16 9.91481C16.348 9.91481 16.679 9.85709 17 9.7759V16.7622H14Z"
                fill={color}
            />
        </svg>
    )
}
