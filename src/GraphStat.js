import React from 'react';
import './GraphStat.css';

import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

function GraphStat() {
    return (
        <div className="graph-stat stat-item">
            <Doughnut data={data} />
        </div>
    )
}

export default GraphStat;
