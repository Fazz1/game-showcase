var express = require('express');
var router = express.Router();
var checkAuth = require('../middlewares/middleware').checkAuth;

const controller = require('../controllers/ShowcaseController');

router.get('/all', controller.all);
router.use(checkAuth);
router.post('/create', controller.create);
router.post('/delete', controller.delete);
router.post('/update', controller.update);


module.exports = router;
