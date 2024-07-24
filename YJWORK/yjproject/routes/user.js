const express = require("express");
const router = express.Router();

/*
 1) req.params
    : 미리 예상된 변수의 값을 읽어온다
    http://localhost:3000/user/yujin
 */
router.get('/:username', (req, res) => {
    const username = req.params.username;
    res.send("Router get " + username);
});

/*
2) req.query
    : querystring 에 포함된 파라미터의 값을 읽는다
    http://localhost:3000/user?page=8&search=yujin
*/
router.get("/", (req, res) => {
    const page = req.query.page;
    const search = req.query.search;
    const data = req.query; //객체로 저장된다

    //세션읽기
    const email = req.session.email;
    
    //쿠키읽기
    console.log('cookie name : ', req.cookies.cookie);

    //쿠키저장
    res.cookie("email", email, { expires: new Date(Date.now() + 15000) }); //15초 뒤 이메일 지워지는 것 확인
    res.send(`user query: ${email}`);
    
    //console.log(data);
    //res.send("Page : " + page + ' / Search : ' + search);
});

/*
3) req.body
    : JSON 등의 바디데이터를 담을 때 사용
    (주로 POST로 유저의 정보 또는 파일 업로드를 보냈을 때)
    express.json(), express.urlencoded()와 같은 미들웨어를 사용
        미들웨어? : 데이터를 주고받을 수 있도록 중간에서 매개역할을 해줌
*/
router.post("/", (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const addr = req.body.addr;
    res.send(`전설의,,,이름은,,,${addr} 출신의,,,  ${username} `);
});

/*
4) req.body + req.query
    : 주로 PUT으로 요청 데이터를 사용해서 서버의 데이터를 수정하거나 생성할 때 사용
*/
router.put("/:userid", (req, res) => {
    const userid = req.params.userid;
    const result = { ...req.body, userid }; //기존 req.body 값들에 userid의 값을 추가
    res.send(result);
});

/*
5) delete
    : 삭제하고자 하는 파라미터의 값을 지우면 된다
*/
router.delete("/:userid", (req, res) => {
    const userid = req.params.userid;
    res.send(`user delete where id is ${userid}`);
})

//라우터 내보내기
module.exports = router;

/*
CRUD 간단히 정리
    1) GET
        : 조회 - 서버로부터 데이터 취득
    2) POST
        : 등록 - 서버에 데이터 추가, 작성
    3) PUT
        : 수정 - 서버의 데이터를 갱신, 작성
    4) DELETE
        : 삭제 - 서버의 데이터를 삭제
*/
