import React from 'react';
import './GraphStat.css';

import {Doughnut} from 'react-chartjs-2';

const GraphStat = (props) => {
    const getData = () => {
        const getSuccesses = () => {
            return props.testCount - (props.errors + props.failures);
        }

        return {
            labels: [
                'Errors',
                'Failures',
                'Successes'
            ],
            datasets: [{
                data: [props.errors, props.failures, getSuccesses()],
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
    }

    return (
        <div className="graph-stat stat-item">
            <Doughnut data={getData()}
                      width="400px"
                      height="200px"
            />
        </div>
    )
}

export default GraphStat;
