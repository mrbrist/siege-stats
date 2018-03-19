var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(err, req, res, next) {
  //res.render('index', { title: 'siege-stats' });
  res.status(err.status || 500);
  res.render('error');
});

module.exports = router;
