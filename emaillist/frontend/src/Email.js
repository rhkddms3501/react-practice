import React from 'react';
import styles from './assets/scss/Email.scss';

const Email = ({ no, firstName, lastName, email, callbackDeleteEmail }) => {
    const test = () => {
        console.log("테스트 성공");
    }
    return (
        <li className={styles.Email} >
            {firstName + lastName}
            <br />
            {email}
            <a href='' onClick={(e) => {
                e.preventDefault();
                callbackDeleteEmail(no);
            }}></a>
        </li>
    );
};

export default Email;