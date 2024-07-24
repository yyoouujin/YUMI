    // 1) 서버구축 : express
const express = require("express");
const app = express();
const port = 3000;

    // 2) 라우터 : route (frontController를 분할해서 사용하는 개념)
const userRouter = require("./routes/user.js");
const productRouter = require("./routes/product.js");
const loginRouter = require("./routes/login.js");


    // 5) morgan : HTTP 요청 로그를 남김
const morgan = require("morgan");

    // 6) cors
const cors = require('cors');
app.use(cors());

    // 7) cookie-parser
const cookieParser = require('cookie-parser');

    // 3) body-parse : HTTP 요청 body를 해석 (라우팅 전에 써줘야함)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

    // 4) 세션 : : 서버 기반의 세션을 생성 
    //브라우저와 생애주기를 함께한다 (브라우저 창이 종료되면 세션도 종료)
const session = require("express-session"); 
const fileStore = require("session-file-store")(session); 
    
    // 8) multer : multi-part 폼 데이터를 처리
const multer = require("multer");
const upload = multer({ dest: 'c:/ujin' });




    // 4) 세션
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

app.use(morgan("dev"));

app.use(cookieParser());

app.post("/upload", upload.single("profile"), (req, res) => {
    console.log(req.file); //파일정보
    const originalname = req.file.originalname;
    const filename = req.file.filename;
    res.send(`upload success ${originalname}, ${filename}`);
  });

    // 2) 라우터 요청분배 ("패스명", "라우터명")
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/member", loginRouter);

app.listen(port, () => {
    console.log(`==End Msg : server running http://localhost:${port}==`);
});

