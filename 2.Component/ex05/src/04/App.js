import React, { useState, useEffect } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {

    const [ticks, setTicks] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setInterval(function () {
            setTicks(tick => tick + 1);
            
            const today = new Date();
            const h = today.getHours();
            const m = today.getMinutes();
            const s = today.getSeconds();
            setHours(h);
            setMinutes(m);
            setSeconds(s);
        }, 1000)
    }, [])
    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ? null :
                    <Clock
                        message={'ex05: useEffect Hook example'}
                        hours={hours}
                        minutes={minutes  < 10 ? '0' + minutes : minutes}
                        seconds={seconds < 10 ? '0' + seconds : seconds} />
            }

        </div>
    );
}