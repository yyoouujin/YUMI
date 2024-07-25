//user.js (route)
const express = require("express");
const router = express.Router();

//1) req.params
//http://localhost/member/park
router.get("/:username/:cookie",(req, res) => {
  //url 에 포함된 파라미터의 값을 읽는다
  const username = req.params.username;
  const cookie = req.params.cookie;
  //console.log(username);
  res.send("router get " + username + cookie);
});


//2) req.query
//http://localhost/member?page=1&search=choi
//전체조회
router.get("/",(req, res) => {
  const page = req.query.page;
  const search = req.query.search;
  
  //세션정보읽기
  const email = req.session.email;
  
  //쿠키값읽기(req.cookies.쿠키명)
  console.log('cart cookie : ', req.cookies.cart);
  console.log('popup cookie : ', req.cookies.popupyn);

  //쿠키저장(res.cookie(name, value [, options]))
  res.cookie("email", email, { expires: new Date(Date.now() + 15000) });
  res.send(`user query: ${email}`);

  const data = req.query; // 자바의 vo
  //res.send(`user query string${email}`);

  //console.log(data);
  //-> { page: '8', search: 'yujin' } 확인
});

//3) req.body
router.post("/",(req, res) => {
  //console.log(req.body); //req.body = vo객체
  const username = req.body.username;
  const addr = req.body.addr;
  res.send(`user post ${username} ${addr}`);
});

/*
1)
부메랑에서 form 방식으로 데이터 보내기
-> 
Cannot read properties of undefined
에러가 나는 이유 : request에 body 값을 파싱해주는 모듈이 따로 있다! (=body.parse 라는 모듈)
app.use(express.urlencoded({ extended: false })); 추가

2)
부메랑에서 json 방식으로 데이터 보내기
->
body 에 들어있는 값들을 모두 파싱해줘야함
app.use(express.json()); 추가

*/


//4) put 방식 : req.body / req.query 둘 다 사용
router.put("/:userid",(req, res) => {
  const userid = req.params.userid;
  //const data = req.body;
  const result = { ...req.body, userid };
  res.send(result);
});


//5) delete 방식 : 삭제하고자 하는 파라미터의 값을 지우면된다
router.delete("/:userid",(req,res) => {
  const userid = req.params.userid;
  res.send(`user delete ${userid}`);
});

//라우터 객체를 내보낸다
module.exports = router;
