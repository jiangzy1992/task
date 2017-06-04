  	//按键轮播效果，banner下课程，合作企业轮播，合作院校轮播，新闻媒体轮播
  	define(function(require, exports, module) {
  	    var $ = jQuery;




  	    //banner下面的课程滚动
  	    $(document).ready(function() {
  	        var i = 0;

  	        var clone2 = $(".content_fir_middle_bottom ul li").clone();
  	        $(".content_fir_middle_bottom ul").append(clone2);
  	        var size2 = $(".content_fir_middle_bottom ul li").size();
  	        $(".bbr").click(function() {
  	            i++;
  	            if (i == size2 / 2 + 1) {
  	                $(".content_fir_middle_bottom ul").css("left", 0);
  	                i = 1
  	            }
  	            $(".content_fir_middle_bottom ul").animate({ "left": -i * 186 }, 200)
  	        });
  	        $(".bbl").click(function() {
  	            i--;
  	            if (i == -1) {
  	                $(".content_fir_middle_bottom ul").css("left", -size2 / 2 * 186);
  	                i = size2 / 2 - 1
  	            }
  	            $(".content_fir_middle_bottom ul").animate({ "left": -i * 186 }, 200)
  	        })

  	    });





  	    //合作企业轮播效果
  	    $(document).ready(function() {
  	        var i = 0;
  	        var clone3 = $(".company_conin li").clone();
  	        $(".company_conin ul").append(clone3);
  	        var size3 = $(".company_conin li").size();

  	        $(".ccr").click(function() {
  	            i++;
  	            if (i == size3 / 2 + 1) {
  	                $(".company_conin ul").css("left", 0);
  	                i = 1
  	            }
  	            $(".company_conin ul").animate({ "left": -i * 158 }, 200)
  	        });
  	        $(".ccl").click(function() {
  	            i--;
  	            if (i == -1) {
  	                $(".company_conin ul").css("left", -size3 / 2 * 158);
  	                i = size3 / 2 - 1
  	            }
  	            $(".company_conin ul").animate({ "left": -i * 158 }, 200)
  	        })

  	    });





  	    //合作院校轮播效果

  	    $(document).ready(function() {
  	        var i = 0;
  	        var clone4 = $(".school_conin li").clone();
  	        $(".school_conin ul").append(clone4);
  	        var size4 = $(".school_conin li").size();

  	        $(".scr").click(function() {
  	            i++;
  	            if (i == size4 / 2 + 1) {
  	                $(".school_conin ul").css("left", 0);
  	                i = 1
  	            }
  	            $(".school_conin ul").animate({ "left": -i * 133 }, 200)
  	        });
  	        $(".scl").click(function() {
  	            i--;
  	            if (i == -1) {
  	                $(".school_conin ul").css("left", -size4 / 2 * 133);
  	                i = size4 / 2 - 1
  	            }
  	            $(".school_conin ul").animate({ "left": -i * 133 }, 200)
  	        })

  	    });





        //新闻媒体

        $(document).ready(function() {
            var i = 0;
            var clone5 = $(".media_conin li").clone();
            $(".media_conin ul").append(clone5);
            var size5 = $(".media_conin li").size();

            $(".mcr").click(function() {
                i++;
                if (i == size5 / 2 + 1) {
                    $(".media_conin ul").css("left", 0);
                    i = 1
                }
                $(".media_conin ul").animate({ "left": -i * 159 }, 200)
            });
            $(".mcl").click(function() {
                i--;
                if (i == -1) {
                    $(".media_conin ul").css("left", -size5 / 2 * 159);
                    i = size5 / 2 - 1
                }
                $(".media_conin ul").animate({ "left": -i * 159 }, 200)
            })

        });





  	    //底部微信弹框
  	    $(document).ready(function() {
  	        $(".address_weixin").hover(function() {
  	            $(".alert_weixin").css("display", "block")
  	        }, function() {
  	            $(".alert_weixin").css("display", "none")
  	        })
  	    });
  	})
