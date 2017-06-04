var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var csrf = require('csurf');

var routes = require('./routes/index');
var news = require('./routes/news');
var ejs = require('ejs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//开启cookie
app.use(cookieParser());
//开始session
app.use(session({
  secret: 'csrf',
  resave: true,
  saveUninitialized: true
}));
app.use(csrf({cookie: true}));
app.use(express.static(path.join(__dirname, 'public')));


// 输出日志到目录
var fs = require('fs');
var accessLogStream = fs.createWriteStream(__dirname + '/log/access.log', {flags: 'a',  encoding:'utf8'}); // 记得要先把目录建好，不然会报错
app.use(logger('combined', {stream: accessLogStream}));


app.use('/', routes);
app.use('/signUp', routes);
app.use('/home', routes);
app.use('/news', news); // 自定义cgi路径
app.use('/news/cat1', news);
app.use('/news/cat2', news);
app.use('/news/cat3', news);
app.use('/news/cat4', news);
app.use('/news/cat5', news);
app.use('/news/cat6', news);
app.use('/news/cat7', news);
app.use('/news/cat8', news);
app.use('/news/cat9', news);


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
};

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
