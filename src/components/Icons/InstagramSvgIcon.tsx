import * as React from 'react'
import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const InstagramSvgIcon = ({ size = 18, color = COLORS.PRIMARY, onClick }: IconProps): JSX.Element => {
    return (
        <svg
            width={size}
            height={size}
            onClick={onClick}
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1668 0.114C13.1929 0.0207272 13.8389 0 19 0C24.1611 0 24.8071 0.0224545 26.8315 0.114C28.8558 0.205545 30.2376 0.528545 31.4467 0.996636C32.7128 1.47509 33.8615 2.223 34.8115 3.19027C35.7787 4.13855 36.5249 5.28545 37.0016 6.55327C37.4715 7.76236 37.7927 9.14418 37.886 11.1651C37.9793 13.1946 38 13.8406 38 19C38 24.1611 37.9775 24.8071 37.886 26.8332C37.7945 28.8541 37.4715 30.2359 37.0016 31.445C36.5249 32.713 35.7775 33.8618 34.8115 34.8115C33.8615 35.7787 32.7128 36.5249 31.4467 37.0016C30.2376 37.4715 28.8558 37.7927 26.8349 37.886C24.8071 37.9793 24.1611 38 19 38C13.8389 38 13.1929 37.9775 11.1668 37.886C9.14591 37.7945 7.76409 37.4715 6.555 37.0016C5.28704 36.5248 4.13824 35.7774 3.18855 34.8115C2.22193 33.8626 1.47391 32.7143 0.996636 31.4467C0.528545 30.2376 0.207273 28.8558 0.114 26.8349C0.0207272 24.8054 0 24.1594 0 19C0 13.8389 0.0224545 13.1929 0.114 11.1685C0.205545 9.14418 0.528545 7.76236 0.996636 6.55327C1.47461 5.2856 2.22321 4.13736 3.19027 3.18855C4.13862 2.22214 5.28627 1.47413 6.55327 0.996636C7.76236 0.528545 9.14418 0.207273 11.1651 0.114H11.1668ZM26.6777 3.534C24.6741 3.44245 24.073 3.42345 19 3.42345C13.927 3.42345 13.3259 3.44245 11.3223 3.534C9.46891 3.61864 8.46364 3.92782 7.79345 4.18864C6.90736 4.53409 6.27346 4.94346 5.60846 5.60846C4.97808 6.22173 4.49295 6.96831 4.18864 7.79345C3.92782 8.46364 3.61864 9.46891 3.534 11.3223C3.44245 13.3259 3.42345 13.927 3.42345 19C3.42345 24.073 3.44245 24.6741 3.534 26.6777C3.61864 28.5311 3.92782 29.5364 4.18864 30.2065C4.49264 31.0305 4.978 31.7784 5.60846 32.3915C6.22164 33.022 6.96955 33.5074 7.79345 33.8114C8.46364 34.0722 9.46891 34.3814 11.3223 34.466C13.3259 34.5575 13.9253 34.5765 19 34.5765C24.0747 34.5765 24.6741 34.5575 26.6777 34.466C28.5311 34.3814 29.5364 34.0722 30.2065 33.8114C31.0926 33.4659 31.7265 33.0565 32.3915 32.3915C33.022 31.7784 33.5074 31.0305 33.8114 30.2065C34.0722 29.5364 34.3814 28.5311 34.466 26.6777C34.5575 24.6741 34.5765 24.073 34.5765 19C34.5765 13.927 34.5575 13.3259 34.466 11.3223C34.3814 9.46891 34.0722 8.46364 33.8114 7.79345C33.4659 6.90736 33.0565 6.27346 32.3915 5.60846C31.7782 4.97812 31.0317 4.493 30.2065 4.18864C29.5364 3.92782 28.5311 3.61864 26.6777 3.534ZM16.5732 24.8572C17.9285 25.4214 19.4377 25.4975 20.8429 25.0726C22.2481 24.6477 23.4622 23.7481 24.2779 22.5275C25.0935 21.3069 25.4601 19.841 25.315 18.3801C25.1699 16.9192 24.5221 15.554 23.4823 14.5177C22.8194 13.8553 22.0179 13.348 21.1355 13.0325C20.2531 12.717 19.3116 12.6011 18.379 12.6931C17.4464 12.785 16.5458 13.0827 15.742 13.5645C14.9382 14.0463 14.2513 14.7004 13.7306 15.4796C13.2099 16.2587 12.8685 17.1437 12.7309 18.0707C12.5933 18.9976 12.6629 19.9436 12.9348 20.8404C13.2066 21.7373 13.6739 22.5627 14.3031 23.2572C14.9322 23.9518 15.7075 24.4982 16.5732 24.8572ZM12.0944 12.0944C13.0012 11.1875 14.0778 10.4681 15.2627 9.97735C16.4476 9.48656 17.7175 9.23396 19 9.23396C20.2825 9.23396 21.5524 9.48656 22.7373 9.97735C23.9222 10.4681 24.9988 11.1875 25.9056 12.0944C26.8125 13.0012 27.5319 14.0778 28.0226 15.2627C28.5134 16.4476 28.766 17.7175 28.766 19C28.766 20.2825 28.5134 21.5524 28.0226 22.7373C27.5319 23.9222 26.8125 24.9988 25.9056 25.9056C24.0741 27.7371 21.5901 28.766 19 28.766C16.4099 28.766 13.9259 27.7371 12.0944 25.9056C10.2629 24.0741 9.23396 21.5901 9.23396 19C9.23396 16.4099 10.2629 13.9259 12.0944 12.0944ZM30.932 10.6884C31.1567 10.4764 31.3366 10.2214 31.4611 9.93868C31.5855 9.65592 31.6519 9.35106 31.6564 9.04215C31.661 8.73325 31.6034 8.42658 31.4873 8.14031C31.3711 7.85403 31.1987 7.59397 30.9803 7.37552C30.7618 7.15707 30.5018 6.98467 30.2155 6.86853C29.9292 6.75239 29.6226 6.69487 29.3137 6.69937C29.0048 6.70387 28.6999 6.77031 28.4171 6.89475C28.1344 7.01919 27.8794 7.19909 27.6675 7.42382C27.2552 7.86087 27.0295 8.44139 27.0382 9.04215C27.047 9.64291 27.2895 10.2166 27.7144 10.6415C28.1392 11.0663 28.7129 11.3088 29.3137 11.3176C29.9144 11.3264 30.495 11.1006 30.932 10.6884Z"
                fill={color}
            />
        </svg>
    )
}
