//mysql 로 pool과 query 가 들어온다
const mysql = require("./pool.js"); 


//쿼리 실행
let sql = "select * from customer";

//콜백함수 대신 then 절 사용가능
mysql.query(sql)
.then( (result) => console.log(result)); 


//mysql.query(sql) -> {pool, query} 모두 내보냈을 때
//mysql(sql) -> query 만 내보냈을 때