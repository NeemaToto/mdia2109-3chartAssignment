import { useState, useEffect } from 'react';
import styles from './PieChart.module.css';

import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
     ArcElement, 
     Tooltip,
     Legend
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export default function PieChart(){

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
            datasets: [
                {
                    label: '$CAD Sales',
                    data: [7000, 12500, 11532, 16775, 21400, 30143, 15460],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
        <>
        <div className={styles.container}>
            <Pie data={chartData} options={chartOptions}/>
        </div>
        </>
    )
}