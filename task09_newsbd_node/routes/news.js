var express = require('express');
var router = express.Router();

var newsDao = require('../dao/newsDao');

/* GET news listing. */
router.get('/', function(req, res) {
    res.render('news', { title: '百度新闻' });
});

router.get('/cat1', function(req, res) {
    res.render('cat1', { title: '推荐新闻' });
});

router.get('/cat2', function(req, res) {
    res.render('cat2', { title: '百家新闻' });
});

router.get('/cat3', function(req, res) {
    res.render('cat3', { title: '本地新闻' });
});

router.get('/cat4', function(req, res) {
    res.render('cat4', { title: '图片新闻' });
});

router.get('/cat5', function(req, res) {
    res.render('cat5', { title: '娱乐新闻' });
});

router.get('/cat6', function(req, res) {
    res.render('cat6', { title: '社会新闻' });
});

router.get('/cat7', function(req, res) {
    res.render('cat7', { title: '军事新闻' });
});

router.get('/cat8', function(req, res) {
    res.render('cat8', { title: '互联网新闻' });
});

router.get('/cat9', function(req, res) {
    res.render('cat9', { title: '科技新闻' });
});


module.exports = router;
