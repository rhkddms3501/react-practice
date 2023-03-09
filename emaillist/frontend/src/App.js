import React from 'react';
import './assets/css/App.css'
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';


function App(props) {
    return (
        <div id='App' className='App'>
            <RegisterForm />
            <Searchbar />
            <Emaillist />
        </div>
    );
};

export default App;