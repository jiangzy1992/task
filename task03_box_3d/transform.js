/**
 * Created by J on 2015/9/9.
 */
var box = document.getElementById("box");
var input = document.getElementsByTagName("input");
var x = 0,y = 0;
//按钮事件
for(i=0;i<input.length;i++){
    input[i].onclick = animation;
}
//给button绑定onclick事件
function animation(){
    box.style.webkitTransition = "-webkit-transform 3s linear";
    if(input[0]==this){
        x += 90;
    }else if(input[1]==this){
        x -= 90;
    }else if(input[2]==this){
        y -= 90;
    }else if(input[3]==this){
        y += 90;
    }else{
        x = 0;
        y = 0;
        box.style.webkitTransition = "-webkit-transform 0.5s linear";
        //使重置更快生效
    }
    box.style.webkitTransform = "rotateX("+x+"deg) rotateY("+y+"deg)";
}
