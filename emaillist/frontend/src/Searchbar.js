import React from 'react';
import styles from './assets/scss/Searchbar.scss';

const Searchbar = ({ callbackNotifyKeyWordChanged }) => {
    return (
        
        /*
         * Search Bar (onChange: 값이 바뀔 때 마다)
         */
        // <div className={styles.Searchbar}>
        //     <input 
        //         type="text" 
        //         placeholder="찾기"
        //         onChange={e => callbackNotifyKeyWordChanged(e.target.value)} />
        // </div>

        /*
         * Search Bar (onKeyDown ('Enter'): Enter를 입력할 때 마다)
         */
        <div className={styles.Searchbar}>
            <input 
                type="text" 
                placeholder="찾기"
                onKeyDown={(e) => {
                  if(e.key === 'Enter'){
                    callbackNotifyKeyWordChanged(e.target.value)};
                  }  
                } />
        </div>
    );
};

export default Searchbar;