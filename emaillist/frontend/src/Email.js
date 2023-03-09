import React from 'react';
import styles from './assets/css/Email.css';

const Email = ({ no, firstName, lastName, email }) => {
    return (
        <li className={styles.Emaillist__li}>
            {firstName + lastName}
            <br />
            {email}
        </li>
    );
};

export default Email;