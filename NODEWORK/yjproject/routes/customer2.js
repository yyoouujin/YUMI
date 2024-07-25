const express = require("express");
const router = express.Router();

// mysql 모듈 로드
const mysql = require("mysql2");

// mysql 접속정보
const conn = { host: "127.0.0.1",
               port: "3306",  
               user: "hr",  
               password: "hr",  
               database: "shop"  }; //스키마명

//DB 커넥션 생성
let connection = mysql.createConnection(conn);


//get : 전체조회 http://localhost/customer
router.get("/", (req, res) => {
  let sql = "select * from customer";

  connection.query(sql, (err, result, fields) => {
    if(err) console.log(err);
    res.send(result);
  });
  //생략가능!
  connection.end();
});


//get : 단건조회 http://localhost/customer/2
router.get("/:id", (req, res) => {
  let id = req.params.id;
  let sql = "select * from customer where id="+id;

  connection.query(sql, (err, results, fields) => {
    if(err) console.log(err);
    res.send(results);
  });
  connection.end();
});


//post : 등록
// post 방식 또는 JSON 시 body 부분에 request 가 붙는다
router.post("/", (req,res) => { 
  let sql = `insert into customer set ?`;
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  
  connection.query(sql, {name, email,  phone}, (err, results, fields) => {
    if(err) console.log(err);
    if (results.affectedRows == 1) {
      res.send("Insert OK ^0^!!");
    } else {
      res.send("Fail Insert T.T!!");
    }
  });
  connection.end();
});


//put : 수정 
// post 방식 또는 JSON 시 body 부분에 request 가 붙는다
router.put("/:id", (req, res) => {
  let id = req.params.id;
  let sql = `
            update customer
            set ?
            where id = ?
            `;
connection.query(sql, [req.body, id], (err, results, fields) => {
  if(err) console.log(err);
  if(results.affectedRows == 1) {
    res.send("Update OK ^0^!!");
  } else {
    res.send("Fail Update T.T!!");
  }
});
connection.end();
});

//delete : 삭제
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  let sql = "delete from customer where id="+id;

  connection.query(sql, (err, results, fields) => {
    if(err) console.log(err);
    if(results.affectedRows == 1) {
      res.send("Delete OK ^0^ !!");
    } else {
      res.send("Fil Delete T.T!!");
    }
  });
  connection.end();
});



module.exports = router;


/*
3) req.body
    : JSON 등의 바디데이터를 담을 때 사용
    (주로 POST로 유저의 정보 또는 파일 업로드를 보냈을 때)
    express.json(), express.urlencoded()와 같은 미들웨어를 사용
        미들웨어? : 데이터를 주고받을 수 있도록 중간에서 매개역할을 해줌
*/

