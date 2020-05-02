import React from 'react';
import './NumberStat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function NumberStat() {
    return (
        <div className="number-stat stat-item">
            <div className="number-stat-details">
                <div className="number-stat-title">Tests</div>
                <div className="number-stat-value">55</div>
            </div>
            <div className="number-stat-icon">
                <FontAwesomeIcon icon={faCoffee} />
            </div>
        </div>
    )
}

export default NumberStat;
