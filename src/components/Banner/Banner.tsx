import React, { FC, ReactNode } from 'react'
import cx from 'classnames'
import Image from 'next/image'

type BannerProps = {
    src: string
    children?: ReactNode
    className?: string
    srcMobile?: string
    height?: number
    alt?: string
}

export const Banner: FC<BannerProps> = ({ children, src, srcMobile, alt, className }) => {
    return (
        <div className="relative">
            <div className={cx(className, 'h-96 w-full overflow-hidden')}>
                <div className="hidden md:block">
                    <Image src={src} alt={alt} layout="fill" objectFit="cover" quality={100} />
                </div>
                <div className="block  md:hidden">
                    <Image src={srcMobile ? srcMobile : src} alt={alt} layout="fill" objectFit="cover" quality={100} />
                </div>

                <div className="absolute z-10 h-full w-full">{children}</div>
            </div>
        </div>
    )
}
