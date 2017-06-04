function html_decode (str) {
	var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
}


$.ajax({
    url: '/queryall',
    type: 'get',
    dataType: 'json',
    success: function (data) {
        var tbody = $('#tbody');
        if (data) {
        	var n = data.length;
            for (var i = 0; i < n; i++) {
            	var newstitle = html_decode(data[i].newstitle);
            	var newscontent = html_decode(data[i].newscontent);
	            var tr = $('<tr>').appendTo(tbody);
	            $('<th>').addClass('newsid').text(data[i].id).appendTo(tr);
	            $('<th>').addClass('newstitle').text(newstitle).appendTo(tr);
	            $('<th>').addClass('newscontent').text(newscontent).appendTo(tr);
	            var th = $('<th>').appendTo(tr);
	            $('<a>').addClass('delete').attr("href","#").text('删除').appendTo(th);
	            $('<a>').addClass('update').attr("href","#").text('修改').appendTo(th);
            }
        }
        // 删除功能
		$(".delete").each(function (index) {
			$(this).click(function (e) {
				e.preventDefault();
				var delid = $('.newsid').eq(index).text();
		      	var urlD = '/delete?id=' + delid;
				$.ajax({
					url: urlD,
					type: 'get',
					success: function (data) {
						alert('删除成功');
						window.location.reload();
					},
					error: function (e) {
						console.log(e);
					}
				});
			});
		});

		// 修改功能
		$(".update").each(function (index) {
			$(this).click(function (e) {
				var updid = $('.newsid').eq(index).text();
				var updtitle = $('.newstitle').eq(index).text();
				var updcontent = $('.newscontent').eq(index).text();
				$('#updateId').val(updid);
				$('#updateTitle').val(updtitle);
				$('#updateContent').val(updcontent);
				$('.updateForm').show();
				$('#updateSubmit').click(function (e) {
					e.preventDefault();
					$('.updateForm').hide();
					var newsid = $("#updateId").val();
		            var newstitle = $("#updateTitle").val();
		            var newscontent = $("#updateContent").val();
		            var csrf = $('.updcsrf').val();
		            var param = "newsid=" + encodeURIComponent(newsid);
		            param += "&newstitle=" + encodeURIComponent(newstitle);
		            param += "&newscontent=" + encodeURIComponent(newscontent);
		            param += "&_csrf=" + csrf;
					$.ajax({
						url: '/update',
						type: 'post',
						data: param,
						dataType: 'json',
						success: function (data) {
							$('#updateForm').hide();
							console.log('修改成功');
							window.location.reload();
						},
						error: function (e) {
							console.log(e);
						}
					});
				});
			});
		});
    },
    error: function (error) {
        console.log(error);
    }
});


// 增加功能
$('#a2').click(function (e) {
	$('.addForm').show();
})

$('#addSubmit').click(function (e) {
	e.preventDefault();
	$('.addForm').hide();
    var newstitle = $("#addTitle").val();
    var newscontent = $("#addContent").val();
    var cat = $("#addCat").val();
    var csrf = $('.addcsrf').val();
    var param = "newstitle=" + encodeURIComponent(newstitle);
    param += "&newscontent=" + encodeURIComponent(newscontent);
    param += "&cat=" + encodeURIComponent(cat);
    param += "&_csrf=" + csrf;
    $('#addTitle,#addContent,#addCat').empty();
	$.ajax({
		url: '/add',
		type: 'post',
		data: param,
		success: function (data) {
			console.log("增加成功");
			window.location.reload();
		},
		error: function (e) {
			console.log(e);
		}
	});
})