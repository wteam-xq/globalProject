var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// 数据库保存用户登录信息
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);

var dbOptions = require('./dbConfig');
var routes = require('./routes/index');
var admin = require('./routes/admin');

var app = express();

// 链接数据库
var db = mongoose.connect(dbOptions.url);
// 连接数据库（数据库设置了密码）
// var dbUrl='mongodb://' + dbOptions.username+':'+dbOptions.password+'@'+dbOptions.host+':'+dbOptions.port+'/'+options.dbName;
// mongoose.connect(dbUrl);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(dbOptions.cookieSecret));
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:3600000},
    secret: dbOptions.cookieSecret,
    store: new mongoStore({
        db: dbOptions.dbName,
        url: dbOptions.url
    })
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use('/', routes);
app.use('/admin', admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
