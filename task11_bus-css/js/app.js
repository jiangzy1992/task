function lineHeight() {
    var height;
    var num;
    $('.con-nav ul li').each(function (index, value) {
        num = $(this).text().length;
        height = 160/num + "px";
        $(this).css("line-height",height);
    });
}

lineHeight();
