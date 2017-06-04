（一）.sql注入防御：
1.修改数据库，ID长度最多为3(int类型)；
2.在models/newsSql.js和models/userSql.js文件中查询参数都以?形式存在，占位；

（二）.XSS防御：
1.前台home.js文件中，AJAX请求url的参数使用encodeURIComponent进行编码；
2.后台express中，接收的参数先用decodeURIComponent解码，然后使用自定义的html_encode将特殊字符进行转码，存储在mysql数据库；
3.前台读取数据库中的数据，自动将转码的特殊字符变成相应的html

我测试的情况有：
<img src=0 onerror=alert(0)>
<script>alert(1)</script>
单引号，双引号，且（&） 换行 \ /
均通过测试，正常显示在文本中，不弹框。

（三）.CSRF防御：
使用了csurf插件进行验证token

PS:在localhost页面可以使用注册后来进行登录，也可以使用我预留的帐号：admin  密码：123
