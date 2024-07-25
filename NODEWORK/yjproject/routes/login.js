const express = require("express");
const router = express.Router();

/*
get 방식 -> req.query 로 받기
post 방식 -> req.body 로 받기
*/

//login : http://localhost:3000/user/login?email=yujin@gmail.com
router.get("/login",(req, res) => {
  const {email, pw} = req.query;
  console.log(email);
  req.session.email = email;

  //세션 파일에 정보를 담아준다 save() : 콜백함수
  req.session.save( (err) => {
    if (err) throw err; 
    res.redirect("/member"); 
  }); 
});

//logout
router.get("/logout",(req, res) => {
  console.log('LogOut');
  res.send(`Log-Out`);
});

module.exports = router;