const express = require("express");
const app = express();
const port = 3000;
//따로 만든 라우터를 넣어준다
const userRouter = require("./routes/user.js");
const productRouter = require("./routes/product.js");
//cors : 모든 도메인 허용
const cors = require('cors') 
app.use(cors());

//morgan : 로그를 찍어준다
const morgan = require("morgan");

//node.js 에서의 session은 메모리 또는 파일의 형태로 저장이 가능하다
const session = require("express-session"); 
const fileStore = require("session-file-store")(session); 



//정적 컨텐츠가 있는 폴더명을 기재한다 -> http://localhost:3000/images/모코코.jpg
app.use(express.static("public")); 

//urlencoded : 라우팅 하기 전에 body parse를 붙여준다 (req.body)
app.use(express.urlencoded({ extended: false })); 

//json : body 에 들어있는 값들을 모두 파싱해준다 (이것도 라우팅 하기전에 써줘야함)
app.use(express.json());

//파싱이 끝나고 출력 (console.log 찍어준다)
/*
tiny 
=>
   간단히 출력 : GET /member?page=1&search=morganwow 200 0.377 ms - 29

combined - 자세히 출력
=>
  1 - - [24/Jul/2024:05:21:15 +0000] "GET /member HTTP/1.1" 304 - "http://127.0.0.1:5500/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"

app.use(morgan("combined"));
*/

/*
morgan 출력 데이터 타입을 정해서 사용 가능
date 의 default 타입은 web!
https://www.npmjs.com/package/morgan#dateformat
*/
app.use(morgan(":date :method :url :response-time"));


/*
//세션 -> sessions 폴더에 정보가 저장된다
git에 올릴 땐 module 과 함꼐 빼는게 좋다!
sessions/
node_modules/

app.use( 
  session({ 
    secret: "secret key", 
    resave: false, 
    saveUninitialized: true, 
    cookie: { 
      httpOnly: true, 
      //secure: true, 
      maxAge: 60000, 
    }, 
    store: new fileStore(), 
  }) 
); 
*/

/*
body-parser -> 미들웨어의 한 종류
: 서로 다른 애플리케이션이 서로 통신하는 데 사용되는 소프트웨어(순서중요!)
+) 라우터도 미들웨어의 한 종류!
*/



/*
const router = express.Router();

1)
라우터 객체를 만들어서, app.route로 바로 사용 가능
2)
라우터 객체를 따로 만들어서 (route 폴더 내 product.js , user.js 등등..)
그 라우터 객체를 사용하는 방법
*/


//라우트 요청분배 : use()
app.use("/member",userRouter);
/*
userRouter 로 가서 /member 밑에 user.js 내 기재된 path
ex) 
http://localhost:3000/member/hello
입력 시 (POST) 방법으로 확인하면 'router post hi' 가 노출됨!
*/
app.use("/product",productRouter);


app.get("/", (req, res) => {
  res.send("hello world");
})

app.get("/yujin", (req,res) => {
  res.send("hello yujin");
});

/*
//route를 사용하면 메서드를 한 곳에 모아서 작성이 가능
app.route("/users")
.get((req, res) => {
  res.send("user get");
})
.post((req, res) => {
  res.send("user post");
})
.put((req, res) => {
  res.send("user put");
})
.delete((req,res) => {
  res.send("user delete");
})
*/

/*
post, put, delete 부메랑으로 실습
*/


app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
})