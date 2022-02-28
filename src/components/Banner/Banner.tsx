import Image from 'next/image'
import { FC } from 'react'

type BannerProps = {
    src: string
    srcMobile?: string
    alt?: string
}

export const Banner: FC<BannerProps> = ({ children, src, srcMobile, alt }) => {
    return (
        <div className="relative">
            <div className="h-96 w-full overflow-hidden">
                <div className="hidden md:block">
                    <Image src={src} alt={alt} layout="fill" objectFit="cover" quality={100} />
                </div>
                <div className="block md:hidden">
                    <Image src={srcMobile ? srcMobile : src} alt={alt} layout="fill" objectFit="cover" quality={100} />
                </div>

                <div className="absolute z-10 h-full w-full">{children}</div>
            </div>
        </div>
    )
}
