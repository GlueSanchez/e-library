import React, {useEffect} from 'react';
import {Line} from "react-chartjs-2";


const NewUsersChart = ({theme}) => {
    const option = {
        responsive: true,
        animation: false,
        // color: theme.palette.text.primary,
        // fontColor: 'green', fontSize: 40
        scales: {
            x: {
                ticks: {
                    color: theme.palette.text.primary,
                },
                grid: {
                    color: theme.palette.text.hint
                }
            },
            y: {
                ticks: {
                    color: theme.palette.text.primary,
                },
                grid: {
                    color: theme.palette.text.hint
                }
            },
        }
    };
    const data = {
        labels: ['Січень', 'Лютий', 'Березень',
            'Квітень', 'Травень'],
        datasets: [
            {
                label: 'Нові користувачі',
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 3,
                pointRadius: 5,
                data: [65, 59, 80, 81, 56],
            }
        ],

    };
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            minHeight: '300px',
            maxHeight: '500px',
            width: '100%'
        }}>
            <Line style={{
                width: '100%',
                height: '100%',
            }}
                  data={data}
                  options={option}/>
        </div>);
};

export default NewUsersChart;
