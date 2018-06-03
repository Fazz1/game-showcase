var express = require('express');
var router = express.Router();

const users = require('./users');
const showcases = require('./showcases');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/users', users);
router.use('/api/showcases', showcases);

module.exports = router;
