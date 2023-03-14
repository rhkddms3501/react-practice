ex05: Component - LifeCycle
01. Class Component
    01) LifeCycle I : Mount
        - 1. constructor
        - 2. getDerivedStateFromProps
        - 3. render ⭐⭐⭐
        - 4. componentDidMount ⭐⭐⭐
    02) LifeCycle II : update
        - 1. getDerivedStateFromProps
        - 2. shouldComponentUpdate ⭐
        - 3. render ⭐⭐⭐
        - 4. getSnapshotBeforeUpdate
        - 5. componentDidUpdate ⭐⭐⭐
    03) LifeCycle III : UnMount
        - componentWillUnmount ⭐⭐⭐
02. Functional Component:  Alternative(대체) - useEffect
    - getDerivedStateFromProps 대체 가능
    - After Rendering(componentDidMount, componentDidUpdate) 대체 가능
    - 바뀐 상태에 의존적으로 코드 실행 가능
    - componentWillUnmount 대체 가능

========================================================================================================
1. 설치
    1) 개발 툴
        $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass  @babel/core @babel/cli @babel/preset-env @babel/preset-env @babel/preset-react babel-loader
    2) React Library
        $ npm i react react-dom
        $ npm i prop-types
        $ npm i styled-components
        $ npm i react-addons-update

2. webpack.config.js 설정
3. babe.config.json 설정
4. npm 스크립팅
5. 테스트 서버 실행
    $ npm run debug src=(01 or 02 or 04 ...)