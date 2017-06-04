<?php
defined('ACC')||exit('Access Denied');

// 初始化脚本,专门负责环境的侦测与配置


// 0: 先探测自身所在的位置

/*
在win下,路径
D:\www\info 没有问题
D:/www/info 没有问题

在linux 路径
/var/www/info ,正斜线


因此:统一转成正斜线 ,用linux的格式

*/

// 检测根目录,并定义成常量
define('ROOT',str_replace('controller/init.php','',str_replace('\\','/',__FILE__)));



// 包含公共的底层文件
require(ROOT . 'controller/mysql.php');
require(ROOT . 'controller/configClass.php');
require(ROOT . '/model/Model.php');


function __autoload($classname) {
    require(ROOT . 'model/' . $classname . '.php');
}

