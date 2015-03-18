var adminCtrol = {
}
//  数据库model
var User = require('../models/User');
// 日期格式化
var moment = require('moment');

// 后台接口原数据显示
adminCtrol.testList = function(req, res) {
  User.fetch(function(err, users){
    if (err){
      res.json({error: '查询异常'});
    }else{
      res.json(users);
    }
  });
}

// 后台首页菜单
adminCtrol.adminIndex = function(req, res) {
  res.render('admin/index', { title: 'admin_index'});
}

/**************************三国杀************************************/
// 查询用户列表
adminCtrol.tkdList = function(req, res) {
  res.render('admin/tkd_list', {
      title: '三国杀列表页' 
    });
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
    password: req.body.pas,
    email: req.body.email
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
      // 日期格式化
      var _date_str = moment(user.meta.updateAt).format('YYYY-MM-DD HH:mm:ss');
      user.updateAt = _date_str
      res.render('admin/user_update', {
        title: 'admin',
        user: user
      });
    }
  });
}
adminCtrol.updateUserPost = function(req, res) {
  var id = req.body.id;
  var userObj = {
    name: req.body.name,
    age: req.body.age,
    job: req.body.job,
    hobby: req.body.hobby,
    password: req.body.pas,
    email: req.body.email
  };
  User.updateInfo(id, userObj, function(err, updateCount){
    if (err){
      console.log(err.error, '   错误码：' + updateCount);
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
      res.json({error:err});
    }else{
      res.json({success: true});
    }
  });
}

// 查询用户(暂时为通过邮箱查询)
adminCtrol.searchUser = function(req, res) {
  var email = req.query.email;
  User.findByEmail(email, function(err, user){
    if (err){
      res.json({error:err});
    }else{
      res.json(user);
    }
  });
}

/**************************用户组end************************************/

module.exports = adminCtrol