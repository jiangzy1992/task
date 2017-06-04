/**
 * Created by J on 2015/9/12.
 */
$(function(){
    $(".menu_list").hide();
    $(".menu_list_first").show();
    var list = $(".list");
    list.click(function(){
        var len = list.length;
        var index = list.index(this);
        for(i = 0;i < len;i++){
            if(i == index){
                $(".menu_list").eq(i).slideToggle(300);
            }else{
                $(".menu_list").eq(i).slideUp(300);
            }
        }
    })
});