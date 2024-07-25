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

//connection 가져오기
pool.getConnection((err, connection) => {
  //쿼리 실행
  let sql = "select * from customer";
  connection.query(sql, (err, results, fields) => {
    if(err) console.log(err);
    console.log(results);
  });
  connection.release(); 
});



