$('.header-left-baidu').click(function() {
    location.href = "http://m.baidu.com";
});
$('.header-left-dl').click(function() {
    location.href = "view/user_login.html";
});
$('.header-right-search').click(function() {
    location.href = "http://m.baidu.com/ssid=0/from=0/bd_page_type=1/uid=0/pu=sz%40224_220%2Cta%40middle___3_537/news?idx=20000&itj=22#searchbox";
});
$('.header-right-sub').click(function() {
    location.href = "http://m.baidu.com/ssid=0/from=0/bd_page_type=1/uid=0/pu=sz%40224_220%2Cta%40middle___3_537/news?idx=20000&itj=22#subscribe";
});

var span = $('.header-list td span');
span.each(function(index){
    $(this).click(function(e){
        e.preventDefault();
        $('.list-group-item-heading,.list-group-item-text').remove();
        var indexC = ++index;
        var urlC = '/queryByCat?cat=' + indexC;
        $.ajax({
        url: urlC,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            var lg = $('.list-group');
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    $('<h4>').addClass('list-group-item-heading').text(data[i].newstitle).appendTo(lg);
                    $('<p>').addClass('list-group-item-text').text(data[i].newscontent).appendTo(lg);
                }
            } else {
                console.log('error');
            }
        },
        error: function(error){
            console.log(error)
        }
    })
    })
})