import React from 'react';

export default function () {
    return (
        <div>
            <h1
                onClick={e => console.log('클릭')}
                style={{
                    cursor: 'pointer'
                }}>
                Inline Handler</h1>
        </div>
    );
}