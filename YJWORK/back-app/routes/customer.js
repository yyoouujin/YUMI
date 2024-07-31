const express = require("express");
const router = express.Router();

const mysql = require("../mysql/pool");

//get : 전체조회 http://localhost/customer
router.get("/", (req, res) => {
    mysql.query("customerList").then(result => res.send(result));
});

//get : 단건조회 http://localhost/customer/2
router.get("/:id", (req, res) => {
    let id = req.params.id;
    mysql.query("customerGet", id).then((result) => res.send(result));
});

//post : 등록
// post 방식 또는 JSON 시 body 부분에 request 가 붙는다
router.post("/", (req,res) => { 
    mysql.query("customerInsert", req.body ).then((result) => res.send(result));
});

//put : 수정 
// post 방식 또는 JSON 시 body 부분에 request 가 붙는다
router.put("/:id", (req, res) => {
    let id = req.params.id;
    mysql.query("customerUpdate", [req.body, id]).then((result) => res.send(result));
});

//delete : 삭제
router.delete("/:id", (req, res) => {
    let id = req.params.id;
    mysql.query("customerDelete", [id]).then((result) => res.send(result));
});

module.exports = router;