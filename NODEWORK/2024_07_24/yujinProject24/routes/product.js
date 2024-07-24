//product.js (route)
const express =require("express");
const router = express.Router();

//전체조회
//get       /product?category=t1&price=20000
router.get("/", (req, res) => {
  const category = req.query.category;
  const price = req.query.price;
  res.send(`product router get ${category} and ${price}`);
});

//단건조회
//get       /product/1
router.get("/:num", (req, res) => {
  const num = req.params.num;
  res.send("product router get" + num);
});

//등록
//post      /product/
// JSON 형식 : {id, pname, price} -> app.use(express.json()); 추가하면 사용가능!
// Form 형식 : 
router.post("/", (req, res) => {
  const userid = req.body.id;
  const pname = req.body.pname;
  const price = req.body.price;
  res.send(`product post ${userid} ${pname} ${price}`);
});

//수정
//put     /product/1
//json 형식으로 파라미터 전송 : prodname, price
router.put("/:designer", (req, res) => {
  const designer = req.params.designer;
  //const data = req.body; 
  const result = { ...req.body, designer };
  res.send(result);
});


router.delete("/:designer", (req,res) => {
  const designer = req.params.designer;
  res.send(`designer delete ${designer} `)
});


module.exports = router;