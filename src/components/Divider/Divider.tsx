import cx from 'classnames'
import React, { FunctionComponent } from 'react'

export const Divider: FunctionComponent<{
    orientation?: 'vertical' | 'horizontal'
    height?: string
    width?: string
}> = ({ orientation = 'horizontal', height = 'h-full', width = 'w-full' }) => {
    return (
        <hr
            className={cx(
                'm-0 border-hypay-iconGray',
                orientation === 'vertical' ? `rotate-90 ${height} border-r-[0.5px]` : `${width} border-t-[0.5px]`
            )}
        />
    )
}
