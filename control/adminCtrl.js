var adminCtrol = {
}
//  数据库model
var User = require('../models/User');
// 日期格式化
var moment = require('moment');
var _ = require('underscore');
var formidable = require('formidable');
var fs = require('fs');

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
// 上传图标
adminCtrol.uploadIco = function(req, res) {
  // parse a file upload
  var form = new formidable.IncomingForm(),files=[],fields=[],docs=[];
  
  //存放目录
  form.uploadDir = 'uploads/';

  // 接收到前端传过来的文件时事件
  form.on('field', function(field, value) {
    fields.push([field, value]);
  // 前端文件读取时事件
  }).on('file', function(field, file) {
    
    files.push([field, file]);
    docs.push(file);

    var types = file.name.split('.');
    var date = new Date();
    var ms = Date.parse(date);
    fs.renameSync(file.path, "public/upload_imgs/files" + ms + '_'+file.name);
  // 文件读取结束事件
  }).on('end', function() {
    
    res.writeHead(200, {
      'content-type': 'text/plain'
    });
    var out={Resopnse:{
      'result-code':0,
      timeStamp:new Date(),
    },
    files:docs
    };
    var sout=JSON.stringify(out);
    res.end(sout);
  });

  // 文件解析事件
  form.parse(req, function(err, fields, files) {
    err && console.log('formidabel error : ' + err);
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
      res.json({error: '根据Id查找用户信息，出错'});
    }else{
      // 日期格式化
      var _date_str = moment(user.meta.updateAt).format('YYYY-MM-DD HH:mm:ss');
      var tempUser = {updateAt: _date_str, user: user};
      res.json(tempUser);
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
      res.redirect('/admin/users');
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