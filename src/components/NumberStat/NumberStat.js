import React from 'react';
import './NumberStat.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

const NumberStat = (props) => {
    const getClassName = () => 'number-stat';

    const getName = () => {
        return props.name.toUpperCase()
    }

    const getValue = () => {
        return props.value;
    }

    const numberColors = [
        '#36A2EB',
        '#1cc88a',
        '#e18d96',
        '#fcf0cf',
        '#ecad8f',
//        '#f0a35e',
    ]
// leftBorderColors[ props.key % 6 ]
    return (
        <div className={`${getClassName()} stat-item`} style={{borderLeftColor: numberColors[props.componentIdx % 6]}}>
            <div className="number-stat-details">
                <div className="number-stat-title" style={{color: numberColors[props.componentIdx % 6]}}>{getName()}</div>
                <div className="number-stat-value">{getValue()}</div>
            </div>
            <div className="number-stat-icon">
                <FontAwesomeIcon icon={props.icon}/>
            </div>
        </div>
    )
}

export default NumberStat;
