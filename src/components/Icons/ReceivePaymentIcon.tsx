import { IconProps } from '../../interfaces/icons'
import { COLORS } from '../../lib/constants/colors'

export const ReceivePaymentIcon = ({ size = 18, color = COLORS.BLACK }: IconProps): JSX.Element => {
    return (
        <svg width={size} height={size} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.7169 0.0012415C17.3351 0.0012415 12.9723 2.39612 12.9723 5.35464C12.9723 8.31316 17.3364 10.7093 22.7169 10.7093C28.0987 10.7093 32.4615 8.31316 32.4615 5.35464C32.4615 2.39612 28.0975 0 22.7169 0V0.0012415ZM32.4615 6.94502C32.459 9.90354 28.0987 12.2997 22.7169 12.2997C17.3501 12.2997 12.9972 9.92961 12.9723 6.98474V9.07917C12.9723 10.343 13.7855 11.5001 15.1175 12.4164C16.4645 12.7814 17.6644 13.2879 18.6634 13.9285C19.9019 14.2414 21.2639 14.4326 22.7169 14.4326C28.0987 14.4326 32.4615 12.0377 32.4615 9.07917V6.94502ZM32.4615 10.6695C32.4615 13.6281 28.0987 16.0242 22.7169 16.0242C22.0621 16.0242 21.426 15.9758 20.8074 15.9075C21.2956 16.5619 21.6286 17.3178 21.7815 18.1186C22.092 18.136 22.3989 18.1571 22.7169 18.1571C28.0987 18.1571 32.4615 15.7622 32.4615 12.8037V10.6695ZM10.2446 13.6566C4.86281 13.6566 0.5 16.0527 0.5 19.0113C0.5 21.9698 4.86406 24.3659 10.2446 24.3659C15.6264 24.3659 19.9892 21.9698 19.9892 19.0113C19.9892 16.0527 15.6252 13.6566 10.2446 13.6566ZM32.4615 14.3941C32.459 17.3526 28.0987 19.7487 22.7169 19.7487C22.4039 19.7487 22.0871 19.7264 21.7815 19.709C21.7678 19.8021 21.7603 19.9263 21.7428 20.0194C21.8052 20.2068 21.8588 20.3918 21.8588 20.6029V21.8444C22.1419 21.858 22.4263 21.8816 22.7169 21.8816C28.0987 21.8816 32.4615 19.4868 32.4615 16.5282V14.3941ZM32.4615 18.1186C32.459 21.0771 28.0987 23.4733 22.7169 23.4733C22.4039 23.4733 22.0871 23.4509 21.7815 23.4335C21.7678 23.5266 21.7603 23.6508 21.7428 23.7439C21.8052 23.9301 21.8588 24.1164 21.8588 24.3274V25.5689C22.1419 25.5826 22.4263 25.6062 22.7169 25.6062C28.0987 25.6062 32.4615 23.2113 32.4615 20.2528V18.1186ZM19.9892 20.6016C19.9867 23.5602 15.6264 25.9563 10.2446 25.9563C4.87778 25.9563 0.524945 23.5862 0.5 20.6401V22.7358C0.5 25.6943 4.86156 28.0904 10.2446 28.0904C15.6277 28.0904 19.9892 25.6943 19.9892 22.7358V20.6016ZM19.9892 24.3262C19.9867 27.2847 15.6264 29.6808 10.2446 29.6808C4.87778 29.6808 0.524945 27.3108 0.5 24.3647V26.4603C0.5 29.4189 4.86156 31.815 10.2446 31.815C15.6277 31.815 19.9892 29.4189 19.9892 26.4603V24.3262Z"
                fill={color}
            />
        </svg>
    )
}
