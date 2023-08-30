var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const db = {
    title : 'Hello',
    message : 'これは試験です。'
  }
  res.render('hello', db);
})

module.exports = router;

