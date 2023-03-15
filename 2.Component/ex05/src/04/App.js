import React, { useState, useEffect } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {

    const [ticks, setTicks] = useState(0);
    const [clock, setClock] = useState({
        hours : '',
        minutes : '',
        seconds : ''
    });

    useEffect(() => {
        const timer = setInterval(function () {
            setTicks(tick => tick + 1);

            const today = new Date();
            setClock({
                hours : today.getHours(),
                minutes : today.getMinutes(),
                seconds : today.getSeconds()
            })
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
                        hours={clock.hours}
                        minutes={clock.minutes}
                        seconds={clock.seconds} />
            }
        </div>
    );
}