// dao/newsSqlMapping.js
// CRUD SQL语句
var news = {
    insert:'INSERT INTO news(newstitle, newscontent, cat) VALUES(?,?,?)',
    update:'update news set newstitle=?, newscontent=? where id=?',
    delete: 'delete from news where id=?',
    queryByCat:'select * from news where cat=?',
    queryById: 'select * from news where id=?',
    queryAll: 'select * from news'
};

module.exports = news;