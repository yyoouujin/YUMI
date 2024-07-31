const express = require("express");
const app = express();
const port = 80;

//라우터 선언
const boardRouter = require("./routes/board.js");
const customerRouter = require("./routes/customer.js");

const morgan = require("morgan");
const cors = require('cors');
app.use(cors());
const cookieParser = require('cookie-parser');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const session = require("express-session"); 
const fileStore = require("session-file-store")(session); 
const multer = require("multer");
const upload = multer({ dest: 'c:/ujin' });

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


//라우터 요청분배
app.use("/board", boardRouter);
app.use("/customer", customerRouter);

app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
})