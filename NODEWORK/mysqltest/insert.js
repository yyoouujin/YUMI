const pool = require("./pool_pormise");


//쿼리 실행 : https://sidorares.github.io/node-mysql2/docs
const name = "무야호";
const email = "mch@naver.com";
const phone = "010-1111-2222";
let sql = `
          insert into customer (name, email, phone)
          values ('${name}', '${email}', '${phone}')
          `;

console.log("=============start msg=============");
pool.query(sql, (err, results, fields) => {
  if(err) console.log(err);
  console.log(results.affectedRows, results.insertId);
  console.log("=============end msg=============");
});


