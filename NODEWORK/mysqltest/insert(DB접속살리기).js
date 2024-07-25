// Mysql 접속 - 1) 연결정보 객체이용
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

/*
Mysql 접속 - 2) 연결문자열 이용
let connection = mysql.createConnection( "mysql://hr:hr@localhost:3306/shop");
*/


/*  ===================pool로 생략가능 =================== */



//쿼리 실행 : https://sidorares.github.io/node-mysql2/docs
const name = "무야호";
const email = "mch@naver.com";
const phone = "010-1111-2222";
let sql = `
          insert into customer (name, email, phone)
          values ('${name}', '${email}', '${phone}')
          `;

console.log("=============start msg=============");
connection.query(sql, (err, results, fields) => {
  if(err) console.log(err);
  console.log(results.affectedRows, results.insertId);
  console.log("=============end msg=============");
});


connection.end();
