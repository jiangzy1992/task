/**
 * Created by J on 2015/9/9.
 */
var box = document.getElementById("box");
var input = document.getElementsByTagName("input");
var x = 0,y = 0;
//��ť�¼�
for(i=0;i<input.length;i++){
    input[i].onclick = animation;
}
//��button��onclick�¼�
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
        //ʹ���ø�����Ч
    }
    box.style.webkitTransform = "rotateX("+x+"deg) rotateY("+y+"deg)";
}
