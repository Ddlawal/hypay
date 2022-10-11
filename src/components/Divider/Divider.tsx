import cx from 'classnames'
import React, { FunctionComponent } from 'react'

export const Divider: FunctionComponent<{
    className?: string
    height?: string
    orientation?: 'vertical' | 'horizontal'
    width?: string
}> = ({ className, orientation = 'horizontal', height = 'h-full', width = 'w-full' }) => {
    return (
        <hr
            className={cx(
                className,
                'm-0 h-4 border-hypay-iconGray',
                orientation === 'vertical' ? `${height} border-r-[0.5px]` : `${width} border-t-[0.5px]`
            )}
        />
    )
}
