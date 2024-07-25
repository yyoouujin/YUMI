//쿼리만 모아둘 파일

const sql = {
  customerInsert:"insert into customer set ?",
  customerUpdate:"update customer set ? where id = ?",
  customerDelete:"delete from customer where id=?",
  customerList:"select * from customer",
  customerGet:"select * from customer where id=?"
}

module.exports = sql;
