import React from 'react'
import { NextImage as Image } from '../Image'

import { GeneratedTwoFASecret } from '../../interfaces/auth'

const QRCodeComponent = ({ QR_image }: GeneratedTwoFASecret): JSX.Element => {
    const url = `data:image/svg+xml;utf8,${encodeURIComponent(QR_image)}`

    return <Image src={url} alt="qrcode" height={150} width={150} />
}

export const QRCode = React.memo(QRCodeComponent)
