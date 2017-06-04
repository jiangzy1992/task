<?php
define('ACC',true);

require('./controller/init.php');


//1.得到newsModel实例
$news = new newsModel();


//2.通过action的值做地应操作

switch($_GET['action']){
	case "add"://增加操作
	$newstitle = $_POST['newstitle'];
	$newscontent = $_POST['newscontent'];
	$cat = $_POST['cat'];
	$data = array(  'newstitle'=>$newstitle,
		            'newscontent'=>$newscontent,
		            'cat'=>$cat
		            );
	if($news->addNews($data)) {
	    echo json_encode(array('msg'=>'提交成功','errorCode'=>'ok','address'=>'../index.php'));
		} else {
	    echo json_encode(array('msg'=>'提交失败','errorCode'=>'no','address'=>'../contentAdd.php'));
		}
	break;

	//删除操作
	case "del":
	$id = $_GET['id'];
	$news->delNews($id);
	header("Location:index.php");
	break;
	
	case "edit":
	//1.获取表单信息
	$newstitle = $_POST['newstitle'];
	$newscontent = $_POST['newscontent'];
	$cat = $_POST['cat'];
	$id = $_POST['id'];
	$data = array(	'newstitle'=>$newstitle,
		            'newscontent'=>$newscontent,
		            'cat'=>$cat,
		            'id'=>$id
		);
	if($news->editNews($data)){
		echo "修改成功";
		header("Location:index.php");
	}else{
		echo "修改失败";
		window.history.back();
	}
	break;
}







