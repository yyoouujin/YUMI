const sql = {
    boardList : "select * from T_BOARD_BOARD",

    boardList2 : "select b.no, b.title, b.writer, b.created_date, c.bno from t_board_board b left outer join t_comment_board c on (b.no = c.bno)",
    boardInfo : "select * from T_BOARD_BOARD where no=?",
    boardInsert : "insert into T_BOARD_BOARD set ?",
    boardUpdate : "update T_BOARD_BOARD set ? where no=?",
    boardDelete : "delete from T_BOARD_BOARD where no=?",

    commentInfo : "select * from t_comment_board where bno=?",

  }
  
  module.exports = sql;