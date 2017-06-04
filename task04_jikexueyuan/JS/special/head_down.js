//顶部导航下拉菜单 首页 职业课程等等……

define(function(require, exports, module) {
    var $ = jQuery;

    $(document).ready(function() {
        $("nav,.headbot_nav_down").mouseover(function() { //设置下拉导航隐藏显示
            $(".headbot_nav_down").show()
        }).mouseleave(function() {
            $(".headbot_nav_down").hide()
        });
        //鼠标滑过导航文字,高亮下来菜单对应选项
        $("#head_nav li").each(function(index) {
            $(this).mouseover(function() {
                $(".headbot_nav_down ul.headbot_nav_down_background").removeClass("headbot_nav_down_background");
                $(".headbot_nav_down ul").eq(index).addClass("headbot_nav_down_background");
            });
        });
        //鼠标在下拉菜单中滑动,变换高亮
        $(".headbot_nav_down ul").each(function(index) {
            $(this).mouseover(function() {
                $(".headbot_nav_down ul.headbot_nav_down_background").removeClass("headbot_nav_down_background");
                $(".headbot_nav_down ul").eq(index).addClass("headbot_nav_down_background");
            });
        });

    })

})
