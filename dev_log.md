### 项目日志

#### 开发计划：
* 03.08 - 03.14 1.完成用户登录； 2.三大块前后台基本页面UI。 3.后台啊规则页添加 百度编辑器， 弹出框垂直居中。


#### 开发日志
* 03-11 打开 microBlog 项目， 出现 “Please ensure that you set the default write concern for the database”提示！！
* 方案 : 网上已有标准答案:
```javascript
module.exports = new Db(
  settings.dbName, 
  new Server(settings.host, Connection.DEFAULT_PORT, {})
);
```
改为
```javascript
module.exports = new Db(
  settings.dbName, 
  new Server(settings.host, Connection.DEFAULT_PORT, {safe: true})
);
```
* 'connect-mongo'模块还是调用了 'mongodb'模块， 以上问题为 “mongodb”使用事项（ps: mogooose模块已经在内部整合'mongodb'所以不会有该问题）

* 03-13 windows 上无法安装加密模块 npm install bcrypt， 报错： node-gyp rebuild
* 方案： windows上用bcrypt-nodejs 替代 bcrypt, 另 只能用同步加密法

* 03-13 mongoose Schema.pre('save', callback)数据更新时， 该方法不会被调用。。。
* 方案： 更新不用 update 方法， 改用save方法；（先findById 然后 用 underscore覆盖）