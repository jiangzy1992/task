<?php
define('ACC',true);

require('./controller/init.php');


// 得到newsModel实例
$news = new newsModel();

$list = $news->find();
$cnt = $news->count();

include(ROOT . 'view/index.html');


?>