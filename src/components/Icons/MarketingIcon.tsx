import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const MarketingIcon = ({ size = 18, color = COLORS.YELLOW }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_636_2854)">
                <path
                    d="M12.9966 2.91184C12.9469 2.76951 12.8383 2.65141 12.6949 2.58348C12.5513 2.51548 12.3848 2.50336 12.2315 2.54963L9.69165 3.31664C9.37278 3.41293 9.19817 3.73121 9.30187 4.02752L9.4288 4.39072L2.96807 8.80086L0.419513 9.57035C0.266355 9.61661 0.139263 9.71749 0.0661643 9.85079C-0.00693382 9.98409 -0.0200478 10.139 0.0297367 10.2813L1.57824 14.7093C1.66161 14.9477 1.89961 15.0993 2.15549 15.0993C2.21774 15.0993 2.28097 15.0903 2.3433 15.0715L4.89145 14.302L6.20066 14.3084C6.46359 15.4621 7.56775 16.3305 8.88627 16.3305C10.1948 16.3305 11.2916 15.4751 11.5653 14.3347L12.908 14.3412L13.035 14.7045C13.0847 14.8468 13.1932 14.9649 13.3368 15.0328C13.4229 15.0736 13.5174 15.0943 13.6124 15.0943C13.6755 15.0943 13.7389 15.0851 13.8 15.0667L16.3399 14.2998C16.6588 14.2035 16.8334 13.8852 16.7298 13.5889L12.9966 2.91184ZM2.54535 13.8239L1.37222 10.4691L2.85879 10.0202L4.03176 13.3751L2.54535 13.8239ZM8.88619 15.2021C8.24571 15.2021 7.69671 14.8345 7.46851 14.3146L10.2984 14.3285C10.0666 14.8412 9.52108 15.2021 8.88619 15.2021ZM5.23857 13.1753L4.60003 11.349L3.9615 9.52273L9.82384 5.52114L11.6217 10.6628L12.5126 13.2109L5.23857 13.1753ZM14.0021 13.8192L13.9275 13.6061C13.9275 13.6057 13.9274 13.6053 13.9272 13.6048L12.3232 9.01729L10.6443 4.21536L12.0294 3.79703L15.3872 13.4008L14.0021 13.8192Z"
                    fill={color}
                />
                <path
                    d="M15.0405 5.65483C15.1289 5.69665 15.2229 5.71644 15.3157 5.71644C15.5367 5.71644 15.7499 5.6039 15.8571 5.40831L16.9468 3.42159C17.0991 3.144 16.9804 2.8042 16.6817 2.6627C16.383 2.52128 16.0173 2.63148 15.865 2.90914L14.7754 4.89587C14.623 5.17353 14.7418 5.51333 15.0405 5.65483Z"
                    fill={color}
                />
                <path
                    d="M19.6051 11.021L17.4668 10.0088C17.168 9.86746 16.8025 9.97782 16.6503 10.2555C16.498 10.5331 16.6169 10.8729 16.9156 11.0143L19.0539 12.0265C19.1422 12.0682 19.2362 12.088 19.3289 12.088C19.5499 12.088 19.7631 11.9754 19.8704 11.7798C20.0227 11.5022 19.9038 11.1625 19.6051 11.021Z"
                    fill={color}
                />
                <path
                    d="M16.5357 7.74803C16.6191 7.98643 16.8571 8.13801 17.113 8.13801C17.1752 8.13801 17.2385 8.12906 17.3008 8.11025L19.5826 7.42118C19.9014 7.32489 20.076 7.0066 19.9723 6.71021C19.8687 6.41382 19.5262 6.25194 19.2073 6.348L16.9254 7.03707C16.6067 7.13344 16.4321 7.45172 16.5357 7.74803Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_636_2854">
                    <rect width="20" height="18.5858" fill={COLORS.WHITE} transform="translate(0 0.132812)" />
                </clipPath>
            </defs>
        </svg>
    )
}