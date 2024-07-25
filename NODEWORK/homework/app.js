const express = require("express");
const app = express();
const port = 3000;

//라우터 선언
const boardRouter = require("./routes/board.js");

const morgan = require("morgan");

const cors = require('cors');
app.use(cors());

const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const session = require("express-session");
const fileStore = require("session-file-store")(session);

const multer = require("multer");
const upload = multer({ dest:'c:/ujin' });

app.use(
    session({
        secret:"secret key",
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


//라우터 요청분배
app.use("/board", boardRouter);

app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
})