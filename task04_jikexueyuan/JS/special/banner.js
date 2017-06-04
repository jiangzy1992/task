

//banner的轮播特效
define(function(require, exports, module) {
 var $ = jQuery;


    $(document).ready(function() {

        var i = 0;
        var clone = $(".ch_banner li").first().clone(); //复制一个图片
        $(".ch_banner").append(clone); //将复制的图片添加到banner中
        var size = $(".ch_banner li").size(); //获得banner的个数
        $(".banner_num li").first().addClass("banner_on"); //默认第一个底下白条active

        //鼠标点击白条的效果,和banner的滑动
        $(".banner_num li").each(function(index) {
            $(this).click(function() {
                $(this).addClass("banner_on").siblings().removeClass("banner_on");
                $(".ch_banner").animate({ "left": -index * 560 + "px" }, 500)
            })
        });
        //定时器的设定和关闭
        var time = setInterval(moveL, 3500);
        $(".content_fir_middle_top").hover(function() {
            clearInterval(time)
        }, function() {
            time = setInterval(moveL, 3500);
        });

        //左右滑动按键的效果
        $(".banner_right").click(function() {
            moveL()
        });

        $(".banner_left").click(function() {
            moveR()
        });
        //左滑动的过程封装
        function moveL() {
            i++;
            if (i == size) {
                $(".ch_banner").css("left", 0);
                i = 1
            }
            $(".ch_banner").stop().animate({ "left": -i * 560 + "px" }, 500);
            if (i == size - 1) {
                $(".banner_num li").eq(0).addClass("banner_on").siblings().removeClass("banner_on");
            }
            $(".banner_num li").eq(i).addClass("banner_on").siblings().removeClass("banner_on");
        }

        //右滑动的过程封装
        function moveR() {
            i--;
            if (i == -1) {
                $(".ch_banner").css("left", -(size - 1) * 560 + "px");
                i = size - 2
            }
            $(".ch_banner").animate({ "left": -i * 560 + "px" }, 500);
            $(".banner_num li").eq(i).addClass("banner_on").siblings().removeClass("banner_on");
        }


        //banner浮动左右按钮
        $(".content_fir_middle_top").mouseenter(function() {
            $(".banner_left,.banner_right").fadeIn(500)
        }).mouseleave(function() {
            $(".banner_left,.banner_right").fadeOut(500)
        });

    });





})