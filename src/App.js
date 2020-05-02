import React from 'react';
import NumberStat from './NumberStat.js';
import logo from './logo.svg';
import './App.css';
import TopContainer from "./TopContainer";
import MainContent from "./MainContent";

const mockData = {
    topLevelData: {
        tests: 55,
        assertions: 122,
        failures: 15,
        errors: 10,
    }
}

function App() {
    return (
        <div className="App">
            {/* render top-container */}
            <TopContainer data={mockData.topLevelData}/>

            {/* render main-content*/}
            <MainContent/>
            {/* render Collapsible Tests Wrapper component */}


        </div>
    );
}

export default App;
