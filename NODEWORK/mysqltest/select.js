const pool = require("./pool_pormise");

/*
Mysql 접속 - 2) 연결문자열 이용
let connection = mysql.createConnection( "mysql://hr:hr@localhost:3306/shop");
*/

//쿼리 실행
console.log("=============start msg=============");

let sql = "select * from customer limit 1";

pool.query(sql, (err, result) => {
  console.log(result);
  console.log("=============end msg=============");
});
