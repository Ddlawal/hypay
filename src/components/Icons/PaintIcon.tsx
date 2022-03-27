import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const PaintIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M34.5426 0.877951C34.7238 1.0326 34.8501 1.24171 34.9026 1.47405C34.9551 1.70639 34.931 1.94948 34.834 2.16702C31.4568 9.73806 24.3648 20.2007 19.1732 25.6527C17.718 27.1779 15.9234 28.338 13.9353 29.0387C13.8955 29.5398 13.8028 30.2262 13.5821 30.9546C13.1384 32.4093 12.1098 34.2192 9.81201 34.7954C7.58668 35.3253 5.28046 35.4242 3.01794 35.0867C2.59722 35.0203 2.18243 34.9206 1.77743 34.7887C1.40274 34.6747 1.05352 34.4896 0.74883 34.2435C0.547901 34.0726 0.393075 33.8541 0.29854 33.6078C0.181373 33.2918 0.184515 32.9438 0.307369 32.63C0.517063 32.0892 1.00488 31.7912 1.32494 31.6323C2.19461 31.1975 2.7045 30.6324 3.23867 29.8091C3.44836 29.4912 3.64481 29.1535 3.87216 28.7672L4.13042 28.3302C4.46372 27.7673 4.85 27.1382 5.3356 26.4584C6.50106 24.8272 7.98657 24.4166 9.18955 24.4806C9.46767 24.4961 9.72593 24.5358 9.95769 24.5866C10.0945 24.2069 10.2711 23.7478 10.483 23.2445C11.0591 21.8782 11.9354 20.1124 13.1031 18.6776C17.9062 12.7841 26.7442 4.97912 33.2271 0.789659C33.4267 0.66084 33.6625 0.599853 33.8995 0.615759C34.1365 0.631666 34.362 0.723618 34.5426 0.877951ZM9.99742 26.9065C9.70452 26.779 9.39143 26.7043 9.07256 26.6857C8.52957 26.657 7.80778 26.7961 7.13235 27.743C6.69751 28.35 6.34875 28.9173 6.0287 29.4581L5.79693 29.8488C5.56295 30.2483 5.32677 30.6478 5.09059 31.0142C4.64357 31.7385 4.07624 32.3813 3.41304 32.9147C4.93608 33.1619 7.24492 33.1597 9.27784 32.6499C10.5117 32.343 11.1386 31.3939 11.4697 30.3101C11.6295 29.7717 11.7229 29.2157 11.7478 28.6546L9.99742 26.9065ZM13.1759 26.9638C13.4408 26.8756 13.7874 26.7431 14.1869 26.5599C15.4584 25.97 16.6078 25.1463 17.5751 24.1319C21.769 19.7261 27.3137 11.8372 30.9337 5.08065C25.2168 9.33413 18.6478 15.3667 14.816 20.0726C13.8403 21.2712 13.0612 22.8163 12.516 24.1032C12.2489 24.7389 12.0436 25.2951 11.9089 25.6924V25.6946L13.1781 26.9638H13.1759ZM2.19903 33.674L2.21448 33.663C2.20973 33.6666 2.20454 33.6696 2.19903 33.6718V33.674ZM10.1056 26.9572L10.11 26.9594H10.1056V26.9572Z"
                fill={color}
            />
        </svg>
    )
}