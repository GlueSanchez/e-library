import React from 'react';
import {Doughnut} from "react-chartjs-2";


const TopBooksChart = ({theme}) => {
    console.log(theme)
    const data = {
        labels: ['Рекреації', 'Московіада', 'Мальва Ланда', 'Дванадцять обручів', 'Весняні ігри в осінніх садах', 'Доця'],
        datasets: [
            {
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const option = {
        responsive: true,
        animation: false,
        color: theme.palette.text.primary
    };
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            minHeight: '300px',
            maxHeight: '500px',
            width: '100%'
        }}>
            <Doughnut
                style={{
                    width: '100%',
                    height: '100%'
                }}
                data={data}
                options={option}/>
        </div>
    );
};

export default TopBooksChart;
