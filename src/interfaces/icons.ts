import { MouseEventHandler } from 'react'

export type IconProps = {
    size?: number
    color?: string
    onClick?: MouseEventHandler<SVGSVGElement>
    className?: string
}
