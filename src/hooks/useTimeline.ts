import { TimelineProps } from '../components/Timeline/Timeline'

const DEFAULT_EVENT_SIZE = 30
const DEFAULT_LABEL_TEXT_HEIGHT = 20
const DEFAULT_LABEL_TEXT_WIDTH = 100

export const useTimeline = ({ 
    children,
    gap = 50,
    clipped = true,
    orientation = 'horizontal',
    activeIndex = 0,
    thickness = 4,
    progressBarBackground,
    progressBarForeground,
}: TimelineProps) => {
    const eventSize = children[0].props.eventSize ?? DEFAULT_EVENT_SIZE
    const labelTextHeight = children[0].props.labelTextHeight ?? DEFAULT_LABEL_TEXT_HEIGHT
    const labelTextWidth = children[0].props.labelTextWidth ?? DEFAULT_LABEL_TEXT_WIDTH
    const adjustment = eventSize / 2 - thickness / 2
    const progress = (clipped ? 0 : gap + eventSize) + adjustment + (gap + eventSize) * activeIndex + 'px'
    const progressBar = (clipped ? 0 : gap + eventSize) + adjustment + (gap + eventSize) * (children.length - 1) + 'px'
    const timelineSize = eventSize + thickness + (gap + eventSize) * (children.length - 1) + 'px'
    const top = orientation === 'horizontal' ? `${adjustment}px` : clipped ? 0 : -((gap + eventSize / 2) / 2)
    const left = orientation === 'horizontal' ? (clipped ? 0 : -((gap + eventSize / 2) / 2)) : `${adjustment}px`
    const height = orientation === 'horizontal' ? `${eventSize + labelTextHeight}px` : timelineSize
    const width = orientation === 'horizontal' ? timelineSize : `${eventSize + labelTextWidth}px`
    const flexDirection: 'row' | 'column' = orientation === 'horizontal' ? 'row' : 'column'

    return {
        eventWrapperStyle: { gap: `${gap}px`, flexDirection },
        gap,
        progressBarBgStyle: {
            width: orientation === 'horizontal' ? progressBar : `${thickness}px`,
            height: orientation === 'horizontal' ? `${thickness}px` : progressBar,
            top,
            left,
            backgroundColor: progressBarBackground,
        },
        progressBarFgStyle: {
            width: orientation === 'horizontal' ? progress : '4.5px',
            height: orientation === 'horizontal' ? '4.5px' : progress,
            top,
            left,
            backgroundColor: progressBarForeground,
        },
        timelineStyle: { height, width },
    }
}
