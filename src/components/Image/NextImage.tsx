import React, { FC } from 'react'
import Image, { ImageLoaderProps, ImageProps } from 'next/image'
import DEFAULT_IMAGE from '../../../public/images/default-image.png'

const customLoader = ({ src, width }: ImageLoaderProps) => {
    return encodeURI(`${src}?w=${width}`)
}

export const NextImage: FC<ImageProps> = (props) => {
    return <Image {...props} alt={props.alt} src={props.src || DEFAULT_IMAGE} loader={customLoader} />
}
