var adminCtrol = {
}
var User = require('../models/User');



// 后台接口原数据显示
adminCtrol.testList = function(req, res) {
  User.fetch(function(err, users){
    if (err){
      console.log('查询异常');
    }else{
      res.json(users);
    }
  });
}

// 后台首页菜单
adminCtrol.adminIndex = function(req, res) {
  res.render('admin/index', { title: 'admin_index' });
}

/**************************三国杀************************************/
// 查询用户列表
adminCtrol.tkdList = function(req, res) {
  res.render('admin/tkd_list', {
      title: '三国杀列表页' 
    });
};
// 增加用户
adminCtrol.addTkdRule = function(req, res) {
  res.render('admin/tkd_rule_add', { title: '规则添加' });
};
// 增加用户
adminCtrol.updateTkdRule = function(req, res) {
  res.render('admin/tkd_rule_add', { title: '规则添加' });
};

/**************************三国杀end**********************************/


/**************************个人简历************************************/
// 个人简历
adminCtrol.resumeIndex = function(req, res) {
  res.render('admin/resume_index', {
      title: '个人简历列表页' 
    });
};

/**************************个人简历end**********************************/



/**************************用户组************************************/
// 查询用户列表
adminCtrol.userList = function(req, res) {
  User.fetch(function(err, users){
    if (err){
      console.log('查询异常');
    }else{
      res.render('admin/user_list', { 
        title: 'admin' ,
        users: users
      });
    }
  });
};

// 增加用户
adminCtrol.addUser = function(req, res) {
  res.render('admin/user_add', { title: 'user_add' });
}
// 提交新增用户请求
adminCtrol.addUserPost = function(req, res, next) {
  var userObj = {};
  userObj = {
    name: req.body.name,
    age: req.body.age,
    job: req.body.job,
    hobby: req.body.hobby,
    password: req.body.pas
  };
  User.createInfo(userObj, function(err, user){
    if (err){
      console.log('新增用户信息错误');
    }else{
      if (user && user.name){
        res.redirect('/admin/users');
      }
    }
  });
}
// 修改用户信息
adminCtrol.updateUser = function(req, res) {
  var id = req.query.id;
  User.findById(id, function(err, user){
    if (err){
      console.log('根据Id查找用户信息，出错');
    }else{
      res.render('admin/user_update', {
        title: 'admin',
        user: user
      });
    }
  });
}
adminCtrol.updateUserPost = function(req, res) {
  var id = req.body.id;
  var user = {
    name: req.body.name,
    age: req.body.age,
    job: req.body.job,
    hobby: req.body.hobby
  };
  User.updateInfo(id, user, function(err, updateCount){
    if (err){
      console.log('更新用户信息，出错');
    }else{
      res.redirect('/admin/users');
    }
  });
}

// 删除用户
adminCtrol.deleteUser = function(req, res) {
  var id = req.body.id;
  User.deleteInfo(id, function(err, updateCount){
    if (err){
      // console.log('删除用户信息,出错');
      res.json({error:err});
    }else{
      res.json({success: true});
    }
  });
}
/**************************用户组end************************************/

module.exports = adminCtrol