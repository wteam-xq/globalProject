var User = require('../models/User');
var webCtrol = {
}

webCtrol.index = function(req, res){
  User.fetch(function(err, users){
    if (err){
      console.log('查询异常');
    }else{
      res.render('users/index', { 
        title: '用户组页面' ,
        users: users
      });
    }
  });
}
webCtrol.login = function(req, res){
  res.render('login', { 
    title: '用户登录' 
  });
}

module.exports = webCtrol