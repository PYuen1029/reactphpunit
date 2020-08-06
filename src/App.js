import React, {useState} from 'react';
import './App.css';
import TopContainer from "./components/TopContainer/TopContainer";
import MainContent from "./components/MainContent/MainContent";
import FileInput from "./components/FileInput/FileInput";
import PhpUnitXmlParser from "./util/PhpUnitXmlParser";

const App = () => {
    let [fileId, setFileId] = useState(0);
    let [fileData, setFileData] = useState({});

    const getClassName = () => 'App';

    let getTestResultData = async (file) => {
        fileId = fileId + 1;
        setFileId(fileId + 1);
        const parser = new PhpUnitXmlParser();
        let parsedData = await parser.parse(file)

        setFileData(parsedData);

    }

    return (
        <div className={getClassName()}>

            <FileInput
                sendFile={getTestResultData.bind(this)}
            />

            {Object.keys(fileData).length !== 0 && <TopContainer key={fileId} data={fileData.topLevelData}/>}
            {Object.keys(fileData).length !== 0 && <MainContent key={fileId + 1} testName={fileData.fileName} data={fileData.mainContentData}/>}

        </div>
    );
}

export default App;
