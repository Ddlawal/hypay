import React, { FC } from 'react'
import Image, { ImageProps } from 'next/image'

const customLoader = ({ src }: { src: string }) => {
    return src
}

export const NextImage: FC<ImageProps> = (props) => {
    return <Image {...props} alt={props.alt} loader={customLoader} />
}
