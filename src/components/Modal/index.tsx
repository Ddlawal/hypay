import React, { FC, ReactNode } from 'react'
import cx from 'classnames'

import { Card } from '../Card'
import { useOnClickOutside } from '../../hooks/useOnClickOutSide'

type ModalProps = { children: ReactNode; modalClass: string; open: boolean; onClose: () => void }

export const Modal: FC<ModalProps> = ({ children, modalClass, open, onClose }) => {
    const { ref } = useOnClickOutside<HTMLDivElement>(onClose)

    if (!open) {
        return null
    }

    return (
        <div className="absolute top-0 z-50 flex h-screen w-screen items-center justify-center overflow-y-scroll bg-[rgba(0,0,0,0.7)]">
            <div ref={ref} className="flex w-full justify-center">
                <Card className={cx(modalClass, 'w-10/12 md:w-2/6')} rounded elevation="xl">
                    {children}
                </Card>
            </div>
        </div>
    )
}
