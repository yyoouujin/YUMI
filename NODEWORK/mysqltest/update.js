const pool = require("./pool_pormise");


//쿼리 실행 : https://sidorares.github.io/node-mysql2/docs
const id = 1;
const email = "mch@naver.com";
const adress = "수정된 주소입니당~";
let sql = `
          update customer
          set email='${email}', adress='${adress}'
          where id=${id}
          `;

console.log("=============start msg=============");
pool.query(sql, (err, results, fields) => {
  if(err) console.log(err);
  
  //update는 insertId가 없다
  if(results.affectedRows == 1) {
    console.log("success update");
  } else {
    console.log("fail update");
  }
  console.log("=============end msg=============");
});

