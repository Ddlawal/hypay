import * as React from 'react'
import { IconProps } from '../../../interfaces/icons'
import { COLORS } from '../../../lib/constants/colors'

export function RTLinkIcon({ size = 18, color = COLORS.PRIMARY }: IconProps): JSX.Element {
    return (
        <svg
            width={size}
            height={size}
            className="cursor-pointer"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.43165 9.7802C8.40488 9.7537 8.36874 9.73883 8.33107 9.73883C8.2934 9.73883 8.25726 9.7537 8.23049 9.7802L6.16194 11.8489C5.20421 12.8067 3.58781 12.9082 2.53039 11.8489C1.47119 10.7896 1.57266 9.1749 2.53039 8.21709L4.59895 6.14837C4.65413 6.09318 4.65413 6.00238 4.59895 5.94719L3.89044 5.23863C3.86367 5.21212 3.82753 5.19725 3.78986 5.19725C3.75219 5.19725 3.71605 5.21212 3.68928 5.23863L1.62073 7.30735C0.114705 8.81349 0.114705 11.2507 1.62073 12.7551C3.12675 14.2595 5.5638 14.2612 7.06804 12.7551L9.13659 10.6864C9.19178 10.6312 9.19178 10.5404 9.13659 10.4852L8.43165 9.7802ZM13.0352 1.34152C11.5291 -0.164622 9.09209 -0.164622 7.58785 1.34152L5.51751 3.41025C5.49101 3.43701 5.47614 3.47316 5.47614 3.51083C5.47614 3.5485 5.49101 3.58465 5.51751 3.61142L6.22424 4.3182C6.27943 4.37339 6.37021 4.37339 6.4254 4.3182L8.49395 2.24948C9.45168 1.29167 11.0681 1.1902 12.1255 2.24948C13.1847 3.30877 13.0832 4.92351 12.1255 5.88132L10.0569 7.95004C10.0304 7.97681 10.0156 8.01296 10.0156 8.05063C10.0156 8.0883 10.0304 8.12445 10.0569 8.15122L10.7654 8.85978C10.8206 8.91497 10.9114 8.91497 10.9666 8.85978L13.0352 6.79106C14.5394 5.28491 14.5394 2.84767 13.0352 1.34152ZM9.07429 4.56211C9.04752 4.5356 9.01138 4.52073 8.97371 4.52073C8.93604 4.52073 8.8999 4.5356 8.87313 4.56211L4.84105 8.59274C4.81455 8.6195 4.79968 8.65565 4.79968 8.69332C4.79968 8.73099 4.81455 8.76714 4.84105 8.79391L5.546 9.49891C5.60118 9.5541 5.69197 9.5541 5.74716 9.49891L9.77745 5.46829C9.83264 5.4131 9.83264 5.3223 9.77745 5.26711L9.07429 4.56211Z"
                fill={color}
            />
        </svg>
    )
}
