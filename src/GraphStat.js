import React from 'react';
import './GraphStat.css';

import {Doughnut} from 'react-chartjs-2';

const GraphStat = (props) => {
    const getClassName = () => 'graph-stat';

    const getData = () => {
        const getSuccesses = () => {
            return props.testCount - (parseInt(props.errors) + parseInt(props.failures) + parseInt(props.skipped));
        }

        const labels = [
            'Errors',
            'Failures',
            'Successes',
            'Skipped',
        ]

        const colors = [
            '#FF6384',
            '#ff8400',
            '#1cc88a',
            '#FFCE56',
        ];

        return {
            labels: labels,
            datasets: [{
                data: [props.errors, props.failures, getSuccesses(), props.skipped],

                backgroundColor: colors,
                hoverBackgroundColor: colors
            }]
        };
    }

    return (
        <div className={`${getClassName()} stat-item`}>
            <Doughnut data={getData()}
                      width={488}
                      height={200}
            />
        </div>
    )
}

export default GraphStat;
