import React from 'react';
import './TestSuite.css';
import TestSuiteDetails from "./TestSuiteDetails";


class TestSuite extends React.Component{
    state = {
        collapsed: true
    };

    getClassName() {
        return 'test-suite';
    }

    render() {
        return (
            <tbody className={`${this.getClassName()} ${this.state.collapsed ? 'collapsed' : 'expanded'}`}>
                <tr className={'test-suite-overview'}
                    onClick={(evt) => {
                        this.setState({collapsed: !this.state.collapsed})
                    }}
                >
                    <td className={'test-name'}>
                        <span className="arrow"></span> {this.props.name}
                    </td>
                    <td className={'test-elapsed-time'}>
                        {Math.round(this.props.elapsedTime * 100) / 100} s
                    </td>
                    <td className={`test-failures ${this.props.failures > 0 ? 'color-failure' : 'color-success'}`}>
                        {this.props.failures}
                    </td>
                    <td className={`test-errors ${this.props.errors > 0 ? 'color-failure' : 'color-success'}`}>
                        {this.props.errors}
                    </td>
                    <td className={`test-skipped ${this.props.skipped > 0 ? 'color-skip' : 'color-success'}`}>
                        {this.props.skipped}
                    </td>
                    <td className={`test-count`}>
                        {this.props.numberOfTests}
                    </td>
                </tr>
                <tr className="expanded-details">
                    <td colSpan={6}>
                        <TestSuiteDetails data={this.props.tests}/>
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default TestSuite;
