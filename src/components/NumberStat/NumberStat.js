import React from 'react';
import './NumberStat.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faClock,
    faCoffee,
    faLightbulb,
    faFlask,
    faExclamationTriangle,
    faUserClock,
    faCheckCircle,
    faExclamation,
    faBan
} from "@fortawesome/free-solid-svg-icons";

function mapIcon(icon) {
    return undefined;
}

const NumberStat = (props) => {
    const getClassName = () => 'number-stat';
    const iconMap = {
        "clock": faClock,
        "coffee": faCoffee,
        "lightbulb": faLightbulb,
        "flask": faFlask,
        "exclamation-triangle": faExclamationTriangle,
        "check-circle": faCheckCircle,
        "exclamation-circle": faExclamation,
        "ban": faBan
    }

    const getName = () => {
        return props.name.toUpperCase()
    }

    const getValue = () => {
        return props.value;
    }

    const mapIcon = (icon) => {
        return iconMap[icon];
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
                <div className="number-stat-title"
                     style={{color: numberColors[props.componentIdx % 6]}}>{getName()}</div>
                <div className="number-stat-value">{getValue()}</div>
            </div>
            <div className="number-stat-icon">
                <FontAwesomeIcon icon={mapIcon(props.icon)}/>
            </div>
        </div>
    )
}

export default NumberStat;
