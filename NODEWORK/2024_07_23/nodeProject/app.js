const express = require("express"); 
const app = express(); 
const port = 3000; 
 
app.get("/", (req, res) => { 
  res.send("hello world!"); 
}); 

app.get("/user", (req, res) => { 
  res.send("hello Yujin!"); 
}); 
 
app.listen(port, () => { 
  console.log(`server runing http://localhost:${port}`); 
}); 


/*
Error: Cannot find module 'express' -> express 모듈을 설치해줘야한다(외장모듈)

https://www.npmjs.com/ -> node 라이브러리 모아둠 -> express 검색

express?
  : 
npm i express 
->
실행 후 package.json 파일 내 express 추가된 것 확인!

npm uninstall express
->
express 빠지는 것 확인!

서버 실행 후 뒤에 /user 추가하면 메세지가 달라짐
http://localhost:3000 -> "hello world!" 출력
http://localhost:3000/user -> "hello Yujin" 출력


nodemon?
  : 서버 자동 재시작
1.
npm install nodemon
-> 
실행 후 package.json 파일 내 nodemon 추가된 것 확인!

2.
npm uninstall nodemon
->
실행 후 package.json 파일 내 nodemon 빠지는 것 확인!

3.
npm install nodemon --save-dev 
->
실행 후 package.json 파일 내 devDependencies 추가된 것 확인
개발환경 모드

4.
npm install nodemon -g
->
nodemon 명령어 사용 가능 (nodemon app.js 사용가능)


package.json 파일 내
"dev" : "nodemon app.js"  추가 (스크립트 명령어 추가)
->
후 npm run dev 호출 시 서버 실행 확인!



+)
npm init : package.json 파일을 만들기 위해 사용하는 명령어


*/
