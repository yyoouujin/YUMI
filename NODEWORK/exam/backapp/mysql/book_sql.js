const sql = {
  bookList : "select * from t_book",
  bookInfo : "select * from t_book where no=?",
  bookInsert : "insert into t_book set ?",
  bookUpdate : "update t_book set ? where no=?",
  bookDelete : "delete from t_book where no=?"

}

module.exports = sql;