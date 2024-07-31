// mysql 모듈 로드
const mysql = require("mysql2");
const customersql = require("./customer_sql");
const productsql = require("./product_sql");
const boardsql = require("./board_sql.js");


//sql 을 모두 가져와서 저장
const sql = {...customersql, ...productsql, ...boardsql};

// mysql 접속정보
const conn = { host: "127.0.0.1",
  port: "3306",  
  user: "hr",  
  password: "hr",  
  database: "shop",
  connectionLimit: 10, 
  };
//DB 커넥션 생성
let pool = mysql.createPool(conn);

//query 함수(넘겨주는 sql은 필드명 : 키값)
function query(key, data){
  return new Promise((resolve, reject) => {
    pool.query(sql[key], data, (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  });
}

module.exports = {pool, query};
//pool 과 query 모두 내보내기 가능 module.exports = {pool, query};
//query 만 내보내도됩니다 module.exports = query;
