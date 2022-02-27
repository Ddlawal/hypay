import Image from 'next/image'
import { FC } from 'react'

type BannerProps = {
    src: string
    alt?: string
}

export const Banner: FC<BannerProps> = ({ children, src, alt }) => {
    return (
        <div className="relative">
            <div className="h-96 w-full overflow-hidden">
                <Image src={src} alt={alt} layout="fill" objectFit="cover" quality={100} />
                <div className="absolute z-10 h-full w-full">{children}</div>
            </div>
        </div>
    )
}
