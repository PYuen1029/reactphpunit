import React from 'react';
import CollapsibleTestSuite from "./CollapsibleTestSuite";
import './MainContent.css';


function MainContent() {
    const getClassName = () => 'main-content';

    return (
        <div className={getClassName()}>
            <CollapsibleTestSuite />
        </div>
    )
}

export default MainContent;
