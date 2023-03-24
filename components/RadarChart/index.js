import { useState, useEffect } from 'react';
import styles from './RadarChart.module.css';

import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function RadarChart(){

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Vigor", "Dexterity", "Endurance", "Strength", "Mind", "Intelligence", "Faith", "Arcane"],
            datasets: [
                {
                    label: 'Attribute Points',
                    data: [50, 45, 35, 50, 15, 9, 26 ,9 ],
                    borderColor: 'rgb(255,0,0)',
                    backgroundColor: 'rgba(255,0,0,0.4)'
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
                    text: "Character Stats"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
        <>
        <div className={styles.container}>
            <Radar data={chartData} options={chartOptions}/>
        </div>
        </>
    )
}