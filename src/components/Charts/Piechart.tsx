import React from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { COLORS } from '../../lib/constants/colors'

const data01 = [{ name: 'Group B', value: 300 }]
const data02 = [{ name: 'A2', value: 300 }]

const RADIAN = Math.PI / 180
const getLabel = (perc: number) => {
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent = perc,
    }: {
        cx: number
        cy: number
        midAngle: number
        innerRadius: number
        outerRadius: number
        percent: number
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
        const x = cx + radius * Math.cos(-midAngle * RADIAN)
        const y = cy + radius * Math.sin(-midAngle * RADIAN)
        percent = perc

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                className="text-xs text-hypay-light-gray"
                dominantBaseline="central"
            >
                {`${percent}%`}
            </text>
        )
    }
    return renderCustomizedLabel
}
export const Piechart = () => {
    const isLarge = useMediaQuery('lg')
    const isMedium = useMediaQuery('md')
    const radius = (() => {
        if (isMedium) {
            if (!isLarge) {
                return { a: 60, b: 70 }
            } else {
                return { a: 80, b: 100 }
            }
        } else {
            return { a: 100, b: 120 }
        }
    })()
    return (
        <ResponsiveContainer width="100%" height={250}>
            <PieChart width={730} height={250} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <Pie
                    data={data01}
                    startAngle={50}
                    endAngle={360}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={radius.a}
                    fill={COLORS.SECONDARY}
                    paddingAngle={5}
                    labelLine={false}
                    label={getLabel(86)}
                />
                <Pie
                    data={data02}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    startAngle={0}
                    endAngle={50}
                    outerRadius={radius.b}
                    fill={COLORS.PINK}
                    paddingAngle={5}
                    labelLine={false}
                    label={getLabel(14)}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}
