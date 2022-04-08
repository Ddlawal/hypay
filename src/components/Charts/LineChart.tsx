import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

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

export const Linechart = () => {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    )
}
