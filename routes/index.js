var express = require('express');
var router = express.Router();
var frontControl = require('../control/frontCtrl');

// 前端首页
router.get('/', frontControl.index);
router.get('/index', frontControl.index);
// 前端登录页
router.get('/login', frontControl.showLogin);
// 前端三国杀FAQ
router.get('/tkd', frontControl.showTkd);
// 前端简历页面
router.get('/resume', frontControl.showResume);


router.get('/users/index', frontControl.index);
// 用户登录异步请求
router.route('/user/login')
.get(frontControl.login)
.post(frontControl.loginPost);
// 用户注销
// 用户登录异步请求
router.get('/user/logout', frontControl.logout);

// ajax 测试后台接口
router.get('/test_get', frontControl.testGet);
router.get('/ajax_page', frontControl.testGetPage);
router.post('/test_post', frontControl.testPost);


module.exports = router;
