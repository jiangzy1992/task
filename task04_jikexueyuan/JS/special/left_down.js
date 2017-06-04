//banner左侧鼠标滑过下拉选项卡（左侧下拉菜单）
define(function(require, exports, module) {
    var $ = jQuery;


    //鼠标滑过左侧菜单,弹出详细课程(左侧下拉菜单)
    $(document).ready(function() {
        $(".muen li").each(function(index) {
            $(this).mouseenter(function() {
                $(".muen_more").eq(index).addClass("muen_show");
                $(".muen li").eq(index).css({
                    "border-left": "2px solid #35b550",
                    "padding-left": "18px",
                    "border-right": "0"
                });
                $(".muen li a").eq(index).css("color", "#35b550");
                $(".muen ul li span").eq(index).css("display", "none");
            }).mouseleave(function() {
                $(".muen_more").eq(index).removeClass("muen_show");
                $(".muen li").eq(index).css({
                    "border-left": "1px solid #dfdfdf",
                    "padding-left": "15px",
                    "border-right": "1px solid #dfdfdf"
                });
                $(".muen li a").eq(index).css("color", "#333");
                $(".muen ul li span").eq(index).css("display", "block");
            });
        });
        $(".muen_more").each(function(index) {
            $(this).mouseenter(function() {
                $(this).addClass("muen_show");
                $(".muen li").eq(index).css({
                    "border-left": "2px solid #35b550",
                    "padding-left": "18px",
                    "border-right": "0"
                });
                $(".muen li a").eq(index).css("color", "#35b550");
                $(".muen ul li span").eq(index).css("display", "none");
            }).mouseleave(function() {
                $(this).removeClass("muen_show");
                $(".muen li").eq(index).css({
                    "border-left": "1px solid #dfdfdf",
                    "padding-left": "15px",
                    "border-right": "1px solid #dfdfdf"
                });
                $(".muen li a").eq(index).css("color", "#333");
                $(".muen ul li span").eq(index).css("display", "block");
            });
        });

    });



})
