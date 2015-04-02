var tkdCtrol = {
}
var _ = require('underscore');
var formidable = require('formidable');
var fs = require('fs');
var Rule = require('../models/TkdRule');

/**************************三国杀后台逻辑************************************/
// 查询用户列表
tkdCtrol.tkdList = function(req, res) {
  res.render('admin/tkd_list', {
      title: '三国杀列表页' 
    });
};
// 上传图标
tkdCtrol.uploadIco = function(req, res) {
  // parse a file upload
  var form = new formidable.IncomingForm(),files=[],fields=[],docs=[];
  
  //存放目录
  form.uploadDir = 'public/upload_imgs/';

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

tkdCtrol.ruleAdd = function(req, res){};

tkdCtrol.ruleUpdate = function(){req, res};

/**************************三国杀end**********************************/

module.exports = tkdCtrol