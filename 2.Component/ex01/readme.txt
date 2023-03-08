ex01: Property(props)
    1) 컴포넌트의 데이터
    2) 부모에서 자식으로 전달
        - 컴포넌트간의 통신, Data Flow
    3) 자식에서 변경 불가
    4) 부모가 소유한 데이터

    src/01: FoodList: 함수 컴포넌트
    src/02: FoodList: Data Flo(Top -> Down)함수 컴포넌트
    src/03: FoodList: 클래스 컴포넌트

========================================================================================================
1. 설치
    1) 개발 툴
        $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass  @babel/core @babel/cli @babel/preset-env @babel/preset-env @babel/preset-react babel-loader
    2) React Library
        $ npm i react react-dom

2. webpack.config.js 설정
3. babe.config.json 설정
4. npm 스크립팅
5. 테스트 서버 실행
    $ npm run debug src=(01 or 02 or 04 ...)