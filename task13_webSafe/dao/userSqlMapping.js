// dao/userSqlMapping.js

var user = {
	insert: 'INSERT INTO user(id,name,pass) VALUES(0,?,?)',
    queryCount: 'SELECT COUNT(1) AS num FROM user WHERE name = ?',
    queryByusername: 'SELECT * FROM user WHERE name = ?'
}

module.exports = user;