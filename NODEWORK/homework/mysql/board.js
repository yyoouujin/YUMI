//sql 쿼리

const sql = {
    boardList:"select * from board",
    boardGet:"select * from board where seq=?",
    boardInsert:"insert into board set ?",
    boardUpdate:"update board set ? where seq=?",
    boardDelete:"delete from board where seq=?"
}

module.exports = sql;


/*
#게시글 전체조회
select * from board;
#게시글 단건조회
select * from board where seq=1;
#게시글등록
insert into board (title, content, writer)
values ('나의 라임 오렌지 나무', '책 내용이 너무 좋네요~ 다들 읽어보시길 강추드립니다', 'kyungmin7');
#게시글 업데이트
update board set title="마감이요", content="레이드 마감합니다" where seq="3";
#게시글 삭제
delete from board where seq=4;
*/
