var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'test입니당' });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
