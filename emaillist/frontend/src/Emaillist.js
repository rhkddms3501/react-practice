import React from 'react';
import styles from './assets/css/Emaillist.css';
import Email from './Email';
import emails from './assets/json/data.json';

const Emaillist = () => {
    return (
        <ul className={styles.Emaillist}>
            {
                emails.map(email => <Email
                    key={email.no}
                    no={email.no}
                    firstName={email.firstName}
                    lastName={email.lastName}
                    email={email.email} />)
            }
        </ul>
    );
};

export default Emaillist;