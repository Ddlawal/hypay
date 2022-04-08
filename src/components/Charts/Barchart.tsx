import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { COLORS } from '../../lib/constants/colors'

const data = [
    {
        date: '2000-01',
        tv: 20,
        pv: 40,
    },
    {
        date: '2000-02',
        rv: 20,
        uv: 28,
    },
]

export const Barchart = () => {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart width={730} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill={COLORS.PINK} />
                <Bar dataKey="tv" fill={COLORS.GREY} />
                <Bar dataKey="uv" fill={COLORS.YELLOW} />
                <Bar dataKey="rv" fill={COLORS.GREY} />
            </BarChart>
        </ResponsiveContainer>
    )
}
