import { MutableRefObject, useCallback, useEffect, useRef } from 'react'

export const useOnClickOutside = <T extends HTMLDivElement | HTMLButtonElement>(handler: () => void) => {
    const cb = useCallback(handler, [])
    const ref = useRef() as MutableRefObject<T>

    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }
            cb()
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [handler])
    return { ref }
}