import React, { useState } from 'react';
import './assets/css/App.css'
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json'


function App(props) {
    const [emails, setEmails] = useState(data);
    const [keyword, setKeyword] = useState("");
    const notifyKeyWordChanged = function (keyword) {
        console.log(keyword);
        // keyword가 firstName or lastName or email
        const newEmails = data.filter(e =>
            e.firstName.indexOf(keyword) !== -1 ||
            e.lastName.indexOf(keyword) !== -1 ||
            e.email.indexOf(keyword) !== -1
        );
        console.log(newEmails);
        setEmails(newEmails);
    };
    return (
        <div id='App' className='App'>
            <RegisterForm />
            <Searchbar callback={notifyKeyWordChanged} />
            <Emaillist emails={emails} />
        </div>
    );
};

export default App;