//product 관련 쿼리만 모아둔다

const sql = {
  productList:"select * from product",
  productGet:"select * from product where prodnum=?",
  productUpdate:"update product set ? where prodnum=?",
  productInsert:"insert into product set ?",
  productDelete:"delete from product where prodnum=?"
}


module.exports = sql;


/*
#전체조회
select * from product;
#단건조회
select * from product where prodnum=3;
#수정
update product
set descri='change description test', price=19990, cate='Top'
where prodnum=4;
#등록
insert into product (prodname, descri, price, cate)
values ('Banding-Wide-Pants', 'cool span pants', 42500, 'Bottom');
#삭제
delete from product
where prodnum = 4;
*/

