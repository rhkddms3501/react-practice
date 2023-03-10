import React from 'react';

function Clock(props) {

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return (
        /*
            ๐comment01: JSX ๋ฐ์ JavaScript ๊ตฌ๋ฌธ(์ฃผ์)์ด ๊ฐ๋ฅํ๋ค.๐
        */
        <div
            /*
            โcomment02: ์ฌ๊ธฐ์๋ ์ฃผ์์ด ๊ฐ๋ฅํ๋ค ํ์ง๋ง ๋น์ถ!โ
            */
            className='clock'
            title='์๊ณ'
        >
            {/*
                ๐comment03: ์ด๋ฐ ๋ฐฉ์์ผ๋ก ํํ์์ด ์คํ๋๋ ๋ธ๋ก์์์ ์ฃผ์์ ๋ฌ์์ผ ํ๋ค. ๊ฐ์ถ! ๐
            */}
            {/*
                โcomment04: JSX๋ HTML์ด ์๋๋ค!!!!โ
                <!-- --> HTML ์ฃผ์์ ์ฌ์ฉํ  ์ ์๋ค!
            */}
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {':'}
            {('0' + minutes).slice(-2)}
            {':'}
            // โcomment05: JSX์์์ JavaScript ์ฃผ์ ๊ตฌ๋ฌธ์ ์ฌ์ฉํ๋ฉด ํ๋ฉด์ ๊ทธ๋๋ก ๋์จ๋ค.โ
            {('0' + seconds).slice(-2)}
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    );
}

export default Clock;