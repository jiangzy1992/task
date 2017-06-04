// dao/newsDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $xss = require('../util/xss')
var $sql = require('./newsSqlMapping');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res) {
        // 获取前台页面传过来的参数
        var param = req.body;
        if (param.newstitle == null || param.newscontent == null || param.cat == null) {
            jsonWrite(res, undefined);
            return;
        }

        pool.getConnection(function(err, connection) {
            // 建立连接，向表中插入值
            // 'INSERT INTO news(newstitle, newscontent, cat) VALUES(0,?,?)',
            connection.query($sql.insert, [
                $xss.html_encode(decodeURIComponent(param.newstitle)),
                $xss.html_encode(decodeURIComponent(param.newscontent)),
                $xss.html_encode(decodeURIComponent(param.cat))
                ], function(err, result) {
                if(result) {
                    result = {
                        code: 200,
                        msg:'增加成功',
                        id: result.insertId
                    };
                }

                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        })
    },
    delete: function (req, res) {
        // delete by Id
        pool.getConnection(function(err, connection) {
            var id = parseInt(+req.query.id);
            connection.query($sql.delete, id, function(err, result) {
                if(result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg:'删除成功',
                        id: result.insertId
                    };
                } else {
                    result = void 0;
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    update: function (req, res) {
        // update by id
        var param = req.body;
        if (param.newstitle == null || param.newscontent == null || param.newsid == null) {
                jsonWrite(res, undefined);
                return;
            }

        pool.getConnection(function(err, connection) {
            connection.query($sql.update, [
                $xss.html_encode(decodeURIComponent(param.newstitle)),
                $xss.html_encode(decodeURIComponent(param.newscontent)),
                $xss.html_encode(decodeURIComponent(param.newsid))
                ], function(err, result) {
                // 使用页面进行跳转提示
                if(result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg:'修改成功'
                    };
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryByCat: function (req, res) {
        var cat = parseInt(+req.query.cat); // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryByCat, cat, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryById: function (req, res) {
        var id = parseInt(+param.id); // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryById, id, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryAll: function (req, res) {
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryAll, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    }

};
