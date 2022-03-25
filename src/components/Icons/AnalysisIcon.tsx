import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const AnalysisIcon = ({ size = 18, color = COLORS.YELLOW }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_636_2833)">
                <path
                    d="M13.9093 11.9914C13.8437 11.9914 13.777 11.9781 13.7139 11.95C13.4886 11.8495 13.3936 11.5984 13.5016 11.389L18.0966 2.48774C18.2047 2.27836 18.475 2.19004 18.7003 2.29049C18.9256 2.39093 19.0206 2.64209 18.9125 2.85147L14.3176 11.7527C14.2398 11.9034 14.0779 11.9914 13.9093 11.9914Z"
                    fill={color}
                />
                <path
                    d="M13.9885 11.8375C13.9083 11.8375 13.8271 11.8176 13.7535 11.7759L9.29515 9.25031C9.08175 9.12943 9.01425 8.87068 9.14433 8.67237C9.27441 8.4741 9.55265 8.41134 9.76616 8.53222L14.2245 11.0578C14.4379 11.1787 14.5054 11.4375 14.3753 11.6358C14.2901 11.7657 14.1411 11.8375 13.9885 11.8375Z"
                    fill={color}
                />
                <path
                    d="M5.02252 14.3925C4.92119 14.3925 4.81931 14.361 4.73502 14.2964C4.54217 14.1487 4.5147 13.8837 4.67365 13.7045L9.18013 8.62376C9.33912 8.44455 9.6242 8.41903 9.81709 8.56673C10.0099 8.71444 10.0374 8.97943 9.87845 9.15865L5.37201 14.2394C5.28248 14.3402 5.15303 14.3925 5.02252 14.3925Z"
                    fill={color}
                />
                <path
                    d="M2.17125 18.7186C1.92137 18.7186 1.71875 18.5303 1.71875 18.2981V0.553316C1.71879 0.321066 1.92141 0.132812 2.17125 0.132812C2.42109 0.132812 2.62375 0.321066 2.62375 0.553316V18.2981C2.62375 18.5303 2.42113 18.7186 2.17125 18.7186Z"
                    fill={color}
                />
                <path
                    d="M19.5475 17.1203H0.4525C0.202617 17.1203 0 16.932 0 16.6998C0 16.4676 0.202617 16.2793 0.4525 16.2793H19.5475C19.7974 16.2793 20 16.4676 20 16.6998C20 16.932 19.7974 17.1203 19.5475 17.1203Z"
                    fill={color}
                />
                <path
                    d="M9.52965 9.9462C10.1544 9.9462 10.6609 9.47555 10.6609 8.89497C10.6609 8.3144 10.1544 7.84375 9.52965 7.84375C8.9049 7.84375 8.39844 8.3144 8.39844 8.89497C8.39844 9.47555 8.9049 9.9462 9.52965 9.9462Z"
                    fill={color}
                />
                <path
                    d="M5.06871 15.0605C5.69346 15.0605 6.19992 14.5898 6.19992 14.0092C6.19992 13.4287 5.69346 12.958 5.06871 12.958C4.44396 12.958 3.9375 13.4287 3.9375 14.0092C3.9375 14.5898 4.44396 15.0605 5.06871 15.0605Z"
                    fill={color}
                />
                <path
                    d="M13.9828 12.4726C14.6075 12.4726 15.114 12.0019 15.114 11.4213C15.114 10.8408 14.6075 10.3701 13.9828 10.3701C13.358 10.3701 12.8516 10.8408 12.8516 11.4213C12.8516 12.0019 13.358 12.4726 13.9828 12.4726Z"
                    fill={color}
                />
                <path
                    d="M18.4437 3.88369C19.0684 3.88369 19.5749 3.41305 19.5749 2.83247C19.5749 2.2519 19.0684 1.78125 18.4437 1.78125C17.819 1.78125 17.3125 2.2519 17.3125 2.83247C17.3125 3.41305 17.819 3.88369 18.4437 3.88369Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_636_2833">
                    <rect width="20" height="18.5858" fill={COLORS.WHITE} transform="translate(0 0.132812)" />
                </clipPath>
            </defs>
        </svg>
    )
}
