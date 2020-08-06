import React from 'react';
import NumberStat from "../NumberStat/NumberStat";
import GraphStat from "../GraphStat/GraphStat";

import './TopContainer.css';
import {faLightbulb, faClock, faCoffee} from "@fortawesome/free-solid-svg-icons";

const TopContainer = props => {
    const getClassName = () => 'top-container';

    const useTopLevelDataState = () => {
        return props.data;
    }

    let {
        tests,
        assertions,
        time,
        failures,
        errors,
        skipped,
    } = useTopLevelDataState();

    let numberStatElements = [
        {
            name: "tests",
            value: tests,
            icon: faCoffee
        },
        {
            name: "assertions",
            value: assertions,
            icon: faLightbulb
        },
        {
            name: "elapsed time",
            value: time,
            icon: faClock
        },
    ]

    let graphStatElements = [
        {
            name: "results",
            failures: failures,
            errors: errors,
            testCount: tests,
            skipped: skipped,
        }
    ]

    return (
        <div className={getClassName()}>
            {numberStatElements.map((data,idx) => <NumberStat componentIdx={idx} key={idx} {...data} />)}
            {graphStatElements.map((data,idx) => <GraphStat key={idx} {...data} />)}
        </div>
    )
}

export default TopContainer;
