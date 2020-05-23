import React from 'react';
import './CollapsibleTestSuite.css';

function CollapsibleTestSuite() {
    const getClassName = () => 'collapsible-test-suite';

    return (
        <div className={getClassName()}>
            {/*// @todo: @pyuen, dynamic data please*/}
            <h2>2020-03-19-02AM_BranchName_output.xml</h2>
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

                </tbody>
            </table>
        </div>
    )
}

export default CollapsibleTestSuite;
