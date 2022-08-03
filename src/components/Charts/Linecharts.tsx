import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
    {
        name: 'Jan',
        uv: 22,
        pv: 11,
    },
    {
        name: 'Feb',
        uv: 30,
        pv: 25,
    },
    {
        name: 'Mar',
        uv: 29,
        pv: 19,
    },
    {
        name: 'Apr',
        uv: 26,
        pv: 24,
    },
    {
        name: 'May',
        uv: 35,
        pv: 22,
    },
    {
        name: 'Jun',
        uv: 40,
        pv: 33,
    },
]

type Lines = { dataKey: string; stroke: string }

type LinechartProps = {
    chartData?: any
    lines?: Array<Lines>
}

const chartLines: Array<Lines> = [
    {
        dataKey: 'pv',
        stroke: '#8884d8',
    },
    {
        dataKey: 'uv',
        stroke: '#82ca9d',
    },
]

export const Linechart = ({ chartData = data, lines = chartLines }: LinechartProps) => {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <LineChart width={730} height={250} data={chartData} margin={{ top: 10, right: 10, left: -30, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {lines.map((line, i) => (
                    <Line key={i} type="monotone" {...line} />
                ))}
            </LineChart>
        </ResponsiveContainer>
    )
}
