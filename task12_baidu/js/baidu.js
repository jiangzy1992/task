/*都是用单例模式
1、提供了对唯一实例的受控访问。
2、由于在系统内存中只存在一个对象，因此可以节约系统资源.
3、允许可变数目的实例。
*/
//设置下拉菜单
var dropDownMenu = {
    init:function(){
        var dropDown = this;
        dropDown.render();
        dropDown.bind();
    },
    render:function(){
        var dropDown = this;
        dropDown.set = $(".set");
        dropDown.setting = $(".setting");
        dropDown.more = $(".more");
        dropDown._more = $("#more");
        dropDown.time = null;
    },
    bind:function(){
        var dropDown = this;
        dropDown.setting.mouseenter(function(){
            dropDown.set.css("display", "block")
        }).mouseleave(function(){
            dropDown.time = setTimeout(function(){
                dropDown.set.css("display", "none")
            },300)
        });
        dropDown.set.mouseleave(function() {
            dropDown.time = setTimeout(function() {
                dropDown.set.css("display", "none")
            }, 300)
        }).mouseenter(function() {
            clearTimeout(dropDown.time);
        });
        //更多产品
        dropDown._more.mouseenter(function() {
            dropDown.more.show()
        });
        dropDown.more.mouseleave(function() {
            dropDown.more.hide()
        });
    }
}

//导航消息按钮

var navMsg = {
    init:function(){
        var msg = this;
        msg.render();
        msg.bind();
    },
    render:function(){
        var msg = this;
        msg.li = $(".nav_left ul li");
        msg.nav = $(".nav_massage");
    },
    bind:function(){
        var msg = this;
        msg.li.eq(3).click(function() {
        msg.nav.toggle()
        });
    }
}

//换肤按钮下拉
var skinDown = {
    init:function(){
        var skin = this;
        skin.render();
        skin.bind();
    },
    render:function(){
        var skin = this;
        skin.skinId = $("#skin");
        skin._skin = $(".skin");
        skin.retract = $("#shouqi");
        skin.body = $("body");
        skin.li = $(".skin_head ul li");
        skin.img = $(".skin_con ul li img");
        skin.con = $(".skin_con");
        skin.img1 = $(".imgone");
        skin.span = $(".footing_text a,.footing_text span");
    },
    bind:function(){
        var skin = this;
        skin.skinId.click(function(event) {
            event.stopPropagation();
            skin._skin.slideDown(100)
        });

        skin._skin.click(function(event){
             event.stopPropagation();
        })

        skin.retract.click(function() {
            skin._skin.slideUp(100)
        });

        skin.body.click(function(){
            skin._skin.slideUp(100)
        })

        //换肤tab标签切换
        skin.li.each(function(index) {
            $(this).click(function() {
                skin.li.removeClass("skin_active");
                $(this).addClass("skin_active");
                skin.con.removeClass("skin_show");
                skin.con.eq(index).addClass("skin_show");
            })
        });

        //换肤
        skin.img.each(function(index) {
            $(this).click(function() {
                var ground = $(this).attr('src');
                console.log(ground);
                skin.body.css({
                    "background-image": "url(" + ground + ")"
                });
                skin.img1.attr('src', './image/logo_white.png');
                skin.span.css("color", "#fff");
                setStorage("background", ground);
            })
        });

        function setStorage(name, value) {
            localStorage.setItem(name, value);
            return localStorage.getItem(name);
        }
        if (localStorage.getItem("background")) {
            skin.body.css({
                "background-image": "url(" + localStorage.getItem("background") + ")"
            })
            skin.img1.attr('src', './image/logo_white.png');
            skin.span.css("color", "#fff");
        }
    }
}


//滚动下来后弹出搜索框
var scrollTop = {
    init:function(){
        var scroll = this;
        scroll.render();
        scroll.bind();
    },
    render:function(){
        var scroll = this;
        scroll.search = $("#floatsearch");
    },
    bind:function(){
        var scroll = this;
        function topH(){
            var scrollHeight = $(window).scrollTop();
            return scrollHeight;
        }
        window.onscroll = function() {
            if (topH() > 185) {
                scroll.search.css("display", "block")
            } else {
                scroll.search.css("display", "none")
            }
        }
    }
}


//搜索框下方的标签切换
var tableTab = {
    init:function(){
        var tab = this;
        tab.render();
        tab.bind();
    },
    render:function(){
        var tab = this;
        tab.li = $(".content .con_nav ul li");
        tab.con = $("div.con_con");
    },
    bind:function(){
        var tab = this;
        tab.li.each(function(index) {
            $(this).click(function() {
                tab.li.removeClass("con_active");
                $(this).addClass("con_active");
                tab.con.removeClass("con_show");
                tab.con.eq(index).addClass("con_show");
            })
        })
    }
}


//返回顶部
var returnTop = {
    init:function(){
        var top = this;
        top.render();
        top.bind();
    },
    render:function(){
        var top = this;
        top.turn = $(".turn_top");
        top.body = $('body,html');
        top.speed = 200;  //滑动的速度
    },
    bind:function(){
        var top = this;
        top.turn.click(function() {
        top.body.animate({ scrollTop: 0 }, top.speed);
        });
    }
}

dropDownMenu.init();
navMsg.init();
skinDown.init();
scrollTop.init();
tableTab.init();
returnTop.init();