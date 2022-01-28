import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import ReactFileReader from 'react-file-reader';
import { FileUpload } from './components/FileUpload';

import { getAllUsers } from './services/UserService'

function App() {
const [user, setUser] = useState({})
const [users, setUsers] = useState([])
const [numberOfUsers, setNumberOfUsers] = useState(0)
const [csvFile, SetCsvFile] = useState();

//const userCreate = (e) => {
//    createUser(user)
//    .then(response => {
//      console.log(response);
//      setNumberOfUsers(numberOfUsers+1)
//    });
//}
//
//const fetchAllUsers = () => {
//    getAllUsers()
//        .then(users => {
//            console.log(users)
//            setUsers(users);
//            setNumberOfUsers(users.length)
//        });
//}

    useEffect(() => {
        getAllUsers()
            .then(users => {
                console.log(users)
                setUsers(users);
                setNumberOfUsers(users.length)
            });
    }, [])

//    const fetchFile = (e) => {
//        if (e.target.name === 'firstname') {
//            user.firstName = e.target.value;
//        } else if (e.target.name === 'lastname') {
//            user.lastName = e.target.value;
//        } else if (e.target.name === 'email') {
//            user.email = e.target.value;
//        }
//        setUser(user)
//    }

    const fetchFile = async ()  => {
        try {
            const data = await fetch('/', {
                method: 'POST',
            });
            console.log('data', data)
        } catch (e) {
            console.log(e);
        }
    }
    const handleFiles = files => {
      console.log(files)
    }
    const handleler = (e) => {
//                SetCsvFile(e.target.files[0])
    console.log('e.target', e.target)
    SetCsvFile(e.target.files)
  }



    return (
        <div className="App">
            <Header></Header>
            <div className="container ">
                <div className="row">
                <FileUpload></FileUpload>

                </div>
            </div>
            <div className="row mrgnbtm">
                <Users users={users}></Users>
            </div>
        </div>
    );
}

export default App;