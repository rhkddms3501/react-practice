===============================================================================

1. backend
	1) 개발 (테스트)
		eclipse Ctrl+F11 (스프링부트 애플리케이션 실행)    // Developement 모드로 싱행됨

	2) 빌드(배포)
		# mvn -f kanbanboard/backend clean package
		
		테스트
		# java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard.jar

===============================================================================

2. frontend
	1) 설치
		- 개발 툴
			$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass  @babel/core @babel/cli @babel/preset-env @babel/preset-env @babel/preset-react babel-loader case-sensitive-paths-webpack-plugin react-modal
		- library
			$ npm i react react-dom prop-types styled-components react-addons-update
	2) 설정
		- webpack.config.js
		- babel.config.json					
	3) npm 스크립팅
		- package.json		
			  "scripts": {
				    "start": "npx webpack serve --config config/webpack.config.js --progress --mode development",
		    		"build": "npx webpack --config config/webpack.config.js --mode production"
	  			},
	4) 테스트 (개발 모드)
		$ npm start
	5) 빌드 (배포)
		$ npm run build
		
===============================================================================