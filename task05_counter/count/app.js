var num = 0,result = 0,numshow = "0";
var operate = 0; //判断前一个数字是否输入完成
var calcul = 0; //判断是什么运算
var quit = 0; //防止重复按键的标志
function command(num){
    var str = String(document.calculator.numScreen.value); //获得当前显示数据
    str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且输入没完成，则返回当前值，否则返回显示输入的数字;
    str = str + String(num); //给当前值追加字符
    document.calculator.numScreen.value = str; //刷新显示
    operate = 0; //重置输入状态
    quit = 0; //重置防止重复按键的标志
}
function dzero(){
    var str = String(document.calculator.numScreen.value);
    str = (str!="0") ? ((operate == 0) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且输入没完成，则返回当str+"00"，否则返回"0";
    document.calculator.numScreen.value = str;
    operate = 0;
}
function dot(){
    var str = String(document.calculator.numScreen.value);
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且输入没完成，则返回当前值，否则返回"0";
    for(var i = 0; i <= str.length;i++){ //判断是否已经有一个点号
        if(str.substr(i,1) == ".") return false; //如果有则不再插入
    }
    str = str + ".";
    document.calculator.numScreen.value = str;
    operate=0;
}
function del(){ //退格
    var str = String(document.calculator.numScreen.value);
    str = (str != "0") ? str : "";
    str = str.substr(0,str.length-1);
    str = (str != "") ? str : "0"; //如果只有一位，删除后结果为0
    document.calculator.numScreen.value = str;
}
function pAndN(){ //正负
    var str = String(document.calculator.numScreen.value);
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且输入没完成，则返回当前值，否则返回"0";
    if(str.indexOf('-') != 0){
        str = '-' + str;
    }else{
        str = str.substr(1);
    }
    document.calculator.numScreen.value = str;
}
function clearscreen(){ //清除数据
    num = 0;
    result = 0;
    numshow = "0";
    document.calculator.numScreen.value =  " 0";
}

function copyright(){
    document.calculator.numScreen.value = "我是来占位的,整齐嘛!"
    setTimeout(clearscreen,2000);
}
function plus(){ //加法
    calculate(); //调用计算函数
    operate = 1; //更改输入状态
    calcul = 1; //更改计算状态为加
}
function minus(){ //减法
    calculate();
    operate = 1;
    calcul = 2;
}
function times(){ //乘法
    calculate();
    operate = 1;
    calcul = 3;
}
function divide(){ //除法
    calculate();
    operate = 1;
    calcul = 4;
}
function present(){ //求余
    calculate();
    operate=1;
    calcul=5;
}
function sin(){ //sin
    calculate();
    operate = 1;
    calcul = 6;
}
function cos(){ //cos
    calculate();
    operate = 1;
    calcul = 7;
}
function tan(){ //tan
    calculate();
    operate = 1;
    calcul = 8;
}
function pow2(){ //2次幂
    calculate();
    operate = 1;
    calcul = 9;
}
function pow10(){ //10的x次方
    calculate();
    operate = 1;
    calcul = 10;
}
function sqrt(){ //开方
    calculate();
    operate = 1;
    calcul = 11;
}
function overX(){ //1/x
    calculate();
    operate = 1;
    calcul = 12;
}
function log(){ //log
    calculate();
    operate = 1;
    calcul = 13;
}
function lg(){ //lg
    calculate();
    operate = 1;
    calcul = 14;
}
function random(){ //random
    var str = String(document.calculator.numScreen.value);
    str = (str != "0") ? "0" : "0"; //如果当前值不是"0"，且输入没完成，则返回当前值，否则返回"0";
    calculate();
    operate = 1;
    calcul = 15;
}
function equal(){
    calculate(); //等于
    operate = 1;
    num = 0;
    result = 0;
    numshow = "0";
}
//
function calculate(){
    numshow = Number(document.calculator.numScreen.value);
    if(num != 0 && quit != 1){ //判断前一个运算数是否为零以及防重复按键的状态
        switch(calcul){ //判断要输入状态
            case 1:result = num + numshow;break; //计算"+"
            case 2:result = num - numshow;break; //计算"-"
            case 3:result = num * numshow;break;
            case 4:if(numshow != 0){result = num/numshow;}else{document.getElementById("note").innerHTML = "被除数不能为零！"; setTimeout(clearnote,4000)} break;
            case 5:result=num%numshow;break;
            case 6:result = Math.sin(num);break;
            case 7:result = Math.cos(num);break;
            case 8:result = Math.tan(num);break;
            case 9:result = Math.pow(num,2);break; //2次幂
            case 10:result = Math.pow(10,num);break; //10的X次幂
            case 11:result = Math.sqrt(num);break; //开方
            case 12:if(numshow != 0){result = 1/num;}else{document.getElementById("note").innerHTML = "被除数不能为零！"; setTimeout(clearnote,4000)} break; //1/x
            case 13:result = Math.log(num);break; //ln
            case 14:result = Math.log(num)/Math.LN10;break; //lg
            case 15:result = parseInt( Math.random()*100);break; //随机数字（纯属娱乐玩票性质）
        }
        quit=1; //避免重复按键
    }else{
        result=numshow;
    }
    numshow = String(result);
    document.calculator.numScreen.value = numshow;
    num = result; //存储当前值
}
function clearnote(){ //清空提示
    document.getElementById("note").innerHTML = "";
}