import React from 'react'
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'

export const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
        },
    },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June']

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [14, 30, 9, 15, 6, 10],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
}

export const LineChart = () => {
    Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

    return <Line data={data} options={options} />
}
