===============================================================================

1. backend
	1) 개발 (테스트)
		eclipse Ctrl+F11 (스프링부트 애플리케이션 실행)    // Developement 모드로 싱행됨

	2) 빌드(배포)
		# mvn -f kanbanboard/backend exec:exec clean package
		
		테스트
		# java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard.jar

===============================================================================

2. ssh 연결(ssh key 인증)
	
	1) key 생성하기
		$ ssh-keygen -t rsa -b 2048 -m PEM -C "rhkddms3501@naver.com"
		
	2) key 생성 확인 (위치 : root) (cd )
		- ~/.ssh/id_rsa : private key (개인 키)
		- ~/.ssh/id_rsa.pub : public key (공개 키)
	
	3) 공개키를 서버에 설치하기
		# mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys
		
	4) 테스트 
		(window에선 안될.. linux에서 됨)
		# ssh -i mykey.pem root@192.168.10.115
		
		(window에서 될..)
		- Xhell 에서 root로 연결
		- 등록정보 방법을 password에서 public key로
		- 개인키 복사 >> mykey.pem으로 저장
		- 불러오기
		
	5) ssh 연결 환경설정
	   - ~/.ssh/environment
	     ==================
	     PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/douzone2023/java/bin:/usr/local/douzone2023/git/bin:/usr/local/douzone2023/maven3.8/bin:/usr/local/douzone2023/mariadb/bin:/usr/local/douzone2023/python/bin:/usr/local/douzone2023/node/bin:/root/bin
	     ==================	
	   
	   - /etc/ssh/sshd_config
	     PermitUserEnvironment yes
	      
	6) jenkins
		- Publish over SSH 플러그인 설치
		- Publish over SSH 플러그인 ssh server 등록(springboot-publish-server)
		- 프로젝트의 빌드 후 조치(post-build action)의 send suild artifacts over ssh 설정 	   
		  kanbanboard.jar : transfer
		  launch.sh : transfer + execution

===============================================================================

3. frontend
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
		    		"build": "npm i && npx webpack --config config/webpack.config.js --mode production"
	  			},
	4) 테스트 (개발 모드)
		$ npm start
	5) 빌드 (배포)
		$ npm run build
		
===============================================================================