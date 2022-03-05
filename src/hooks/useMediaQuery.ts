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
    const minWidth = breakpoints[size]
    return useReactResponsive({ minWidth })
}
