function count(){
    var fnum = parseFloat(document.getElementById("fnum").value);//得到第一个数字
    var snum = parseFloat(document.getElementById("snum").value);//得到第二个数字
    var opt = document.getElementById("select").value;//得到运算符
    var result;//存放结果
    switch (opt){
        case "+":
            result = fnum + snum;
            break;
        case "-":
            result = fnum - snum;
            break;
        case "*":
            result = fnum * snum;
            break;
        case "/":
            if(snum == 0){
                alert("不能除以0");
            }else{
                result = fnum / snum;
                break;
            }
    }
    document.getElementById("result").value = result;
}

function zero(){
    document.getElementById("fnum").value = "";
    document.getElementById("snum").value = "";
    document.getElementById("result").value = "";
}