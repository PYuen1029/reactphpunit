import React from 'react';
import './FileInput.css'

const FileInput = (props) => {
    // https://medium.com/@ilonacodes/front-end-shorts-how-to-read-content-from-the-file-input-in-react-17f49b293909

    let handleChange = (file) => {
        props.sendFile(file);
    }

    return (
        <div className="file-input">
            <label htmlFor="phpunitXmlInput">Select PHPUnit XML report:</label>
            <input type="file" id="phpunitXmlInput" onChange={e => handleChange(e.target.files[0])}/>
        </div>
    )
}

export default FileInput;
