import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const NotificationIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M32.5108 27.8304C31.5465 26.9707 30.7022 25.9852 30.0008 24.9004C29.235 23.4029 28.776 21.7676 28.6508 20.0904V15.1504C28.6574 12.516 27.7018 9.96987 25.9635 7.99036C24.2252 6.01086 21.8239 4.73425 19.2108 4.40039V3.11039C19.2108 2.75633 19.0701 2.41676 18.8198 2.1664C18.5694 1.91604 18.2298 1.77539 17.8758 1.77539C17.5217 1.77539 17.1822 1.91604 16.9318 2.1664C16.6814 2.41676 16.5408 2.75633 16.5408 3.11039V4.42039C13.951 4.77832 11.5788 6.06265 9.86331 8.0355C8.14787 10.0083 7.20551 12.536 7.21078 15.1504V20.0904C7.08554 21.7676 6.62656 23.4029 5.86078 24.9004C5.17166 25.9827 4.34098 26.9681 3.39078 27.8304C3.28411 27.9241 3.19862 28.0395 3.14 28.1688C3.08137 28.2981 3.05096 28.4384 3.05078 28.5804V29.9404C3.05078 30.2056 3.15614 30.46 3.34367 30.6475C3.53121 30.835 3.78557 30.9404 4.05078 30.9404H31.8508C32.116 30.9404 32.3704 30.835 32.5579 30.6475C32.7454 30.46 32.8508 30.2056 32.8508 29.9404V28.5804C32.8506 28.4384 32.8202 28.2981 32.7616 28.1688C32.7029 28.0395 32.6174 27.9241 32.5108 27.8304ZM5.13078 28.9404C6.06119 28.0416 6.88038 27.0344 7.57078 25.9404C8.53539 24.1319 9.09821 22.1364 9.22078 20.0904V15.1504C9.18112 13.9784 9.37771 12.8105 9.79883 11.7161C10.2199 10.6216 10.857 9.62317 11.672 8.78009C12.4871 7.93701 13.4634 7.26656 14.543 6.80866C15.6225 6.35077 16.7831 6.1148 17.9558 6.1148C19.1284 6.1148 20.2891 6.35077 21.3686 6.80866C22.4481 7.26656 23.4245 7.93701 24.2395 8.78009C25.0546 9.62317 25.6916 10.6216 26.1127 11.7161C26.5339 12.8105 26.7304 13.9784 26.6908 15.1504V20.0904C26.8134 22.1364 27.3762 24.1319 28.3408 25.9404C29.0312 27.0344 29.8504 28.0416 30.7808 28.9404H5.13078Z"
                fill={color}
            />
            <path
                d="M18.0003 34.28C18.6302 34.2655 19.2348 34.0287 19.7069 33.6114C20.1791 33.1942 20.4884 32.6234 20.5803 32H15.3203C15.4148 32.6403 15.7386 33.2245 16.2316 33.6439C16.7246 34.0633 17.3531 34.2894 18.0003 34.28Z"
                fill={color}
            />
        </svg>
    )
}
