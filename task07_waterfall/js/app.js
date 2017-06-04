$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
        hover();
        var dataImg = {
            "data":[
                {"src":"art.jpg","text":"艺术"},
                {"src":"book.jpg","text":"素材"},
                {"src":"cat.jpg","text":"萌宠"},
                {"src":"color.jpg","text":"色彩"},
                {"src":"draw.jpg","text":"创意设计"},
                {"src":"flower.jpg","text":"灵感"},
                {"src":"handp.jpg","text":"手绘"},
                {"src":"home.jpg","text":"室内设计"},
                {"src":"icon.jpg","text":"icon"},
                {"src":"life.jpg","text":"平面设计"},
                {"src":"shorthair.jpg","text":"短发"},
                {"src":"tech.jpg","text":"工业设计"}
            ]
        };
        window.onscroll = function(){
            if(scrollside()){
                $.each(dataImg.data,function(index,value){
                    // console.log($(value).attr("src"));
                    //console.log($(value).attr("text"));
                    var con = $("<div>").addClass("container").appendTo($("#wrapper"));
                    var btnArea = $("<div>").addClass("btn-area").appendTo($(con));
                    var btn = $("<a>").attr("href","#").addClass("btn").appendTo($(btnArea));
                    $("<span>").addClass("btn-content").addClass("download").text("下载").appendTo($(btn));
                    var btn2 = $("<a>").attr("href","#").addClass("btn").appendTo($(btnArea));
                    $("<span>").addClass("btn-content").addClass("collect").text("收藏").appendTo($(btn2));
                    var box = $("<div>").addClass("box").appendTo($(con));
                    $("<img>").attr("src","./imgs/"+$(value).attr("src")).appendTo($(box));
                    var resume = $("<div>").addClass("resume").appendTo($(con));
                    $("<span>").text("便签:").appendTo($(resume));
                    $("<a>").text($(value).attr("text")).appendTo($(resume));
                });
                imgLocation();
                hover();
            }
            return 0;
        };
    });
});

function scrollside(){
    var con = $(".container");
    var lastBoxHeight = con.last().get(0).offsetTop + Math.floor(con.last().height()/2);
    var documentHeight = $(document).width();
    var scrollTopHeight = $(window).scrollTop();
    return (lastBoxHeight<scrollTopHeight+documentHeight)?true:false;
}

function imgLocation(){
    var con = $(".container");
    var conWidth = (con.eq(0).width() + 15);
    var num = Math.floor($(window).width()/conWidth);
    var conHeight = [];
    con.each(function(index,value){
        var boxHeight = con.eq(index).height();
        if(index<num){
            conHeight[index] = boxHeight;
        }else{
            var minBoxHeight = Math.min.apply(null,conHeight);
            var minBoxIndex = $.inArray(minBoxHeight,conHeight);
            var marginHeight = minBoxHeight + 15;
            $(value).css({
                "position":"absolute",
                "top":marginHeight,
                "left":con.eq(minBoxIndex).position().left
            });
            conHeight[minBoxIndex] += (con.eq(index).height()+15);
        }
    });
}

function hover(){
    $(".container").hover(function(){
        $(this).find(".btn-area").css("display","block");
    },function(){
        $(this).find(".btn-area").css("display","none");
    })
}
