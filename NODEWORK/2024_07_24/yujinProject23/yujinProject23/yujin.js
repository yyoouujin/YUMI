const express = require('express'); //아까 설치한 라이브러리(express)를 첨부해주세요
const app = express(); //새로운 객체를 만들었다 express로

//서버를 열 수 있다 (어디서 열지 정해줘야한다)
app.listen(8000, function(){
  console.log('listening on 8080');
});

//서버를 express로 만들기 위한 기본 문법 3가지 (서버오픈 문법)