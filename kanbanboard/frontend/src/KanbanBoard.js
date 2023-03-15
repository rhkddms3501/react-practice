import React, {useEffect, useState} from 'react';
import styles from './assets/css/KanbanBoard.css';
import CardList from './CardList';
// import data from './assets/json/data.json';
// import update from 'react-addons-update';

const KanbanBoard = () => {
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        try {
 /*   CORS (Cross Origin Resource Sharing) Error
        - http://localhost:8080/api/card => Origin(http://localhost:8080) URI(api/card)
        - application => Origin(http://localhost:9090)
        - CORS 에러는 브라우저가 내는 에러
            -> Origin이 달라도 통신을 하도록 허용하면 해결 (proxy 설정 >> webpack에 설정 devServer/proxy)
        - 배포시에는 http://localhost:8080/api/card가 아닌 api/card (URI)만 적어주면 됨
            -> 서버(Backend)와 Application(Frontend)가 같은 origin을 사용하기 때문  */
            const response = await fetch('/api/card', {
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if(!response.ok){ // response의 status가 200이 아니면
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json(); // response의 body를 json으로 변환?
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setCards(json.data);

        } catch (error) {
            console.error(error.message);            
        }
    }

    // useEffect(()=>{}, []);
    useEffect(()=>{
        fetchCards();
    }, []);

    return (
        <div className={styles.KanbanBoard}>
            <CardList 
                key={'To Do'}
                title={'To Do'}
                cards={cards.filter(card => card.status === 'ToDo')}/>
            <CardList
                key={'Doing'}
                title={'Doing'}
                cards={cards.filter(card => card.status === 'Doing')}/>
            <CardList
                key={'Done'}
                title={'Done'}
                cards={cards.filter(card => card.status === 'Done')}/>
        </div>
    );
};

export default KanbanBoard;