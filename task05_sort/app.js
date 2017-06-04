var obj = ["a","x","b","d","m","a","k","m","p","j","a"];

var str = obj.join(''); //转化为字符串
var maxLength = 0; //命名一个变量放置字母出现的最高次数并初始化为0
var result = ''; //命名一个变量放置结果输入
var pos = ''; //存放最大字符的各个位置
var target = ''; //存放出现次数最多的字符
function whinum(){
    while( str != '' ){ //循环迭代开始，并判断字符串是否为空
        oldStr = str; //将原始的字符串变量赋值给新变量
        getStr = str.substr(0,1); //用字符串的substr的方法得到第一个字符（首字母）
        str = str.replace(new RegExp(getStr,"g"),"");//搜索全局的这个字母并转换为空

        if( oldStr.length-str.length > maxLength ) { //判断原始的字符串的长度减去替代后字符串长度是否大于之前出现的最大的字符串长度
            maxLength = oldStr.length-str.length; //两字符串长度相减得到最大的字符串长度
            target = getStr;
            document.getElementById("time").innerHTML = "出现最多的字母是 "+getStr + " 次数是 " + maxLength; //返回最大的字符串结果（字母、出现次数）
        }
    }
}

function position(){
    for(var i = 0;i < obj.length;i++){
        if(obj[i] == target){
            pos += i+' ';
        }
    }
    if(pos == ''){
        document.getElementById("pos").innerHTML = "请先获取目标字母与次数"
    }else{
        document.getElementById("pos").innerHTML = "字母 "+target+" 出现在第"+pos+"的位置"
    }
}

var position;
var i = 0;
while(i < obj.length){
    position = str.indexOf("a",i);

    result += position;
}


