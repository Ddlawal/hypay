import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const InstagramIcon = ({ size = 43, color = COLORS.WHITE }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 82 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.7725" cy="41.5001" r="40.7725" fill={'white'} />
            <path
                d="M40.3653 19.4829C34.501 19.4829 33.7636 19.5099 31.4595 19.6126C29.1554 19.7206 27.586 20.0826 26.2111 20.6174C24.7689 21.1599 23.4626 22.0107 22.3835 23.1106C21.2844 24.1902 20.4336 25.4964 19.8904 26.9382C19.3555 28.3104 18.9909 29.8825 18.8855 32.1785C18.7829 34.488 18.7559 35.2227 18.7559 41.0951C18.7559 46.962 18.7829 47.6967 18.8855 50.0008C18.9936 52.3022 19.3555 53.8716 19.8904 55.2465C20.4441 56.6674 21.1815 57.8721 22.3835 59.0741C23.5829 60.2761 24.7876 61.0163 26.2084 61.5673C27.586 62.1021 29.1527 62.4668 31.4541 62.5721C33.7609 62.6748 34.4956 62.7018 40.3653 62.7018C46.235 62.7018 46.967 62.6748 49.2738 62.5721C51.5725 62.4641 53.1473 62.1021 54.5222 61.5673C55.9634 61.0246 57.2688 60.1737 58.3471 59.0741C59.5491 57.8721 60.2865 56.6674 60.8402 55.2465C61.3724 53.8716 61.737 52.3022 61.8451 50.0008C61.9477 47.6967 61.9747 46.962 61.9747 41.0924C61.9747 35.2227 61.9477 34.488 61.8451 32.1812C61.737 29.8825 61.3724 28.3104 60.8402 26.9382C60.2971 25.4963 59.4463 24.1902 58.3471 23.1106C57.2683 22.0103 55.9619 21.1594 54.5195 20.6174C53.1419 20.0826 51.5698 19.7179 49.2711 19.6126C46.9643 19.5099 46.2323 19.4829 40.3599 19.4829H40.368H40.3653ZM38.4286 23.378H40.368C46.1377 23.378 46.8211 23.3969 49.0982 23.5023C51.2051 23.5968 52.3504 23.9507 53.1122 24.2451C54.1197 24.6368 54.8409 25.1068 55.5973 25.8631C56.3536 26.6194 56.8209 27.3379 57.2126 28.3482C57.5097 29.1072 57.8608 30.2525 57.9554 32.3594C58.0607 34.6365 58.0823 35.3199 58.0823 41.087C58.0823 46.854 58.0607 47.5401 57.9554 49.8172C57.8608 51.9241 57.507 53.0667 57.2126 53.8284C56.8661 54.7667 56.3131 55.6151 55.5946 56.3108C54.8382 57.0671 54.1197 57.5344 53.1095 57.9261C52.3531 58.2232 51.2078 58.5744 49.0982 58.6716C46.8211 58.7743 46.1377 58.7986 40.368 58.7986C34.5983 58.7986 33.9122 58.7743 31.6351 58.6716C29.5282 58.5744 28.3856 58.2232 27.6238 57.9261C26.6852 57.5801 25.836 57.0282 25.1387 56.3108C24.4196 55.614 23.8657 54.7648 23.518 53.8257C23.2236 53.0667 22.8698 51.9214 22.7752 49.8145C22.6726 47.5374 22.651 46.854 22.651 41.0815C22.651 35.3118 22.6726 34.6311 22.7752 32.354C22.8725 30.2471 23.2236 29.1018 23.5207 28.3401C23.9124 27.3325 24.3824 26.6113 25.1387 25.855C25.8951 25.0987 26.6136 24.6314 27.6238 24.2397C28.3856 23.9426 29.5282 23.5914 31.6351 23.4942C33.6286 23.4023 34.4011 23.3753 38.4286 23.3726V23.378ZM51.902 26.9652C51.5615 26.9652 51.2243 27.0323 50.9097 27.1626C50.5951 27.2929 50.3092 27.4839 50.0684 27.7247C49.8276 27.9655 49.6366 28.2514 49.5063 28.566C49.376 28.8806 49.3089 29.2178 49.3089 29.5583C49.3089 29.8988 49.376 30.236 49.5063 30.5507C49.6366 30.8653 49.8276 31.1511 50.0684 31.3919C50.3092 31.6327 50.5951 31.8237 50.9097 31.9541C51.2243 32.0844 51.5615 32.1514 51.902 32.1514C52.5898 32.1514 53.2494 31.8782 53.7357 31.3919C54.222 30.9056 54.4952 30.2461 54.4952 29.5583C54.4952 28.8706 54.222 28.211 53.7357 27.7247C53.2494 27.2384 52.5898 26.9652 51.902 26.9652ZM40.368 29.9959C38.8961 29.9729 37.4342 30.243 36.0677 30.7904C34.7011 31.3378 33.4571 32.1516 32.408 33.1844C31.359 34.2172 30.5259 35.4484 29.9572 36.8063C29.3886 38.1641 29.0957 39.6216 29.0957 41.0937C29.0957 42.5658 29.3886 44.0233 29.9572 45.3811C30.5259 46.739 31.359 47.9702 32.408 49.003C33.4571 50.0358 34.7011 50.8496 36.0677 51.397C37.4342 51.9444 38.8961 52.2145 40.368 52.1915C43.2813 52.146 46.06 50.9568 48.1041 48.8805C50.1483 46.8042 51.294 44.0074 51.294 41.0937C51.294 38.18 50.1483 35.3832 48.1041 33.3069C46.06 31.2306 43.2813 30.0414 40.368 29.9959ZM40.368 33.8883C42.2786 33.8883 44.111 34.6473 45.462 35.9983C46.8131 37.3493 47.5721 39.1817 47.5721 41.0924C47.5721 43.003 46.8131 44.8354 45.462 46.1864C44.111 47.5374 42.2786 48.2964 40.368 48.2964C38.4574 48.2964 36.625 47.5374 35.274 46.1864C33.923 44.8354 33.164 43.003 33.164 41.0924C33.164 39.1817 33.923 37.3493 35.274 35.9983C36.625 34.6473 38.4574 33.8883 40.368 33.8883Z"
                fill="#36076B"
            />
        </svg>
    )
}
