  	//banner右下角的tab切换选项卡 
  	define(function(require, exports, module) {
  	    var $ = jQuery;

  	    //banner右下变的下拉菜单及其tab键切换

  	    $(document).ready(function() {
  	        $(".conrightbot-star li").each(function(index) {
  	            $(this).mouseenter(function() {
  	                $(".conrightbot_list").css("display", "block");
  	                $("#crblist li").eq(index).addClass("crblist_active");
  	                $("div[class^='conrightbot_con']").eq(index).addClass("conrightbot_show")
  	            });
  	            $(".conrightbot_list ").mouseleave(function() {
  	                $(this).css("display", "none");
  	                $("#crblist li").eq(index).removeClass("crblist_active");
  	                $("div[class^='conrightbot_con']").eq(index).removeClass("conrightbot_show")
  	            });
  	        });

  	        $("#crblist li").each(function(index) {
  	            $(this).mouseenter(function() {
  	                $('#crblist li').removeClass("crblist_active");
  	                $(this).addClass("crblist_active");
  	                $("div[class^='conrightbot_con']").removeClass("conrightbot_show");
  	                $("div[class^='conrightbot_con']").eq(index).addClass("conrightbot_show")
  	            });
  	        });


  	    });

  	});
