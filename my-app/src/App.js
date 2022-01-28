import React from 'react';
import 'materialize-css';
import './App.css';
import { Header } from './components/Header';
import { FileUpload } from './components/FileUpload';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="container ">
                <div className="row">
                <FileUpload></FileUpload>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
                </div>
            </div>
        </div>
    );
}

export default App;