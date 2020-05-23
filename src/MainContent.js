import React from 'react';
import CollapsibleTestSuite from "./CollapsibleTestSuite";
import './MainContent.css';


const MainContent = props => {
    const getClassName = () => 'main-content';

//    const useTopLevelDataState = () => {
//        console.group("DEBUG: Line 10");
//        console.dir(props.data);
//        console.groupEnd();
//
//        return props.data;
//    }
//
//    let {
//        tests,
//        assertions,
//        time,
//        failures,
//        errors,
//        skipped,
//    } = useTopLevelDataState();

    return (
        <div className={getClassName()}>
            <CollapsibleTestSuite />
        </div>
    )
}

export default MainContent;
