import React from 'react';
import './FileInput.css'

const FileInput = (props) => {
    let handleChange = (file) => {
        props.sendFile(file);
    }

    const getClassName = () => 'file-input';


    return (
        <div className={getClassName()}>
            <label htmlFor="phpunitXmlInput">Select PHPUnit XML report:</label>
            <input type="file" id="phpunitXmlInput" onChange={e => handleChange(e.target.files[0])}/>
        </div>
    )
}

export default FileInput;
