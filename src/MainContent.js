import React from 'react';
import TestSuiteContainer from "./TestSuiteContainer";
import './MainContent.css';


const MainContent = (props) => {
    const getClassName = () => 'main-content';

    return (
        <div className={getClassName()}>
            <TestSuiteContainer testName={props.testName} testData={props.data}/>
        </div>
    )
}

export default MainContent;
