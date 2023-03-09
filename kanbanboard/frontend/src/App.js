import React from 'react';
import './assets/css/App.css';
import KanbanBoard from './kanbanboard';

function App(props) {
    return (
        <div id='App' className={'App'}>
            <KanbanBoard />
        </div>
    );
};

export default App;