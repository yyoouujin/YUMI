const express = require("express");
const router = express.Router();

const mysql = require("../mysql/pool");

// //게시글 전체조회
// router.get("/", (req, res) => {
//     mysql.query("boardList").then(result => res.send(result));
// });

//게시글 전체조회 2
router.get("/", (req, res) => {
    mysql.query("boardList2").then(result => res.send(result));
});

//댓글 조회
router.get("/comment/:no", async function (req, res) {  
    let result = await mysql.query("commentInfo", req.params.no); 
    res.send(result);
})

//게시글 단건조회
router.get("/:no", async function (req, res) {  
    let result = await mysql.query("boardInfo", req.params.no); 
    res.send(result);
})
//게시글 등록
router.post("/", async function (req, res) { 
    let result = await mysql.query("boardInsert", req.body);
    res.send(result); 
});

//게시글 수정
router.put("/:no", async function (req, res) {  
    let result = await mysql.query("boardUpdate", [req.body,req.params.no]); 
    res.send(result);
});

//게시글 삭제
router.delete("/:no", async function (req, res) { 
    let result = await mysql.query("boardDelete", req.params.no); 
    res.send(result);
});


module.exports = router;