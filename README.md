
### 本人项目 后台代码（三国杀faq 个人网站 综合代码）

* 技术点： mongodb express bootstrap jquery

=======

#### 本地部署（win7 64bit为例）

* 确保本地已安装 git 以及 node 环境
  * win7下安装git [git 安装教程地址](http://wenku.baidu.com/view/e7d838999b89680203d825ba)
  * ps：访问git、TortoiseGit安装包的网址可能需要翻墙， 如无法下载， 根据“msysgit” “TortoiseGit”搜索国内网站下载安装包。
  * window 下安装node [node 安装教程地址](http://jingyan.baidu.com/article/b0b63dbfca599a4a483070a5.html)

* 在某文件夹 右键-》“git bash” 运行以下命令行下载项目:
```Bash
git clone https://github.com/wteam-xq/globalProject 
```
* 安装mongodb（最好配置成window服务），生成globalDb数据库、生成users、tkdtkdrules表
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
db.createCollection("tkdrules")
{ "ok" : 1}

```

*ps: 如果配置 mongodb 成window服务 遇到“服务名无效” 的问题， 请单击左下角"开始"图标-》所有程序-》附件-》右键“命令提示符” 以管理员身份运行*


* 取[依赖库、图片资源](http://pan.baidu.com/s/1i33o2Mx)文件夹放入项目对应目录下。

* 进入工程目录 打开cmd运行 npm install 安装node_modules的依赖模块
```Bash
npm install
```

* 工程目录下 打开cmd运行 npm start（或 node bin/www）启动项目
```Bash
npm start
```
```Bash
node bin/www
```

* 首次进入后台创建用户， 需修改以下文件： globalProject/routes/admin.js
* ps: 没使用自动重启模块的话， 修改完需重新启动项目
```javascript
//检查用户是否已登录(修改前)
router.get('/*', checkLogin);


//检查用户是否已登录（修改后）
//router.get('/*', checkLogin);
```
