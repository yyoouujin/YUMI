const express = require("express");
const router = express.Router();


//const {pool,query} = require("../mysql/pool");
const mysql = require("../mysql/pool");

//get : 전체조회 http://localhost/customer
router.get("/", (req, res) => {
  mysql.query("customerList").then(result => res.send(result));
});



//get : 단건조회 http://localhost/customer/2
router.get("/:id", (req, res) => {
  let id = req.params.id;
  mysql.query("customerGet", id).then((result) => res.send(result));
});

//post : 등록
// post 방식 또는 JSON 시 body 부분에 request 가 붙는다
router.post("/", (req,res) => { 

  mysql.query("customerInsert", req.body ).then((result) => res.send(result));
});


//put : 수정 
// post 방식 또는 JSON 시 body 부분에 request 가 붙는다
router.put("/:id", (req, res) => {
  let id = req.params.id;
  mysql.query("customerUpdate", [req.body, id]).then((result) => res.send(result));
});

//delete : 삭제
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  mysql.query("customerDelete", [id]).then((result) => res.send(result));
  });


module.exports = router;


/*
3) req.body
    : JSON 등의 바디데이터를 담을 때 사용
    (주로 POST로 유저의 정보 또는 파일 업로드를 보냈을 때)
    express.json(), express.urlencoded()와 같은 미들웨어를 사용
        미들웨어? : 데이터를 주고받을 수 있도록 중간에서 매개역할을 해줌
*/

