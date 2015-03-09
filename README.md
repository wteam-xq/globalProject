
### 本人项目 后台代码（三国杀faq 个人网站 综合代码）
* 技术点： mongodb express bootstrap jquery

#### 图片资源百度网盘地址：[图片资源](http://pan.baidu.com/s/1i35oVFf) 

（随时更新）

#### 本地部署（win8 64bit为例）
* 安装nodeJs
* 安装mongodb（最好配置成window服务），生成globalDb数据库、生成users表
  * 手动安装mongodb, 下载地址： [mongodb下载](http://pan.baidu.com/s/1qWG5Lr2)
  * mongodb 配置以及设置成windows服务：[配置mongodb](http://blog.csdn.net/liusong0605/article/details/10574863)
  * mongodb shell 控制台使用: [mongodb 基本命令](http://www.cnblogs.com/xusir/archive/2012/12/24/2830957.html)
```Bash
mongo
MongoDB shell version: 2.6.5
connecting to: test

use globalDb
switched to db globalDb

db.createCollection("users")
{ "ok" : 1}

```
##### ps: 如果配置 mongodb 成window服务 遇到“服务名无效” 的问题， 请单击左下角"开始"图标-》所有程序-》附件-》右键“命令提示符” 以管理员身份运行

* nodejs 全局安装bower（可以顺便全局安装node-dev）动态获取最新bootstrap库，然后将 jquery.min.js、bootstrap.min.js、bootstrap.min.css放入public/components目录
  * 安装 对应模块
  ```Bash
  npm install -g bower 
  npm install -g node-dev
  ```
  * 到项目目录 使用bower安装bootstrap
  ```Bash
  bower install bootstrap
  ```

* 进入工程目录 cmd: npm install 安装node_modules的依赖模块
```Bash
npm install
```

* 工程目录下 npm start（或 node-dev bin/www）启动项目, ps: nodejs 的 dev库实现 修改node.js文件保存后自动重启node 
```Bash
npm start
```
```Bash
node-dev bin/www
```

#### 开发计划：
*03.08 - 03.14 1.完成用户登录； 2.三大块前后台基本页面UI。 3.后台啊规则页添加 百度编辑器， 弹出框垂直居中。
