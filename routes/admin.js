var express = require('express');
var router = express.Router();
var adminControl = require('../control/adminCtrl');

router.get('/test', adminControl.testList);

// 后台首页菜单
router.get('/', adminControl.adminIndex);
router.get('/index', adminControl.adminIndex);

// 三国杀后台列表页
router.get('/tkd', adminControl.tkdList);
router.get('/tkd/index', adminControl.tkdList);

router.route('/tkd/addRule')
.get(adminControl.addTkdRule);

// 个人简历后台列表页
router.get('/resume', adminControl.resumeIndex);
router.get('/resume/index', adminControl.resumeIndex);

/* 用户组后台列表页 */
router.get('/users', adminControl.userList);

/*users add. */
router.route('/user/add')
.get(adminControl.addUser)
.post(adminControl.addUserPost);

/*users update. */
router.route('/user/update')
.get(adminControl.updateUser)
.post(adminControl.updateUserPost);

/*users delete */
router.post('/user/delete', adminControl.deleteUser);

module.exports = router;
