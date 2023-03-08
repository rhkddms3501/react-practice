import React, { Fragment } from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

function Content() {
    const str = 'JSX 표현식 표기법 ({js expression})';
    return (
        <Fragment>
            <p>{str}</p>
            <Clock01 />
            <Clock02 />
        </Fragment>
    );
}

export default Content;