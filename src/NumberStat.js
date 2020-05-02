import React from 'react';
import './NumberStat.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

const NumberStat = (props) => {
    const getName = () => {
        return props.name.toUpperCase()
    }

    const getValue = () => {
        return props.value;
    }

    return (
        <div className="number-stat stat-item">
            <div className="number-stat-details">
                <div className="number-stat-title">{getName()}</div>
                <div className="number-stat-value">{getValue()}</div>
            </div>
            <div className="number-stat-icon">
                <FontAwesomeIcon icon={props.icon}/>
            </div>
        </div>
    )
}

export default NumberStat;
