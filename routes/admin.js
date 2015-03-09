var express = require('express');
var router = express.Router();
var adminControl = require('../control/adminCtrl');

router.get('/test', adminControl.testList);

// 后台首页菜单
router.get('/', adminControl.adminIndex);
router.get('/index', adminControl.adminIndex);

/*三国杀后台列表页*/
router.get('/tkd', adminControl.tkdList);
router.get('/tkd/index', adminControl.tkdList);
// 添加规则
router.route('/tkd/addRule')
.get(adminControl.addTkdRule);
// 更新规则
router.route('/tkd/updateRule')
.get(adminControl.updateTkdRule);

/*个人简历后台列表页*/
router.get('/resume', adminControl.resumeIndex);
router.get('/resume/index', adminControl.resumeIndex);


/* 用户组后台列表页 */
router.get('/users', adminControl.userList);
// 添加用户. 
router.route('/user/add')
.get(adminControl.addUser)
.post(adminControl.addUserPost);
// 更新用户 
router.route('/user/update')
.get(adminControl.updateUser)
.post(adminControl.updateUserPost);
// 删除用户
router.post('/user/delete', adminControl.deleteUser);

module.exports = router;
