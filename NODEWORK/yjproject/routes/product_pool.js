const express =require("express");
const router = express.Router();

const mysql = require("../mysql/pool");


//전체조회
//get       /productpool
router.get("/", (req, res) => {
  mysql.query("productList").then(result => res.send(result));
});


//단건조회
//get       /productpool/1
router.get("/:pdnum", (req, res) => {
  const pdnum = req.params.pdnum;
  mysql.query("productGet", pdnum).then(result => res.send(result));
});



//등록
//post      /productpool
// JSON 형식 : {id, pname, price} -> app.use(express.json()); 추가하면 사용가능!
// Form 형식 : 
router.post("/", (req, res) => {
  const prodname = req.body.prodname;
  const descri = req.body.descri;
  const price = req.body.price;
  const cate = req.body.cate;

  mysql.query("productInsert", [{prodname, descri, price, cate}]).then(result => res.send(result));
});


/*
[async await함수 사용도 가능!]

router.post("/", async (req, res) => {
  let result = await mysql.query("productInsert", req.body);
  res.send(result);
});
*/


//수정
//put     /productpool/1
//json 형식으로 파라미터 전송 
router.put("/:pdnum", (req, res) => {
  let pdnum = req.params.pdnum;
  let data = req.body;
  //console.log(data); //해당 data 는 객체 (req.body 값 혹은 JSON 형식, form 데이터 전송 시 put 메소드를 사용한다!)
  mysql.query("productUpdate", [data, pdnum]).then(result => res.send(result));
});


//삭제
//delete     /productpool/5
router.delete("/:pdnum", (req,res) => {
  let pdnum = req.params.pdnum;

  //잘 모르겠으면 일단 배열에 담아보셈
  mysql.query("productDelete", [pdnum]).then(result => res.send(result));
});



module.exports = router;