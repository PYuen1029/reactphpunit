import React, {useState} from 'react';
import NumberStat from './NumberStat.js';
import logo from './logo.svg';
import './App.css';
import TopContainer from "./TopContainer";
import MainContent from "./MainContent";
import FileInput from "./FileInput";
import PhpUnitXmlParser from "./util/PhpUnitXmlParser";

const mockData = {
    topLevelData: {
        tests: 55,
        assertions: 122,
        failures: 15,
        errors: 10,
    }
}

const App = () => {
    let [fileId, setFileId] = useState(0);
    let [fileData, setFileData] = useState({});

    let getFile = (file) => {
        // update data state
//        let data = PhpUnitXmlParser.parse(file);
        fileId = fileId + 1;
        setFileId(fileId + 1);
        const parser = new PhpUnitXmlParser();
        let parsedData = parser.parse(file)
        
        console.group("DEBUG: Line 31");
        console.dir(parsedData);
        console.groupEnd();
        setFileData(parsedData);

    }

    return (
        <div className="App">

            <FileInput
                sendFile={getFile.bind(this)}
            />

            {Object.keys(fileData).length !== 0 && <TopContainer key={fileId} data={mockData.topLevelData}/>}
            {Object.keys(fileData).length !== 0 && <MainContent key={fileId + 1} data={mockData.topLevelData}/>}

        </div>
    );
}

export default App;
