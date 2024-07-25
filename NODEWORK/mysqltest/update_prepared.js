const pool = require("./pool_pormise");


/*
update 방법1)
let sql = `
          update customer
          set email=?, adress=?
          where id=?
          `;
->
connection.query(sql, [email, adress, id] , (err, results, fields) => {
*/

//쿼리 실행 : https://sidorares.github.io/node-mysql2/docs
const id = 8;
const email = "개편하쥬?";
const adress = "객체로 담아서 졸라편하쥬?";

//? 가 알아서 해당 값들을 parse 해준다(int, varchar)
let sql = `
          update customer
          set ?
          where id ?
          `;

console.log("=============start msg=============");
pool.query(sql, {email, adress, id}, (err, results, fields) => {
  if(err) console.log(err);
  
  //update는 insertId가 없다
  if(results.affectedRows == 1) {
    console.log("success update");
  } else {
    console.log("fail update");
  }
  console.log("=============end msg=============");
});
