import { CloseIcon, LoaderIcon } from '../Icons'

import React, { FC, ReactNode } from 'react'
import cx from 'classnames'

import { Card } from '../Card'
import { useOnClickOutside } from '../../hooks/useOnClickOutSide'
import { Button } from '../Button'
import { COLORS } from '../../lib/constants/colors'

type ModalProps = {
    isOpen: boolean
    dismissable?: boolean
    showDismissButton?: boolean
    withoutPadding?: boolean
    isDialog?: boolean
    isLoading?: boolean
    children?: ReactNode
    labelledby?: string
    modalClass?: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    onDismiss: () => void
    onProceed?: () => void
}

type ModalHeadingProps = {
    className?: string
    children: React.ReactNode
}

type ModalFooterProps = {
    className?: string
    children?: React.ReactNode
    isLoading?: boolean
    onDismiss?: () => void
    onProceed?: () => void
}

export const ModalFooter: FC<ModalFooterProps> = ({
    className,
    children,
    isLoading,
    onDismiss,
    onProceed,
    ...props
}) => {
    return (
        <footer id="modal-footer" className={cx('p-3', className)} {...props}>
            {children ? (
                children
            ) : (
                <div className="flex items-center justify-end gap-4">
                    <Button
                        onClick={onDismiss ? onDismiss : () => null}
                        className="hover:bg-hypay-light-gray"
                        padding="px-6 py-2"
                    >
                        Dismiss
                    </Button>
                    <Button
                        primary
                        size="md"
                        className="flex h-10 w-[10rem] items-center justify-center"
                        padding="px-6 py-2"
                        onClick={onProceed ? onProceed : () => null}
                    >
                        {isLoading ? <LoaderIcon color={COLORS.WHITE} size={30} /> : 'Proceed'}
                    </Button>
                </div>
            )}
        </footer>
    )
}

export const ModalHeading: FC<ModalHeadingProps> = ({ className, children, ...props }) => {
    return (
        <h2 id="modal-heading" className={cx('mb-8 pr-3 text-2xl sm:pr-4 md:pr-5 lg:pr-6', className)} {...props}>
            {children}
        </h2>
    )
}

export const Modal: FC<ModalProps> = ({
    isOpen,
    dismissable,
    showDismissButton,
    isDialog,
    isLoading,
    children,
    labelledby = 'modal-heading',
    modalClass,
    withoutPadding,
    size = 'sm',
    onDismiss,
    onProceed,
}): JSX.Element => {
    const { ref } = useOnClickOutside<HTMLDivElement>(dismissable ? onDismiss : () => null)

    return (
        <>
            {isOpen ? (
                <div className="fixed inset-0 z-50 flex max-h-full min-h-screen items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur backdrop-brightness-100">
                    <div ref={ref}>
                        <Card
                            className={cx(
                                'relative w-full rounded bg-white',
                                size === 'xs' && 'max-w-sm',
                                size === 'sm' && 'max-w-md',
                                size === 'md' && 'max-w-xl',
                                size === 'lg' && 'max-w-2xl',
                                size === 'xl' && 'max-w-4xl',
                                withoutPadding ? '' : 'p-3 sm:p-4 md:p-5 lg:p-6',
                                modalClass
                            )}
                            rounded
                            elevation="xl"
                            aria-labelledby={labelledby}
                        >
                            {showDismissButton && dismissable ? (
                                <div className="absolute right-3 top-4 sm:right-4 sm:top-5 md:right-5 md:top-6 lg:right-6 lg:top-7">
                                    <button
                                        className={cx('cursor-pointer rounded-full bg-gray-100 p-1 text-gray-600')}
                                        onClick={onDismiss}
                                    >
                                        <CloseIcon />
                                    </button>
                                </div>
                            ) : null}
                            {children}
                            {isDialog ? (
                                <ModalFooter isLoading={isLoading} onDismiss={onDismiss} onProceed={onProceed} />
                            ) : null}
                        </Card>
                    </div>
                </div>
            ) : null}
        </>
    )
}
