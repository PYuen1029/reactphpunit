import React from 'react';
import NumberStat from "./NumberStat";
import GraphStat from "./GraphStat";

import './TopContainer.css';

function TopContainer() {
    return (
        <div className="top-container">
            {/* render simple number stat component for Tests count */}
            <NumberStat />

            {/* render simple number stat component for Assertions count */}
            <NumberStat />

            {/* render results graph component for Test Results breakdown of success/fail */}
            <GraphStat />

        </div>
    )
}

export default TopContainer;
