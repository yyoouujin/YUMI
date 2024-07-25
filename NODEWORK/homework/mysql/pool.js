//connection pool 생성, db쿼리 실행 함수
const mysql = require("mysql2");

//sql 을 모두 가져와서 저장
const sql = require("./board");

//mysql 접속정보
const conn = { 
    host: "127.0.0.1",
    port: "3306",  
    user: "hr",  
    password: "hr",  
    database: "shop",
    connectionLimit: 10, 
};

//DB 커넥션 생성
let pool = mysql.createPool(conn);

//query 함수
function query(key, data) {
    return new Promise((resolve, reject) => {
        pool.query(sql[key], data, (err, result, fields) => {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    });
}

module.exports = {pool, query};


/*
Database Connection Pool ?
    ->
DB 연결할 때마다 Connection 객체를 새로 만드는 것은 비용이 많이 들며, 굉장히 비효율적임
APP 로딩시점에 미리 Connection 객체를 생성해두고(기본 10개) 앱 데이터베이스에 연결이 필요할 경우에,
미리 준비된 커넥션 풀을 사용해서 속도나 성능을 높인다
즉, DB 드라이버를 통해 새로운 커넥션을 획득하는 게 아니라, 이미 생성되어 있는 커넥션을 참조해서 사용한다
*/
