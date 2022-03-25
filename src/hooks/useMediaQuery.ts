import { useLayoutEffect, useState } from 'react'
import { useMediaQuery as useReactResponsive } from 'react-responsive'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const breakpoints: Record<Size, number> = {
    xs: 0,
    sm: 640,
    md: 760,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
}

export const useMediaQuery = (size: Size): boolean => {
    const [isLarger, setIsLarger] = useState(false)

    const minWidth = breakpoints[size]
    const dt = useReactResponsive({ minWidth })

    useLayoutEffect(() => setIsLarger(dt), [])

    return isLarger
}
