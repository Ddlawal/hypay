import React, { useEffect } from 'react'
import JsBarcode, { Options } from 'jsbarcode'
import { useMediaQuery } from '../../hooks/useMediaQuery'

type BarcodeProps = {
    barcodeValue?: string
    options?: Options
}

export const Barcode = ({
    barcodeValue = '1234567891234567891234567891234567891234567891234567',
    options,
}: BarcodeProps): JSX.Element => {
    const isLargeScreen = useMediaQuery('md')

    useEffect(() => {
        JsBarcode('#barcode', barcodeValue, {
            width: 10,
            ean128: true,
            height: 400,
            font: 'Mulish',
            fontSize: isLargeScreen ? 64 : 105,
            textAlign: 'left',
            textMargin: 40,
            marginTop: 100,
            marginBottom: 100,
            ...options,
        })
    }, [barcodeValue, options, isLargeScreen])

    return (
        <div className="w-full bg-black">
            <img id="barcode" />
        </div>
    )
}
