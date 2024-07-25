const pool = require("./pool_pormise");

//쿼리 실행 : https://sidorares.github.io/node-mysql2/docs
const name = "테스트";
const email = "test";
const phone = "1234";


/*
insert 방법 1)
let sql = `
          insert into customer (name, email, phone)
          values (?,?,?)
          `;
->
단순 데이터 값 또는 배열 타입으로 넣어줘야한다!
  connection.query(sql,[name, email,  phone], (err, results, fields) => 
  connection.query(sql, name , (err, results, fields) => 
*/


/*
insert 방법 2)
let sql = `insert into customer set ?`;
->
객체 타입으로 넣어줘야한다!
  connection.query(sql,{name, email,  phone}, (err, results, fields) => 


+)  물음표가 두개라면
let sql = `insert into customer set ? ?`;
->
배열 타입으로 변환 후 값 추가가 가능하다!
  connection.query(sql,[{name, email,  phone}, addr], (err, results, fields) => 
*/

let sql = `insert into customer set ?`; // name =? , email = ? ,  phone = ? 으로 자동으로 바꿔준당!

console.log("=============start msg=============");
pool.query(sql,{name, email,  phone}, (err, results, fields) => { //두번째 인수가 값이 들어갈 자리!
  if(err) console.log(err);
  console.log(results);

  //affectedRows : 쿼리로 영향받는 행의 수 (정말로 데이터가 변경된 경우에만 반영)
  //insertId : 등록된 시퀀스 값
  console.log(results.affectedRows, results.insertId);
  console.log("=============end msg=============");
});

