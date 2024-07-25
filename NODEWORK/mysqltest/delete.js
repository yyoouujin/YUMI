const pool = require("./pool_pormise");



/*
delete 방법 1)
let sql = `delete from customer where id=${id}`;
->
connection.query(sql, (err, results, fields) => {
*/

/*
delete 방법 2)
let sql = `delete from customer where id=?`;
->
connection.query(sql, id, (err, results, fields) => {
하나뿐이지만 배열에 담아서 넘겨줘도된다! {}는 안돼요~
connection.query(sql, [id], (err, results, fields) => {
*/



//쿼리 실행 : https://sidorares.github.io/node-mysql2/docs
const id = 5;
let sql = `delete from customer where id=?`;

console.log("=============start msg=============");
pool.query(sql, id, (err, results, fields) => {
  console.log(results);
  if(err) console.log(err);
  if(results.affectedRows == 1) {
    console.log("success delete");
  } else {
    console.log("fail delete");
  }
  console.log("=============end msg=============");
});

