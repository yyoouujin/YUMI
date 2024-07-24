const express = require("express");
const router = express.Router();


//login : http://localhost:3000/member/login?email=yujin
router.get("/login", (req, res) => {
    const {email, pw} = req.query;
    console.log(email);
    req.session.email = email;
    
    req.session.save( (err) => {
        if (err) throw err;
        res.redirect("/user");
    });
    
});


//logout
router.get("/logout", (req, res) => {
    res.send("Log Out");
})


module.exports = router;