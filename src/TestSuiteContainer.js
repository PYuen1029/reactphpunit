import React from 'react';
import './TestSuiteContainer.css';
import TestSuite from "./TestSuite";

const TestSuiteContainer = (props) => {
    const getClassName = () => 'test-suite-container';

    return (
        <div className={getClassName()}>
            {/*// @todo: @pyuen, dynamic data please*/}
            <h2>{props.testName}</h2>
            <table>
                <thead>
                <tr>
                    <th>Test Name</th>
                    <th>Elapsed Time</th>
                    <th>Failures</th>
                    <th>Errors</th>
                    <th>Skipped</th>
                </tr>
                </thead>
                <tbody>
                    {props.testData.map((data,idx) => <TestSuite componentIdx={idx} key={idx} {...data} />)}
                </tbody>
            </table>
        </div>
    )
}

export default TestSuiteContainer;
