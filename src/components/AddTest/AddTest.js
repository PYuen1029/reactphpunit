import React from 'react';
import {Link} from "react-router-dom";
import FileInput from "../FileInput/FileInput";

const AddTest = () => {
    return (
        <div className="add-test">
            <FileInput
//                sendFile={getTestResultData.bind(this)}
            />
        </div>
    )
}

export default AddTest
