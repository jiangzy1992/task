function Score(){
    var score = document.getElementById("score").value;
    console.log(score);
    switch (true){
        case score>=90&&score<=100:
            x = "该生是一等生";
            break;
        case score>=80&&score<90:
            x = "该生是二等生";
            break;
        case score>=70&&score<80:
            x = "该生是三等生";
            break;
        case score>=60&&score<70:
            x = "该生是四等生";
            break;
        case score>=50&&score<60:
            x = "该生是五等生";
            break;
        case score>=40&&score<50:
            x = "该生是六等生";
            break;
        case score>=30&&score<40:
            x = "该生是七等生";
            break;
        case score>=20&&score<30:
            x = "该生是八等生";
            break;
        case score>=10&&score<20:
            x = "该生是九等生";
            break;
        case score>=0&&score<10:
            x = "该生是十等生";
            break;
        default:
            x = "数据错误"
    }
    console.log(score);
    document.getElementById("text").innerHTML = x;
}