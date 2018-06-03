var express = require('express');
var router = express.Router();

const controller = require('../controllers/UserController');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/checkAuth', controller.checkAuth);
router.post('/signup', controller.signup);
router.post('/signin', controller.signin);
router.get('/logout', controller.logout);

module.exports = router;
