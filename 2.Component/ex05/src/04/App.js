import React, { useState, useEffect } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {

    const [ticks, setTicks] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(function () {
            setTicks(tick => tick + 1);

            const today = new Date();
            setHours(today.getHours());
            setMinutes(today.getMinutes());
            setSeconds(today.getSeconds());
        }, 1000);
         return(() => clearInterval(timer));        
    }, []);

    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                    null :
                    <Clock
                        message={'ex05: useEffect Hook example'}
                        hours={hours}
                        minutes={minutes}
                        seconds={seconds} />
            }
        </div>
    );
}