import { Timeline, TimelineEvent } from '../../components/Timeline'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { COLORS } from '../../lib/constants/colors'

export default {
    title: 'Pages/Timeline',
    component: Timeline,
    argTypes: {
        clipped: {
            description: 'Show progress bar beyond events',
            options: [true, false],
            control: { type: 'radio' },
        },
        orientation: {
            description: 'Orientation of the timeline',
            options: ['horizontal', 'vertical'],
            control: { type: 'radio' },
        },
        activeIndex: {
            description: 'Timeline index',
            control: { type: 'number', min: 0 },
        },
        gap: {
            description: 'Gap between events',
            control: { type: 'number', min: 0, step: 5 },
        },
        progressBarBackground: {
            description: 'Color of the progress bar background',
            control: { type: 'color' },
        },
        progressBarForeground: {
            description: 'Color of the progress bar foreground',
            control: { type: 'color' },
        },
    },
} as ComponentMeta<typeof Timeline>

const Template: ComponentStory<typeof Timeline> = (args) => (
    <div className="pl-16">
        <Timeline {...args}>
            <TimelineEvent border={`3px solid ${COLORS.PINK}`} bgColor={COLORS.PINK}>
                H
            </TimelineEvent>
            <TimelineEvent border={`3px solid ${COLORS.PINK}`} bgColor={COLORS.PINK}>
                H
            </TimelineEvent>
            <TimelineEvent border={`3px solid ${COLORS.PINK}`} bgColor={COLORS.PINK}>
                H
            </TimelineEvent>
            <TimelineEvent border={`3px solid ${COLORS.PINK}`} bgColor={COLORS.PINK}>
                H
            </TimelineEvent>
            <TimelineEvent border={`3px solid ${COLORS.PINK}`} bgColor={COLORS.PINK}>
                H
            </TimelineEvent>
        </Timeline>
    </div>
)

export const Basic = Template.bind({})
Basic.args = {
    clipped: true,
    orientation: 'horizontal',
    activeIndex: 2,
    gap: 50,
    progressBarBackground: 'gray',
    progressBarForeground: 'green',
}
