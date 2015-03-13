var express = require('express');
var router = express.Router();
var frontControl = require('../control/frontCtrl');

/* GET home page. */
router.get('/', frontControl.index);

/* GET index page. */
router.get('/index', frontControl.index);

router.get('/login', frontControl.login);

/* 用户组首页. */
router.get('/users/index', frontControl.index);

module.exports = router;
