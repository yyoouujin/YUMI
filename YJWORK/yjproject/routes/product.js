const express = require("express");
const router = express.Router();

/*
1) 전체조회
/product?category=bag&price=24000
*/
router.get("/", (req, res) => {
    const category = req.query.category;
    const price = req.query.price;
    res.send(`Router get category : ` + category + ' / price : ' + price);
});

/*
2) 단건조회
/product/79
*/
router.get('/:pdnum', (req, res) => {
    const pdnum = req.params.pdnum;
    res.send(`Router send pdnum : ${pdnum}`);
});

/*
3) 등록
/product/
{id, pname, price}
*/
router.post('/', (req, res) => {
    const id = req.body.id;
    const pname = req.body.pname;
    const price = req.body.price;
    res.send(`id = ${id}, product name = ${pname}, price = ${price}`);
});

/*
4) 수정
/product/1
*/
router.put('/:color', (req, res) => {
    const color = req.params.color;
    const result = { ...req.body, color };
    res.send(result);
})



module.exports =router;


