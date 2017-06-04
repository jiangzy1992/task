$(document).ready(function() {
    var time = null;
    $(".setting").mouseenter(function() {
        $(".set").css("display", "block")
    }).mouseleave(function() {
        time = setTimeout(function() {
            $(".set").css("display", "none")
        }, 300)
    });
    $(".set").mouseleave(function() {
        time = setTimeout(function() {
            $(".set").css("display", "none")
        }, 300)
    }).mouseenter(function() {
        clearTimeout(time)
    });

    //更多产品
    $("#more").mouseenter(function() {
        $(".more").show()
    });
    $(".more").mouseleave(function() {
        $(this).hide()
    });
});

//导航消息按钮

$(document).ready(function() {
    $(".nav_left ul li").eq(3).click(function() {
        $(".nav_massage").toggle()
    });
});



$(document).ready(function() {
    //换肤按钮下拉
    $("#skin").click(function(event) {
        event.stopPropagation();
        $(".skin").slideDown(100)
    });

    $(".skin").click(function(event){
         event.stopPropagation();
    })

    $("#shouqi").click(function() {
        $(".skin").slideUp(100)
    });

    $("body").click(function(){
        $(".skin").slideUp(100)
    })

    //换肤tab标签切换
    $(".skin_head ul li").each(function(index) {
        $(this).click(function() {
            $(".skin_head ul li").removeClass("skin_active");
            $(this).addClass("skin_active");
            $(".skin_con").removeClass("skin_show");
            $(".skin_con").eq(index).addClass("skin_show");
        })
    });


    //换肤
    $(".skin_con ul li img").each(function(index) {
        $(this).click(function() {
            var ground = $(this).attr('src');
            //alert(ground);
            $("body").css({
                "background-image": "url(" + ground + ")"
            });
            $(".imgone").attr('src', './image/logo_white.png');
            $(".footing_text a,.footing_text span").css("color", "#fff");
            setStorage("background", ground);
            //setCookie("background", "mingxing");
        })
    });




    function setStorage(name, value) {
        localStorage.setItem(name, value);
        return localStorage.getItem(name);
    }
    if (localStorage.getItem("background")) {
        $("body").css({
            "background-image": "url(" + localStorage.getItem("background") + ")"
        })
        $(".imgone").attr('src', './image/logo_white.png');
        $(".footing_text a,.footing_text span").css("color", "#fff");
    }
});


//滚动下来后弹出搜索框
$(document).ready(function() {
    window.onscroll = function() {
        if (toph() > 185) {
            $("#floatsearch").css("display", "block")
        } else {
            $("#floatsearch").css("display", "none")
        }
    }
});

function toph() {
    var scrollHeight = $(window).scrollTop();
    return scrollHeight;
}


//搜索框下方的标签切换
$(document).ready(function() {
    $(".content .con_nav ul li").each(function(index) {
        $(this).click(function() {
            $(".content .con_nav ul li").removeClass("con_active");
            $(this).addClass("con_active");
            $("div.con_con").removeClass("con_show");
            $("div.con_con").eq(index).addClass("con_show");
        })
    })
});


//返回顶部
$(document).ready(function() {
    $(".turn_top").click(function() {
        var speed = 200; //滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
    });
});
