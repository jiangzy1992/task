//公开课选项卡切换

define(function(require, exports, module) {
    var $ = jQuery;

    //    公开课内容 翻页效果
    $(document).ready(function() {
        $(".cont_openlesson_weekday a").each(function(index) {
            $(this).mouseenter(function() {
                $(".cont_openlesson_weekday a").removeClass("openlesson_active");
                $(this).addClass("openlesson_active");
                $(".openlesson_con").removeClass("openlesson_show");
                $(".openlesson_con").eq(index).addClass("openlesson_show")
            });
        });
    });


    //课程推荐翻页效果
    $(document).ready(function() {
        $(".reco_nav a").each(function(index) {
            $(this).mouseenter(function() {
                $(".reco_nav a").removeClass("reco_active");
                $(this).addClass("reco_active");
                $(".reco_lesson").removeClass("recolesson_show");
                $(".reco_lesson").eq(index).addClass("recolesson_show")
            });
        });


    });


});
