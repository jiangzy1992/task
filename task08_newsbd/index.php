<?php
define('ACC',true);

require('./controller/init.php');


// 得到newsModel实例，并判断是否从地址栏上取得了参数
$news = new newsModel();
if(is_array($_GET)&&count($_GET)>0){
	$list = $news->news_cat($_GET['cat']);
}else{
	$list = $news->find();
}

include(ROOT . 'view/index.html');


?>