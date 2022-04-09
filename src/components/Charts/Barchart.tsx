import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { COLORS } from '../../lib/constants/colors'

const data = [
    {
        name: 'Entries',
        tv: 20,
        pv: 40,
    },
    {
        name: 'Outputs',
        rv: 20,
        uv: 28,
    },
]

export const Barchart = ({ chartData }: { chartData?: any }) => {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart
                width={730}
                height={250}
                data={chartData ?? data}
                margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" fill={COLORS.PINK} />
                <Bar dataKey="tv" fill={COLORS.GREY} />
                <Bar dataKey="uv" fill={COLORS.YELLOW} />
                <Bar dataKey="rv" fill={COLORS.GREY} />
            </BarChart>
        </ResponsiveContainer>
    )
}
