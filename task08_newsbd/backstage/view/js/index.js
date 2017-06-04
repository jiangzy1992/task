
$('#btn').click(function(e) {
    e.preventDefault();
    $.ajax({
        url: 'action.php?action=add',
        data: {
            newstitle: $('#newstitle').val(),
            newscontent: $('#newscontent').val(),
            cat: $('#cat').val()
        },
        // async:false,
        dataType: 'json',
        type: 'post',
        success: function(d) {
            alert(d.msg + ", " + d.errorCode + "，正在跳转中...");
            window.location.href = "index.php";
        },
        error: function(d) {
            alert("请联系管理员");
            window.location.href = "index.php";
        }
    });

});

function doDel(id){
            if(confirm("确定要删除吗？")){
                window.location='action.php?action=del&id='+id;
            }
        }


$('#addNews').click(function(){
    window.location='contentAdd.php';
});
$('#listNews').click(function(){
    window.location='index.php';
});

// console.log($('.nav li a').eq(1));
// $('#contentAdd').click(function(){
//     $('#content').load('contentAdd.htm');
// });