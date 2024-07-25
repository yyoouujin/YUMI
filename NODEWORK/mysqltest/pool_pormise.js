// connectionPool 모듈화 

// mysql 모듈 로드
const mysql = require("mysql2");

// mysql 접속정보
const conn = { host: "127.0.0.1",
  port: "3306",  
  user: "hr",  
  password: "hr",  
  database: "shop",
  connectionLimit: 10, 
  }; //스키마명

//DB 커넥션 생성
let pool = mysql.createPool(conn);

//모듈 객체 내보내기
module.exports = pool;

