var express = require('express');
var router = express.Router();


var posts = []
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/servant', function(req, res, next) {
  res.render('servant');
});


router.get('/nero', function(req, res, next) {
  if(req.session.comments == undefined) {
    req.session.comments = []
  }
  const data = {
    comments: req.session.comments
  }
  res.render('nero', data);
});

router.post('/nero', function(req, res, next) {
  if(!req.session.comments) {
    req.session.comments = [];
  }
  req.session.comments.unshift(req.body.comment)
  const data = {
    comments:req.session.comments
  }
  res.render('nero', data);
})


module.exports = router;
