import React, { useEffect, useState } from 'react';
import './assets/scss/App.scss'
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import update from 'react-addons-update';


function App() {
    const [emails, setEmails] = useState([]);
    const [key, setKey] = useState("");





    /*
     *  첫 페이지 접속시 이메일 리스트 로드
     */
    const fetchEmails = async () => {
        try {
            const response = await fetch('/api/emaillist', {
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            setEmails(json.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchEmails();
    }, []);





    /*
     * 서치바에서 onKeyDown 이벤트 ('Enter') 발생 시 keyword 값에 따른 이메일 리스트 로드
     */
    const notifyKeyWordChanged = async (keyword) => {
        try {
            const response = await fetch(`/api/emaillist/${keyword}`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/x-www-form-urlencoded',
                },
                body: `keyword=${keyword}`
            });
            if (!response.ok) { // response의 status가 200이 아니면
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json(); // response의 body를 json으로 변환?
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            setEmails(json.data);
            setKey(keyword);
        } catch (error) {
            console.error(error.message);
        }
    };




    /*
     * 이메일 추가
     * 현재 keyword 값에 따른 이메일 리스트가 로드중이고, 이메일의 firstName, lastName, email에 키워드가 포함되면 emails에 이메일 추가 후 렌더
     * 현재 keyword 값에 따른 이메일 리스트가 로드중이고, 이메일의 firstName, lastName, email에 키워드가 포함되어 있지 않다면 DB에만 이메일 추가
     */
    const updateEmailList = (data) => {
        setEmails(emails.reverse());
        const newEmails = update(emails, {
            $push: [data]
         });
         setEmails(newEmails.reverse());
    }

    const addEmail = async(firstName, lastName, email) => {
        const newEmail = {
            no: null,
            firstName: firstName,
            lastName: lastName,
            email: email
        };
        try {
            const response = await fetch(`/api/email`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json',
                },
                body: JSON.stringify(newEmail)
            });
            if (!response.ok) { // response의 status가 200이 아니면
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json(); // response의 body를 json으로 변환?
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            json.data.firstName.indexOf(key) !== -1 || json.data.lastName.indexOf(key) !== -1 || json.data.email.indexOf(key) !== -1 
                ?  updateEmailList(json.data)
                :  null;
        } catch (error) {
            console.error(error.message);
        }
    };




    /*
     * 이메일 삭제
     */
    const deleteEmail = async(no) => {
        try {
            const response = await fetch(`/api/email/${no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/x-www-form-urlencoded',
                },
                body: `no=${no}`
            });
            if (!response.ok) { // response의 status가 200이 아니면
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json(); // response의 body를 json으로 변환?
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            const newEmails = update(emails, {
                $splice: [[emails.findIndex(email => email.no === json.data), 1]]
            });
            setEmails(newEmails);
        } catch (error) {
            console.error(error.message);
        }
    };
    
    return (
        <div id='App'>
            <RegisterForm callbackAddEmail={addEmail}/>
            <Searchbar callbackNotifyKeyWordChanged={notifyKeyWordChanged} />
            <Emaillist emails={emails} callbackDeleteEmail={deleteEmail} />
        </div>
    );
};

export default App;