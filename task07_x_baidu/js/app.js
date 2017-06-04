var a = $("#menu_wrapper a");//主体部分左侧导航
var lastIndex = 1;//记录上一次点击的位置
$(document).ready(function(){
    settingHover();//设置的hover
    userHover();//用户的hover
    brihover();//更多产品的hover
    menuAdd();//主体部分左侧导航下面的齿轮hover
    mainMenu();//主体部分左侧导航点击切换样式
    mainscroll();//主体部分左侧导航点击切换主体的模块
});


function settingHover(){
    var settingMenu = $(".setting-menu");
    $(".setting-hover").hover(function(){
        settingMenu.css("display","block");
    },function(){
        settingMenu.css("display","none");
    });
}

function userHover(){
    var userMenu = $(".user-menu");
    $(".user-hover").hover(function(){
        userMenu.css("display","block");
    },function(){
        userMenu.css("display","none");
    })
}

function brihover(){
    var bri = $(".bri-hover");
    $(".brihover").hover(function(){
        bri.css("display","block");
    },function(){
        bri.css("display","none");
    })
}

function menuAdd(){
    var span = $(".menu-add span");
    $(".menu-add").hover(function(){
        span.css("background",'url("./imgs/noskin.png") no-repeat 0 0');
    },function(){
        span.css("background",'url("./imgs/noskin.png") no-repeat -22px 0');
    })
}

function mainMenu(){
    a.each(function(index){
        $(this).on("click",function(){
            a.removeClass("current");
            $(this).addClass("current")
        })
    })
}

function mainscroll(){
    var content = $(".s-content");
    a.each(function(index){
        $(this).click(function(){
            var thisClick = $(this).index();//记录当前点击的位置
            if (thisClick > lastIndex){           //判断当前点击位置跟上一次点击位置前后关系
                content.eq(thisClick).css({         //从下往上移动
                    'top': '320px',
                    'overflow': 'hidden',
                    'height': '318px',
                    'display': '',
                    'position': 'absolute'
                }).animate({top: '0px'},500);

                content.eq(lastIndex).animate({top: '-320px'},500);

                setTimeout(function(){          //在动画结束后执行
                    content.eq(thisClick).css({
                        'overflow':'visible',
                        'display':''
                    });
                    content.eq(lastIndex).css({
                        'overflow': 'hidden',
                        'display': 'none',
                        'position':''
                    });
                    lastIndex = thisClick;      //重置上次点击的位置
                },500);

            }else if(thisClick < lastIndex){
                content.eq(thisClick).css({
                    'top':'-320px',
                    'overflow':'hidden',
                    'height':'318px',
                    'display':'',
                    'position':'absolute'
                }).animate({top:'0px'},500);

                content.eq(lastIndex).animate({top:'320px'},500);

                setTimeout(function(){
                    content.eq(thisClick).css({
                        'overflow':'visible',
                        'display':''
                    });
                    content.eq(lastIndex).css({
                        'overflow': 'hidden',
                        'display': 'none',
                        'position':''
                    });
                    lastIndex = thisClick;
                },500);
            }
        })
    });
}