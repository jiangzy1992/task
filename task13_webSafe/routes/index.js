var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var newsDao = require('../dao/newsDao');
var userDao = require('../dao/userDao');


router.get('/', function(req, res) {
    if (req.cookies.islogin) {
        console.log('index.js-----cookies:' + req.cookies.islogin);
        req.session.username = req.cookies.islogin;
    }

    if (req.session.username) {
        console.log('index.js-----session:' + req.session.username);
        res.locals.username = req.session.username;
    } else {
        res.redirect('/login');
        return;
    }

    res.render('index', { title: '后台管理系统', csrfToken: req.csrfToken()});
});


router.get('/login', function(req, res) {
    res.render('login', { title: '后台管理系统用户登录', csrfToken: req.csrfToken()});
})

router.post('/login', function(req,res) {
    var userName = req.body['username'],
        userPwd = req.body['password'],
        isRem = req.body['chbRem'],
        md5 = crypto.createHash('md5');

    userDao.getUserByUserName(userName, function(err, results) {
        if (results == '') {
            res.locals.error = '用户不存在';
            res.render('login', { title: '后台管理系统用户登录', csrfToken: req.csrfToken()});
            return;
        }

        UserPwd = md5.update(userPwd).digest('hex'); //用户密码进行md5加密
        if (results[0].name != userName || results[0].pass != UserPwd) {
            res.locals.error = '用户名或密码有误';
            res.render('login', { title: '后台管理系统用户登录', csrfToken: req.csrfToken()});
            return;
        }

        if (isRem) {
            res.cookie('islogin', userName, { maxAge: 60000 });
        }

        res.locals.username = userName;
        req.session.username = res.locals.username;
        res.redirect('/');
        return;

    });
})

router.get('/signUp', function(req, res) {
    res.render('signUp', { title: '注册', csrfToken: req.csrfToken()});
})

router.post('/signUp', function(req, res) {
    var userName = req.body['username'],
        userPwd = req.body['password'],
        userRePwd = req.body['Rpassword'],
        md5 = crypto.createHash('md5');

    userPwd = md5.update(userPwd).digest('hex');

    var newUser = new userDao({
        username: userName,
        password: userPwd
    });

    //检查用户名是否已经存在
    userDao.getUserNumByName(newUser.username, function(err, results) {

        if (results != null && results[0]['num'] > 0) {
            err = '用户名已存在';
        }

        if (err) {
            res.locals.error = err;
            res.render('signUp', { title: '注册', csrfToken: req.csrfToken()});
            return;
        }

        newUser.save(function(err, result) {
            if (err) {
                res.locals.error = err;
                res.render('signUp', { title: '注册', csrfToken: req.csrfToken()});
                return;
            }

            if (result.insertId > 0) {
                res.locals.success = '注册成功,请点击   <a class="btn btn-link" href="/login" role="button"> 登录 </a>';
            } else {
                res.locals.error = err;
            }

            res.render('signUp', { title: '注册', csrfToken: req.csrfToken()});
        });
    });
})


// 增加用户
//TODO 同时支持get,post
router.post('/add', function(req, res, next) {
    newsDao.add(req, res, next);
});

router.get('/queryAll', function(req, res, next) {
    newsDao.queryAll(req, res, next);
});

router.get('/queryByCat', function(req, res, next) {
    newsDao.queryByCat(req, res, next);
});

router.get('/queryById', function(req, res, next) {
    newsDao.queryById(req, res, next);
});

router.get('/delete', function(req, res, next) {
    newsDao.delete(req, res, next);
});

router.post('/update', function(req, res, next) {
    newsDao.update(req, res, next);
});


module.exports = router;
