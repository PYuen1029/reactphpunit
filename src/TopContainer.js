import React from 'react';
import NumberStat from "./NumberStat";
import GraphStat from "./GraphStat";

import './TopContainer.css';
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";

const TopContainer = props => {
    const useTopLevelDataState = () => {
        return props.data;
    }

    let {
        tests,
        assertions,
        failures,
        errors,
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
    ]

    let graphStatElements = [
        {
            name: "results",
            failures: failures,
            errors: errors,
            testCount: tests,
        }
    ]

    return (
        <div className="top-container">
            {/* render number stat components */}
            {numberStatElements.map((data,idx) => <NumberStat key={idx} {...data} />)}


            {/* render results graph component for Test Results breakdown of success/fail */}
            {graphStatElements.map((data,idx) => <GraphStat key={idx} {...data} />)}

        </div>
    )
}

export default TopContainer;
