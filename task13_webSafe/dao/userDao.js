var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $user = require('./userSqlmapping');
var DB_NAME = $conf.mysql.database;

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

function User(user) {
    this.username = user.username;
    this.password = user.password;
};
module.exports = User;

pool.getConnection(function(err, connection) {

    var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function(err) {
        if (err) {
            console.log("数据库连接失败: " + err.message);
            return;
        }
        console.log('数据库连接成功');
    });

    //保存数据
    User.prototype.save = function save(callback) {
        var user = {
            username: this.username,
            password: this.password
        };

        connection.query($user.insert, [user.username, user.password], function(err, result) {
            if (err) {
                console.log("insertUser_Sql Error: " + err.message);
                return;
            }

            connection.release();

            console.log("连接已释放，invoked[save]");
            callback(err, result);
        });
    };

    //根据用户名得到用户数量
    User.getUserNumByName = function getUserNumByName(username, callback) {

        connection.query($user.queryCount, [username], function(err, result) {
            if (err) {
                console.log("getUserNumByName Error: " + err.message);
                return;
            }

            // connection.release();

            console.log("连接未释放，invoked[getUserNumByName]");
            callback(err, result);
        });
    };

    //根据用户名得到用户信息
    User.getUserByUserName = function getUserByUserName(username, callback) {

        connection.query($user.queryByusername, [username], function(err, result) {
            if (err) {
                console.log("getUserByUserName Error: " + err.message);
                return;
            }

            // connection.release();

            console.log("连接未释放，invoked[getUserByUserName]");
            callback(err, result);
        });
    };
});
