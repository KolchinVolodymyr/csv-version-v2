import React from 'react';
import { useState } from "react";
import "./../App.css";
import {Preloader} from "./Preloader";

export const FileUpload = () => {
const [selectedFile, setSelectedFile] = useState();
const [isFilePicked, setIsFilePicked] = useState(false);
const [isShown, setIsShown] = useState(false);
const [data, setData] = useState([]);
const [loader, setLoader] = useState(false);

const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    event.target.files[0] && setIsFilePicked(true);
};


const handleSubmission = () => {
    // HANDLING FILE AS SENDING FILE INTO BACKEND
    if (!isFilePicked) {
        console.log('add allert Error')
        return
    }
    if(selectedFile.type !== "text/csv") {
        console.log('add alert Error on format')
        return
    }
    const formData = new FormData();
    formData.append("File", selectedFile);
    setLoader(true);
    // API CALL
    fetch(" http://localhost:8080/", {
        method: "POST",
        body: formData,
    })
    .then((response) => response.json())
    .then((result) => {
        console.log("Success:", result);
        setData(result.ValidationData)
        if(isShown !== true) {
            setIsShown(!isShown);
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(()=>{
        setLoader(false);
    })
};

return (
    <div className="form-file">
        <div className="file-field input-field">
            <div className="btn">
                <span>File</span>
                <input type="file" onChange={changeHandler}/>
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
            </div>
        </div>
        <button className="waves-effect waves-light btn" onClick={handleSubmission}>Upload file</button>
        <a id="myLink" href='http://localhost:8080/download'>LINK 1</a>
        {/*<button className="waves-effect waves-light btn" onClick={download}>Download</button>*/}
        {isShown &&
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Error string</th>
                            <th>Validation</th>
                        </tr>
                    </thead>
                    {data.map((el, index)=>{
                        return(
                            <tbody>
                                <tr>
                                    <td>string{el[0]}</td>
                                    <td>{el[1]}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        }
        {loader  && <Preloader />}
    </div>
    );
};