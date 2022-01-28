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
                </div>
            </div>
        </div>
    );
}

export default App;