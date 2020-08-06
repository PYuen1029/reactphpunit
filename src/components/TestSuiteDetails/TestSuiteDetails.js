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
            '#1cc88a',
            '#6ADFB6',
            '#3FD29E',
            '#00C07C',
            '#008A59',
        ]

        let index = 0;

        for (let test of testData) {
            let attributes = test.attributes,
                testDataColor = testDataColors[index % testDataColors.length];

            let outputMessage = '';

            for (let child of test.children) {
                outputMessage += child.outerHTML.trim() + '\n';

                if (child.tagName === 'error' || child.tagName === 'failure') {
                    testDataColor = '#FF6384';
                }

                if (child.tagName === 'skipped') {
                    testDataColor = '#FFCE56';
                }
            }



            returnTests.push(
                <div className="test-suite-details stat-item" style={{ borderLeft: '.25rem solid ' + testDataColor }} key={index}>
                    <div className="test-suite-details-header">
                        <h4 style={{ color: testDataColor }}> NAME: {getTestValue(attributes, 'name')} </h4>
                    </div>
                    <ul className="test-suite-details-body">
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
                            <b> File: </b> {getTestValue(attributes,'file')}
                        </li>
                        { outputMessage !== '' &&
                        <li>
                            <b> Output: </b> <pre> {outputMessage} </pre>
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
