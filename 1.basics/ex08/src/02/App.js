import React from 'react';

function App() {
  /*
    리액트 컴포넌트는 단일 루트 단일 노드만 렌더링 할 수 있다

    이유: 
    변환되는 코드
    React.createElement('div', null, React.createElement('h2', null, '01'), React.createElement('p', null, 'jsx...))
  */
  return ( // 이안이 JSX 구역
    <div>
        <p>JSX Tutorial - 특징1 (HTML과 차이점)</p>
    </div>
  );
}

export default App;
