ex02: Component Styling
    1) Inline Styling
    2) Normal CSS
        - webpack.config.js > css.loader options: {modules: false}
        - $ npm run debug src=02 css-modules=false
    3) CSS Module⭐ I 
        - webpack.config.js > css.loader options: {modules: false}
        - $ npm run debug src=03 css-modules=true
    4) CSS Module⭐ II 
        - webpack.config.js > css.loader options: {modules: true}
        - $ npm run debug src=04 css-modules=true
    5) SASS & SCSS
        - webpack.config.js > css.loader options: {modules: true}
        - $ npm run debug src=05 css-modules=true
    6) CSS in JS: Styled Component
        - $ npm i styled-components
        - webpack.config.js > css.loader options: {modules: true}
        - $ npm run debug src=06 css-modules=true
    7) React Modal
        - 설치
            $ npm i react-modal
    8) Modal: Material UI

    src/01: 
    src/02: 
    src/03: 
    src/04: 
    src/05: 
    src/06: 
    src/06: 

========================================================================================================
1. 설치
    1) 개발 툴
        $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass  @babel/core @babel/cli @babel/preset-env @babel/preset-env @babel/preset-react babel-loader react-modal
    2) React Library
        $ npm i react react-dom
        $ npm i prop-types
        $ npm i styled-components

2. webpack.config.js 설정
3. babe.config.json 설정
4. npm 스크립팅
5. 테스트 서버 실행
    $ npm run debug src=(01 or 02 or 04 ...) css-modules=(true or false)