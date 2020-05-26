import React from 'react';
import './TestSuiteDetails.css';

const TestSuiteDetails = (props) => {
    const getClassName = () => 'test-suite-details';
    const errorMessage = 'No tests to display.'

    function getTestValue(attributes, property) {
        if (typeof attributes[property] == 'undefined') {
            return 'N/A';
        }

        return attributes[property].value;
    }

    function getTestsHTMLString(testData) {
        let returnTests = [];

        if (testData == null || typeof testData[Symbol.iterator] !== 'function') {
            return errorMessage;
        }

        const testDataColors = [
            '#36A2EB',
            '#1cc88a',
            '#e18d96',
            '#4e73df',
            '#AFF8DB',
            '#FFABAB'
            //        '#f0a35e',
        ]

        let index = 0;

        for (let test of testData) {
            let attributes = test.attributes,
                testDataColor = testDataColors[index % testDataColors.length];

            if (test.hasChildNodes()){
                console.group("DEBUG: Line 40");
                console.dir(test);
                console.groupEnd();
            }

            let errorMessage = test.children[0] != null ? test.children[0].outerHTML : null;

            returnTests.push(
                <div className="test-suite-details stat-item" style={{ borderLeft: '.25rem solid ' + testDataColor }} key={index}>
                    <div className="test-suite-details-header">
                        <h4 style={{ color: testDataColor }}> TestCase </h4>
                    </div>
                    <ul className="test-suite-details-body">
                        <li>
                            <b> Name: </b> {getTestValue(attributes, 'name')}
                        </li>
                        <li>
                            <b> Class: </b> {getTestValue(attributes,'class')}
                        </li>
                        <li>
                            <b> Class Name: </b> {getTestValue(attributes,'className')}
                        </li>
                        <li>
                            <b> Assertions: </b> {getTestValue(attributes,'assertions')}
                        </li>
                        <li>
                            <b> File </b>: {getTestValue(attributes,'file')}
                        </li>
                        { errorMessage != null &&
                        <li>
                            <b> Error message </b>: <pre> {errorMessage} </pre>
                        </li>
                        }
                    </ul>
                </div>
            );

            index++;
        }

        return returnTests;
    }

    let tests = getTestsHTMLString(props.data)

    return (
        <div className={getClassName()}>
            <div className="test-suite-details-wrapper">
                { tests }
            </div>
        </div>
    )
}

export default TestSuiteDetails;
