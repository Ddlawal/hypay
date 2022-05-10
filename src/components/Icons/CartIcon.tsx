import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export function CartIcon({ size = 18, color = COLORS.PINK }: IconProps): JSX.Element {
    return (
        <svg width={size} height={size} viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.04947 6.02388e-05C1.69706 6.02388e-05 1.35908 0.150555 1.10989 0.418437C0.860698 0.686319 0.720703 1.04964 0.720703 1.42849C0.720703 1.80733 0.860698 2.17066 1.10989 2.43854C1.35908 2.70642 1.69706 2.85691 2.04947 2.85691H4.99934L8.48603 17.8554C8.78234 19.1267 9.84137 19.998 11.0599 19.998H27.6296C28.8295 19.998 29.8486 19.141 30.1636 17.8982L33.6077 4.28534H30.8253L27.6283 17.1412H11.0585L7.57316 2.1427C7.42919 1.52738 7.0973 0.981787 6.63064 0.593305C6.16398 0.204824 5.58955 -0.00407521 4.99934 6.02388e-05H2.04947ZM25.9673 19.998C23.7815 19.998 21.981 21.9336 21.981 24.2833C21.981 26.6331 23.7815 28.5686 25.9673 28.5686C28.1531 28.5686 29.9536 26.6331 29.9536 24.2833C29.9536 21.9336 28.1531 19.998 25.9673 19.998ZM14.0084 19.998C11.8226 19.998 10.0221 21.9336 10.0221 24.2833C10.0221 26.6331 11.8226 28.5686 14.0084 28.5686C16.1942 28.5686 17.9947 26.6331 17.9947 24.2833C17.9947 21.9336 16.1942 19.998 14.0084 19.998ZM17.9947 6.02388e-05V7.14219H14.0084L19.3235 12.8559L24.6385 7.14219H20.6522V6.02388e-05H17.9947ZM14.0084 22.8549C14.7578 22.8549 15.3372 23.4777 15.3372 24.2833C15.3372 25.0889 14.7578 25.7117 14.0084 25.7117C13.259 25.7117 12.6796 25.0889 12.6796 24.2833C12.6796 23.4777 13.259 22.8549 14.0084 22.8549ZM25.9673 22.8549C26.7167 22.8549 27.2961 23.4777 27.2961 24.2833C27.2961 25.0889 26.7167 25.7117 25.9673 25.7117C25.2179 25.7117 24.6385 25.0889 24.6385 24.2833C24.6385 23.4777 25.2179 22.8549 25.9673 22.8549Z"
                fill={color}
            />
        </svg>
    )
}