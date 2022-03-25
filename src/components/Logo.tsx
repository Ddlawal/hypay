import * as React from 'react'
import classNames from 'classnames'
import { COLORS } from '../lib/constants/colors'
import { LogoIcon } from './Icons'

type LogoProps = {
    children?: never
    className?: string
    labelled?: { labelPosition: 'right' | 'bottom' }
    size?: number
    color?: string
    labelColor?: string
}

export const Logo = ({ className, labelled, size, color = COLORS.PRIMARY, labelColor = COLORS.PRIMARY }: LogoProps) => {
    return (
        <div
            className={classNames(
                className,
                labelled?.labelPosition === 'right' ? 'flex-row' : 'flex-col',
                'inline-flex items-center justify-center gap-1'
            )}
        >
            <LogoIcon color={color} size={size ? size * 1.5 : 32} />
            {!!labelled && (
                <div
                    style={{ fontSize: size ? `${size}px` : '22px' }}
                    // I removed the hidden class on the hypay text for mobile which we might make dynamic later for reusability
                    className={classNames(
                        labelColor ? labelColor : 'text-hypay-primary',
                        ' text-lg font-bold leading-7 tracking-wider  md:block'
                    )}
                >
                    hypay
                </div>
            )}
        </div>
    )
}
