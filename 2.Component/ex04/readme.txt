ex03: Component - State

01. 기본 개념
    - 컴포넌트 내부의 상태를 나타내는 쓰기 가능한 데이터
    - 컴포넌트 this.state 안에 여러 데이터(상태)를 가질 수 있다.
    - "상태가 변경되면 컴포넌트의 반응형(Reactive) 렌더링이 트리거가 되고 컴포넌트와 자식 컴포넌트가 다시 렌더링이 된다."
    - 클래스 컴포넌트에서는 constructor 안에서 초기화 한다.
    - 클래스 컴포넌트에서는 반드시 상태 변경을 위해서 setState 함수를 사용한다.
    - 함수 컴포넌트에서는 useState 훅(hook) 함수를 사용해서 초기화 한다.
    - 함수 컴포넌트에서는 상태 변경을 위해 useState hook 함수에서 반환된 배열의 두번째 요소를 함수로 사용한다.
    
02. 제어 컴포넌트
    1) input, textarea, select 와 같은 폼(form) 컴포넌트에서 사용자 입력에 따라 state값이 변경되는 랜더링 컴포넌트
    2) 제어 컴포넌트
    3) 비제어 컴포넌트

03. 상태 컴포넌트 VS 순수(Pure, Dumb) 컴포넌트

04. Data Flow(Bottom -> Top)




========================================================================================================
1. 설치
    1) 개발 툴
        $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass  @babel/core @babel/cli @babel/preset-env @babel/preset-env @babel/preset-react babel-loader
    2) React Library
        $ npm i react react-dom
        $ npm i prop-types
        $ npm i styled-components

2. webpack.config.js 설정
3. babe.config.json 설정
4. npm 스크립팅
5. 테스트 서버 실행
    $ npm run debug src=(01 or 02 or 04 ...)