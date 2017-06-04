 define(function(require, exports, module) {
	
	require('jquery');

	//banner轮播特效
  	var banner = require('./special/banner');

  	//顶部导航下拉菜单 首页 职业课程等等……
  	var head_down = require('./special/head_down')

  	//banner左侧鼠标滑过下拉选项卡（左侧下拉菜单）

  	var left_down = require('./special/left_down')

  	//banner右下角的tab切换选项卡 

  	var right_tab = require('./special/right_tab')

  	//公开课选项卡切换及课程推荐选项卡切换
  	 var open_tab = require('./special/open_tab')

  	//按键轮播效果，banner下课程，合作企业轮播，合作院校轮播，新闻媒体轮播

  	var carousel = require('./special/carousel')



});