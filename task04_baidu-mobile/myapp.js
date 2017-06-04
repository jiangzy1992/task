function changeColor(color){
    var body = document.getElementById("body");
    var fontColor = document.getElementsByClassName("fontColor");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var save = document.getElementById("save");
    if (window.localStorage) {      //存储颜色，判断能否用localStorage
        localStorage.setItem("color", color);
    } else {
        Cookie.write("color", color);
    }
    document.cookie
    for(var i=0;i<fontColor.length;i++){    //历遍数组，给所有文字颜色变成白色
        fontColor[i].style.color = "#ffffff";
    }
    switch (color){             //判断颜色
        case 0:
            body.style.backgroundImage = "";
            body.style.backgroundSize = "";
            for(var i=0;i<fontColor.length;i++){
                fontColor[i].style.color = "#000000";
            }
            btn1.style.backgroundColor = "#1E90FF";
            btn2.style.backgroundColor = "#1E90FF";
            break;
        case 1:
            body.style.backgroundImage = "url('img/blue.jpg')";
            body.style.backgroundSize = "cover";
            btn1.style.backgroundColor = "#1E90FF";
            btn2.style.backgroundColor = "#1E90FF";
            break;
        case 2:
            body.style.backgroundImage = "url('img/purple.jpeg')";
            body.style.backgroundSize = "cover";
            btn1.style.backgroundColor = "#ba349e";
            btn2.style.backgroundColor = "#ba349e";
            break;
        case 3:
            body.style.backgroundImage = "url('img/red.jpg')";
            body.style.backgroundSize = "cover";
            btn1.style.backgroundColor = "#ff283a";
            btn2.style.backgroundColor = "#ff283a";
            break;
        case 4:
            body.style.backgroundImage = "url('img/green.jpg')";
            body.style.backgroundSize = "cover";
            btn1.style.backgroundColor = "#58ff2d";
            btn2.style.backgroundColor = "#58ff2d";
            break;
    }
}

//执行存储的颜色
var colornum = Number(localStorage.getItem("color"));
console.log(colornum);
changeColor(colornum);

