import React from 'react';
import NumberStat from './NumberStat.js';
import logo from './logo.svg';
import './App.css';
import TopContainer from "./TopContainer";
import MainContent from "./MainContent";

function App() {
    return (
        <div className="App">
            {/* render top-container */}
            <TopContainer/>

            {/* render main-content*/}
            <MainContent/>
            {/* render Collapsible Tests Wrapper component */}


        </div>
    );
}

export default App;
