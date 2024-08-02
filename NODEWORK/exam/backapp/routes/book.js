const express = require("express");
const router = express.Router();

const mysql = require("../mysql/pool");

//전체조회
router.get("/", (req, res) => {
  mysql.query("bookList").then(result => res.send(result));
});

//단건조회
router.get("/:no", async function (req, res) {  
    let result = await mysql.query("bookInfo", req.params.no); 
    res.send(result);
})

//등록   req.body
router.post("/", async function (req, res) { 
    let result = await mysql.query("bookInsert", req.body);
    res.send(result); 
}); 

//수정   req.body, req.params.id
router.put("/:no", async function (req, res) {  
    let result = await mysql.query("bookUpdate", [req.body,req.params.no]); 
    res.send(result);
});

//삭제  req.params.id
router.delete("/:no", async function (req, res) { 
    let result = await mysql.query("bookDelete", req.params.no); 
    res.send(result);
});

module.exports = router;