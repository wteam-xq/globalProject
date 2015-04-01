
### 本人项目 后台代码（三国杀faq 个人网站 综合代码）
=======
* 技术点： mongodb express bootstrap jquery


#### 图片资源百度网盘地址：[依赖库、图片资源](http://pan.baidu.com/s/1kTKeL6Z) （更新ing...）
=======

#### 本地部署（win7 64bit为例）
=======
* 确保本地已安装 git 以及 node 环境，在某文件夹 右键-》“git bash” 运行:
```Bash
git clone https://github.com/wteam-xq/globalProject 
```
* 安装mongodb（最好配置成window服务），生成globalDb数据库、生成users、tkdRule表
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
db.createCollection("tkdRule")
{ "ok" : 1}

```
*ps: 如果配置 mongodb 成window服务 遇到“服务名无效” 的问题， 请单击左下角"开始"图标-》所有程序-》附件-》右键“命令提示符” 以管理员身份运行*


* 取上述网盘里的文件夹放入项目对应目录下。

* 进入工程目录 cmd: npm install 安装node_modules的依赖模块
```Bash
npm install
```

* 工程目录下 npm start（或 node bin/www）启动项目
```Bash
npm start
```
```Bash
node bin/www
```