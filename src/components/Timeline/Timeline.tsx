import classNames from 'classnames'
import { FC, ReactElement, ReactNode } from 'react'
import { useTimeline } from '../../hooks/useTimeline'
import { COLORS } from '../../lib/constants/colors'

type TimelineEventProps = {
    children?: ReactNode
    label?: string
    labelTextHeight?: number
    labelTextWidth?: number
    labelFontSize?: number
    color?: string
    bgColor?: string
    border?: string
    eventSize?: number
    isHorizontal?: boolean
}

export type TimelineProps = {
    children: ReactElement<TimelineEventProps>[]
    activeIndex?: number
    gap?: number
    clipped?: boolean
    orientation?: 'horizontal' | 'vertical'
    position?: 'top' | 'right' | 'bottom' | 'left'
    progressBarBackground?: string
    progressBarForeground?: string
    thickness?: number
}

const DEFAULT_LABEL_TEXT_HEIGHT = 20
const DEFAULT_LABEL_TEXT_WIDTH = 100

export const Timeline: FC<TimelineProps> = (props) => {
    const { eventWrapperStyle, progressBarFgStyle, progressBarBgStyle, timelineStyle } = useTimeline(props)

    return (
        <div style={timelineStyle} className={'relative'}>
            <div style={progressBarBgStyle} className="absolute z-0" />
            <div style={progressBarFgStyle} className="absolute z-10" />
            <div style={eventWrapperStyle} className={classNames('absolute z-20 flex')}>
                {props.children}
            </div>
        </div>
    )
}

export const TimelineEvent: FC<TimelineEventProps> = ({
    children,
    bgColor = COLORS.WHITE,
    border = '2px solid white',
    eventSize = 30,
    label,
    labelTextHeight = DEFAULT_LABEL_TEXT_HEIGHT,
    labelTextWidth = DEFAULT_LABEL_TEXT_WIDTH,
    labelFontSize = 12,
    color = 'black',
    isHorizontal = true,
}) => {
    const size = eventSize + 'px'
    return (
        <div
            style={{ height: size, width: size, backgroundColor: bgColor, border }}
            className={classNames('relative flex items-center justify-center rounded-full')}
        >
            {children}
            <p
                style={{
                    height: `${labelTextHeight}px`,
                    width: `${labelTextWidth}px`,
                    bottom: isHorizontal ? `${-labelTextHeight! - 8}px` : '',
                    right: isHorizontal ? '' : `${-labelTextWidth! - 15}px`,
                    fontSize: `${labelFontSize}px`,
                    lineHeight: '14px',
                    color,
                }}
                className={classNames(isHorizontal && 'text-center', 'absolute font-normal')}
            >
                {label}
            </p>
        </div>
    )
}
