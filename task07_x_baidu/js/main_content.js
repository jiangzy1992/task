F._setMod("newsplus");
F._fileMap({
    "/js/min_news_7c078b76.js": ["config", "common/conf", "log/news_all", "news/entertainment", "news/news_constructor", "news/img_action", "news/tab_change", "news/change_for_change", "news/words_contructor", "hotsug/init_sug", "tools/strpx", "tools/throttle", "hotsug/hot_newlabel", "start/news_start"],
    "/js/hot_sug_c35b7fa4.js": ["hotsug/hot_sug"],
    "/css/hot_sug_7a554d17.css": ["hot_sug.css"],
    "/css/news_min_bcaffed2.css": ["news_init.css", "skin.css"],
    "/js/min_news_fullflow_bef6884c.js": ["config", "commonfull/conf", "logfull/news_all", "newsfull/news_constructor", "newsfull/img_action", "newsfull/tab_change", "newsfull/change_for_change", "newsfull/words_contructor", "hotsugfull/init_sug", "toolsfull/strpx", "toolsfull/throttle", "hotsugfull/hot_newlabel", "startfull/news_start"],
    "/js/hot_sug_fullflow_af90f4f1.js": ["hotsugfull/hot_sug"],
    "/css/hot_sug_fullflow_7a554d17.css": ["fullflow/hot_sug.css"],
    "/css/news_min_fullflow_546f835b.css": ["fullflow/news_init.css", "fullflow/skin.css"],
    "/js/min_news_smallflow_200075bc.js": ["config", "commonsmall/conf", "logsmall/news_all", "newssmall/news_constructor", "newssmall/img_action", "newssmall/entertainment", "newssmall/tab_change", "newssmall/change_for_change", "newssmall/rec_change", "newssmall/words_contructor", "hotsugsmall/init_sug", "toolssmall/strpx", "toolssmall/throttle", "hotsugsmall/hot_newlabel", "startsmall/news_start"],
    "/js/hot_sug_smallflow_a13292df.js": ["hotsugsmall/hot_sug"],
    "/css/hot_sug_smallflow_7a554d17.css": ["smallflow/hot_sug.css"],
    "/css/news_min_smallflow_16b2a3b1.css": ["smallflow/news_init.css", "smallflow/skin.css", "smallflow/recnews.css"]
});
F._firstScreenJS = F._firstScreenJS || [];
F._firstScreenJS.push("/js/min_news_7c078b76.js");
F._firstScreenJS.push("/js/min_news_fullflow_bef6884c.js");
F._firstScreenJS.push("/js/min_news_smallflow_200075bc.js");
F.module("newsplus:commonfull/conf", function (c, b, a) {
    var d = 16;
    b.everyPageItemNum = d
});
F.addLog("newsplus:newsfull", {newsShow: "0200100000", newsClick: "0200100001", newsHover: "0200100002"});
F.addLog("newsplus:hotsugfull", {newsClick: "0200100001", hotsugClick: "0200200001"});
F.module("newsplus:newsfull/news_constructor", function (d, e, l) {
    var h = $("#s_content_" + 2);
    var f = d("newsplus:commonfull/conf");
    var k = d("newsplus:hotsugfull/hot_newlabel"), c = d("newsplus:toolsfull/strpx");
    var g = {
        wordswrap: ["#{topicContent}"].join(""),
        words: ['<li class="words-li #{viewed}" data-num="#{list}">', '<div class="words-item">', '<a href="#{showlinkurl}" target="_blank" class="hot-item-link #{showisnew}" hidefocus>', '<em class="dot"></em>', '<em class="words-item-content" data-title="#{dataTitle}" data-new="#{newItem}">#{showkey}</em>', '<em class="is-new"></em>', "</a>", "</div>", "</li>"].join(""),
        topic: ['<li class="topic-li topic-page-#{num} #{viewed}" data-num="#{list}">', '<div class="topic-item">', '<a href="#{showlinkurl}" target="_blank" class="hot-item-link" hidefocus>', '<em class="order topic-icon-#{order}"></em>', '<em class="topic-item-content" data-title="#{dataTitle}">#{showtitle}</em>', "</a>", "</div>", "</li>"].join(""),
        suggest: ['<div class="s-hithot-suggest">', '<div class="suggest-shadow"></div>', '<div class="suggest-main">', '<div class="suggest-main-content">', "#{suggestContent}", "</div>", "</div>", "</div>"].join(""),
        wordsSuggest: ['<div class="suggest-content">', "#{wordsContentStr}", "<div>"].join(""),
        wordsSuggestItem: ['<p class="words-item">', '<span class="dot"></span>', '<a class="words-title"></a>', '<span class="words-src"></span>', '<span class="words-time"></span>', "</p>"].join(""),
        wordsSuggestSummary: ['<p class="words-summary"></p>'].join(""),
        topicSuggest: ['<div class="suggest-content">', '<img class="suggest-topic-img" src="#{topicImg}" title="#{topicImgTitle}"/>', '<p class="suggest-topic-title">', '<a target="_blank" hidefocus></a>', "<span></span>", "</p>", '<p class="suggest-topic-summary">#{topicSummary}</p>', "</div>"].join("")
    };
    e.getNewsTpl = function (m) {
        return g[m]
    };
    e.dealWordsData = function (o, m) {
        var n = [];
        $.each(o, function (p, q) {
            if (p > f.everyPageItemNum - 1) {
                return
            }
            var r = {};
            if (q) {
                r.isNewkey = (q.isnew == "true") ? true : false;
                r.showisnew = r.isNewkey ? "show-new" : "";
                r.showlinkurl = (q.linkurl);
                r.list = p % f.everyPageItemNum;
                r.dataTitle = $.encodeHTML(q.key);
                r.newItem = q.isnew == "true" ? 1 : 0;
                r.viewed = q.isviewed == 1 ? "viewed" : "";
                r.showkey = q.key;
                n.push($.formatString(m, r))
            }
        });
        return n
    };
    e.dealTopicData = function (o, q) {
        var u = [];
        var r = 0;
        for (var p = 0, s = f.everyPageItemNum / 2; p < s; p++) {
            for (var m = p; m <= p + f.everyPageItemNum / 2; m += f.everyPageItemNum / 2) {
                var t = o[m];
                if (!t) {
                    break
                }
                t.showlinkurl = (t.linkurl);
                t.list = r++;
                t.dataTitle = $.encodeHTML(t.title);
                t.num = parseInt(m / f.everyPageItemNum);
                var n = parseInt(m / 2);
                t.order = m + 1;
                t.viewed = k.isInLocal("topic", t.title) >= 0 ? "viewed" : "";
                t.showtitle = c.cutStrByLen(t.title, 20);
                u.push($.formatString(q, t))
            }
        }
        return u
    };
    var j = function (p, m, o) {
        var n = [];
        $.each(p, function (q, r) {
            var s = {};
            if (r) {
                s.hasImg = ((q !== 0 && r.type == "img") ? g.headlineImg : "");
                s.realtitle = $.decodeHTML(r.title);
                s.url = decodeURIComponent(r.url);
                s.type = r.type;
                s.hasIcon = ((q !== 0 && r.type == "img") ? "has-img-icon" : "");
                if (q === 0) {
                    s.title = c.cutStrByLen(r.title, 26);
                    n.push($.formatString(m, s))
                } else {
                    s.title = c.cutStrByLen(r.title, 40);
                    n.push($.formatString(o, s))
                }
            }
        });
        return n
    };
    var a = function (o) {
        var n = [], p = [], m = [];
        $.each(o, function (s, q) {
            var r = {};
            r.num = s;
            r.title = c.cutStrByLen(q.title, 40);
            r.imgSmallUrl = decodeURIComponent(q.imgSmallUrl);
            r.imgUrl = decodeURIComponent(q.imgUrl);
            r.url = decodeURIComponent(q.url);
            r.resname = q.resname;
            r.curimg = (s == 0 ? "cur-img" : "");
            r.curspan = (s == 0 ? "cur-span click-span" : "");
            n.push({title: r.title, url: r.url, resname: r.resname});
            m.push($.formatString(g.bigImg, r));
            p.push($.formatString(g.smallImg, r))
        });
        return {titleArray: n, bigImgHtml: m, smallImgHtml: p}
    };
    var b = function (t) {
        var A = [], u = [], s = [], y = [], v = [], p = [], r = k.getLocalData("topic"), q = [], o = null, n = t.hotWords.length - 1, x = null;
        l.use("newsfull/words_contructor", function (B) {
            B.saveWordsData(t.hotWords)
        });
        y = e.dealWordsData(t.hotWords, g.words);
        var m = new Array();
        var w = t.hotWords.length;
        if (w) {
            for (i = 0; i < f.everyPageItemNum; i++) {
                m[i] = t.hotWords[i].key
            }
            var z = $.stringify(m);
            l.fire("newsShow", {showType: "hotword", words: z, pagenum: "0"})
        }
    };
    e.render = b
});
F.module("newsplus:newsfull/img_action", function (c, g, n) {
    var j = c("newsplus:toolsfull/throttle"), e = [], f = {showSmallImgCount: 5, sumImgCount: 5}, b = true;
    var m = function (p) {
        $("#s_content_2 .img-viewer-cell").css("left", -p * 425);
        if (e[p].title) {
            $("#s_content_2 .img-title").attr("url", e[p].url).html(e[p].title)
        }
    };
    var l = function (r, s) {
        var q = r, p = null;
        if (s) {
            $("#s_content_2 .img-viewer-cell").css("left", -q * 425);
            if (e[q].title) {
                $("#s_content_2 .img-title").attr("href", $($("#s_content_2 .big-img-link")[q]).attr("href")).attr("data-res", e[q].resname).html(e[q].title)
            }
            $("#s_content_2 .img-viewer").attr("num", q);
            $("#s_content_2 .news-smallimg-mask").parent().removeClass("click-span");
            $('#s_content_2 .img-bars span[num="' + q + '"]').addClass("click-span")
        }
        $("#s_content_2 .news-smallimg-mask").parent().removeClass("cur-span");
        $('#s_content_2 .img-bars span[num="' + q + '"]').addClass("cur-span");
        if (h("pre")) {
            $("#s_content_2 .pre-img").children(".arrow").addClass("nouse-arrow")
        } else {
            if (h("next")) {
                $("#s_content_2 .next-img").children(".arrow").addClass("nouse-arrow")
            } else {
                $("#s_content_2 .pre-img").children(".arrow").removeClass("nouse-arrow");
                $("#s_content_2 .next-img").children(".arrow").removeClass("nouse-arrow")
            }
        }
    };
    var o = function (p) {
        $("#s_content_2 .img-bars-content").animate({left: p}, function () {
            b = true
        })
    };
    var k = function () {
        var q = +$(".img-bars-content .click-span").attr("num") || 0;
        var p = +$("#s_content_2 .img-viewer").attr("num") || 0;
        if (++q > f.sumImgCount - 1) {
            q = 0;
            o(0)
        } else {
            d({
                toIndex: $("#s_content_2 .img-bars span[num='" + p + "']").index(),
                isBtn: false,
                btn: "next",
                isSlideOver: b
            })
        }
        l(q, true)
    };
    var a = function (r, s) {
        var q = setInterval(k, 5000);
        $("#s_content_2 .s-news-left-wrap").mouseenter(function () {
            clearInterval(q)
        }).mouseleave(function () {
            clearInterval(q);
            q = setInterval(k, 5000)
        });
        (s && s.length > 0) && (f.sumImgCount = s.length);
        var u = false, p = false;
        e = r;
        $("#s_content_2 .s-news-img-ctner").on("mouseout", function () {
            var t = setTimeout(function () {
                if (p) {
                    clearTimeout(t);
                    return
                }
                var v = $("#s_content_2 .img-viewer").attr("num");
                l(v, false)
            }, 300)
        });
        $("#s_content_2 .s-news-img-ctner").delegate(".news-smallimg-mask", "mouseover", function () {
            var v = $(this).parent(), t = -1;
            if (!u) {
                u = setTimeout(function () {
                    if (!v.hasClass("cur-span")) {
                        t = v.attr("num");
                        if (t < 0) {
                            return
                        }
                        p = true;
                        l(t, false)
                    }
                }, 200)
            }
        }).delegate(".news-smallimg-mask", "mouseout", function () {
            if (u) {
                clearTimeout(u);
                u = false;
                p = false
            }
        }).delegate(".news-smallimg-mask", "mousedown", function (v) {
            v.preventDefault();
            if (!b) {
                return
            }
            var w = $(this).parent(), t = w.attr("num");
            if (t != $("#s_content_2 .img-viewer").attr("num")) {
                l(t, true);
                d({toIndex: w.index(), isBtn: false, isSlideOver: b})
            }
            n.fire("newsClick", {clickType: "smallImg"})
        }).delegate(".change-bigimg", "mouseover", function () {
            var v = $(this), t = $("#s_content_2 .img-viewer").attr("num");
            if (v.hasClass("pre-img")) {
                if (h("pre")) {
                    v.children(".arrow").addClass("nouse-arrow")
                } else {
                    v.children(".arrow").addClass("is-hover")
                }
            } else {
                if (v.hasClass("next-img")) {
                    if (h("next")) {
                        v.children(".arrow").addClass("nouse-arrow")
                    } else {
                        v.children(".arrow").addClass("is-hover")
                    }
                }
            }
        }).delegate(".change-bigimg", "mouseout", function () {
            var t = $(this);
            if (t.hasClass("pre-img")) {
                t.children(".arrow").removeClass("is-hover")
            } else {
                if (t.hasClass("next-img")) {
                    t.children(".arrow").removeClass("is-hover")
                }
            }
        }).delegate(".change-bigimg", "click", function () {
            if (!b) {
                return
            }
            var x = $(this), v = $("#s_content_2 .img-viewer").attr("num"), t = v;
            if (x.hasClass("pre-img")) {
                if (--v < 0) {
                    v = f.sumImgCount - 1;
                    var w = (f.sumImgCount - 5) * 82;
                    o(-w)
                }
                if (v == 0) {
                    x.children(".arrow").removeClass("is-hover");
                    x.children(".arrow").addClass("nouse-arrow")
                }
                $("#s_content_2 .next-img").children(".arrow").removeClass("nouse-arrow");
                l(v, true);
                d({
                    curIndex: $("#s_content_2 .img-bars span[num='" + t + "']").index(),
                    isBtn: true,
                    btn: "pre",
                    isSlideOver: b
                });
                n.fire("newsClick", {clickType: "preBigImgArrow"})
            } else {
                if (x.hasClass("next-img")) {
                    if (++v > f.sumImgCount - 1) {
                        v = 0;
                        o(0)
                    }
                    if (v == f.sumImgCount - 1) {
                        x.children(".arrow").removeClass("is-hover");
                        x.children(".arrow").addClass("nouse-arrow")
                    }
                    $("#s_content_2 .pre-img").children(".arrow").removeClass("nouse-arrow");
                    l(v, true);
                    d({
                        curIndex: $("#s_content_2 .img-bars span[num='" + t + "']").index(),
                        isBtn: true,
                        btn: "next",
                        isSlideOver: b
                    });
                    n.fire("newsClick", {clickType: "nextBigImgArrow"})
                }
            }
        }).delegate(".img-title", "click", function () {
            var w = this;
            var v = +$("#s_content_2 .img-viewer").attr("num") + 1;
            var t = $(w).text();
            var x = $(w).attr("href");
            n.fire("newsClick", {
                clickType: "bigImgTitle",
                resname: $(this).attr("data-res"),
                indexnum: v,
                title: t,
                url: x
            })
        }).delegate(".big-img-link", "click", function () {
            var w = this;
            var v = +$("#s_content_2 .img-viewer").attr("num") + 1;
            var t = $(w).parents(".s-news-img-ctner").children(".img-title").text();
            var x = $(w).attr("href");
            n.fire("newsClick", {clickType: "bigImg", resname: $(this).attr("data-res"), indexnum: v, title: t, url: x})
        }).mouseenter(function () {
            $(this).addClass("s-news-img-hasarrow");
            if (h("pre")) {
                $("#s_content_2 .pre-img").children(".arrow").addClass("nouse-arrow")
            } else {
                if (h("next")) {
                    $("#s_content_2 .next-img").children(".arrow").addClass("nouse-arrow")
                }
            }
        }).mouseleave(function () {
            $(this).removeClass("s-news-img-hasarrow")
        });
        if ($.isIE6) {
            $("#s_content_2 .s-news-img-ctner").delegate(".news-smallimg-img", "mouseover", function () {
                var v = $(this).parent(), t = -1;
                if (!u) {
                    u = setTimeout(function () {
                        if (!v.hasClass("cur-span")) {
                            t = v.attr("num");
                            if (t < 0) {
                                return
                            }
                            l(t, false)
                        }
                    }, 300)
                }
            }).delegate(".news-smallimg-img", "mouseout", function () {
                if (u) {
                    clearTimeout(u);
                    u = false
                }
            }).delegate(".news-smallimg-img", "mousedown", function () {
                if (!b) {
                    return
                }
                var v = $(this).parent(), t = v.attr("num");
                if (t != $("#s_content_2 .img-viewer").attr("num")) {
                    l(t, true);
                    d({toIndex: v.index(), isBtn: false, isSlideOver: b})
                }
            })
        }
        $("#s_content_2 .news-headlines").delegate(".headline-link", "click", function () {
            var t = $(this).hasClass("topline-link") ? "Y" : "N", v = $(this).hasClass("has-img-icon");
            n.fire("newsClick", {clickType: "headLineNews", newsHasIcon: v, newsIsTopLine: t})
        })
    };
    var h = function (q) {
        var p = $("#s_content_2 .img-viewer").attr("num");
        if (q) {
            return q == "pre" ? (p == 0) : (p == f.sumImgCount - 1)
        }
        return (p == 0) || (p == f.sumImgCount - 1)
    };
    var d = function (v) {
        b = false;
        var r = $("#s_content_2 .img-bars-content").position().left;
        var t = "", q = 82, u = 0, p = parseInt(Math.abs(r) / q);
        if (!v.isBtn) {
            if (p > 0 && v.toIndex - p == 0) {
                t = "pre"
            }
            if (v.toIndex != f.sumImgCount - 1 && v.toIndex - p == f.showSmallImgCount - 1) {
                t = "next"
            }
        } else {
            if (v.btn == "pre" && p > 0 && (v.curIndex - p == 0 || v.curIndex - p == 1)) {
                t = "pre"
            }
            if (v.btn == "next" && f.sumImgCount - f.showSmallImgCount - p > 0 && (v.curIndex - p == f.showSmallImgCount - 1 || v.curIndex - p == f.showSmallImgCount - 2)) {
                t = "next"
            }
        }
        if (t == "") {
            b = true;
            return
        }
        var s = t == "pre" ? (r + 82) : (r - 82);
        o(s)
    };
    g.imgAction = a
});
F.module("newsplus:newsfull/tab_change", function (c, b, a) {
    var f = c("newsplus:toolsfull/throttle");

    function e(j) {
        var h = j.type, g = (j.type == "words" ? "topic" : "words");
        if (j.dom.parent().parent().hasClass("hot-" + h)) {
            return
        }
        j.dom.parent().parent().removeClass("hot-" + g).addClass("hot-" + h);
        a.fire("newsShow", {showType: h});
        a.fire("newsClick", {clickType: h})
    }

    var d = function () {
        $("#s_content_2 .hot-title").delegate(".title-words", "mouseover", function () {
            f.throttle(e, null, {type: "words", dom: $(this)}, 300)
        }).delegate(".title-words", "mouseout", function () {
            f.clearThrottle(e)
        }).delegate(".title-topic", "mouseout", function () {
            f.clearThrottle(e)
        }).delegate(".title-topic", "mouseover", function () {
            f.throttle(e, null, {type: "topic", dom: $(this)}, 310)
        })
    };
    b.changeTab = d
});
F.module("newsplus:newsfull/change_for_change", function (f, c, a) {
    var g = f("newsplus:toolsfull/throttle");
    var b = function (j) {
        var k = j, h = k.attr("num") < 0 ? 0 : k.attr("num");
        h++;
        k.attr("num", h);
        a.use("newsfull/words_contructor", function (l) {
            l.createWords(h)
        })
    };
    var e = function (j) {
        var k = j, h = k.attr("num") < 0 ? 0 : k.attr("num");
        h++;
        k.attr("num", h);
        if (h % 2) {
            k.parent().parent().removeClass("first-topic").addClass("second-topic")
        } else {
            k.parent().parent().removeClass("second-topic").addClass("first-topic")
        }
    };
    var d = function () {
        var h = 0;
        $("#s_content_2 .hot-title").delegate(".title-change-words", "click", function () {
            var j = $(this);
            b(j);
            a.fire("newsClick", {clickType: "wordsChange", pagenum: $(this).attr("num")})
        })
    };
    c.change = d
});
F.module("newsplus:newsfull/words_contructor", function (a, c, j) {
    var g = a("newsplus:hotsugfull/init_sug"), e = a("newsplus:commonfull/conf");
    var b = null;
    var h = function (m) {
        var n = $("#s_content_2 .words-content");
        if (!b || b.length <= 0 || !n.get(0)) {
            return
        }
        var l = m * e.everyPageItemNum, k = l - b.length * parseInt(l / b.length);
        _showData = null;
        if (b.length > e.everyPageItemNum) {
            _showData = b.slice(k, k + e.everyPageItemNum);
            if (_showData.length < e.everyPageItemNum) {
                _showData = _showData.concat(b.slice(0, e.everyPageItemNum - _showData.length))
            }
        } else {
            _showData = b
        }
        j.use("newsfull/news_constructor", function (s) {
            var p = s.getNewsTpl("words"), q = s.dealWordsData(_showData, p);
            n.html(q);
            var r = new Array();
            for (i = 0; i < e.everyPageItemNum; i++) {
                r[i] = _showData[i].key
            }
            var o = $.stringify(r);
            j.fire("newsShow", {showType: "hotword", words: o, pagenum: "1"});
            g.bindEvent("words")
        })
    };
    var d = function (k) {
        b = k
    };
    var f = function (k) {
        $.each(b, function (l, m) {
            if (m.key == k) {
                m.isviewed = "1"
            }
        })
    };
    c.saveWordsData = d;
    c.createWords = h;
    c.viewedWords = f
});
F.module("newsplus:hotsugfull/init_sug", function (b, e, j) {
    var f = b("newsplus:commonfull/conf");
    var d = null, c = "", h;
    var g = function (m) {
        var k = "." + m + "-li", l = "." + m + "-item-content", n = $("#s_content_2 .hot-content-cell");
        if (!n) {
            return
        }
        n.find(k).delegate(".hot-item-link", "click", function () {
            var q = $(this).parent().parent(), r = $(this).find(l), p = $(this).find(".words-item-content").attr("data-title"), o = $(this).attr("href");
            j.use("hotsugfull/hot_newlabel", function (s) {
                s.setLocalData(m, r.attr("data-title"));
                q.addClass("viewed");
                q.removeClass("is-new-words")
            });
            j.fire("newsClick", {
                title: p,
                url: o,
                clickType: "wordTopic",
                newsType: m,
                r_index: q.index(),
                r_hasnew: $(this).hasClass("show-new"),
                pagenum: $(".title-change-words").attr("num"),
                newsindex: $(this).closest(".words-li").attr("data-num")
            })
        }).delegate(".hot-item-link", "mouseout", function () {
            if (d) {
                h = setTimeout(function () {
                    clearTimeout(h);
                    clearTimeout(d);
                    $("#s_news_hotsug").remove();
                    c = "";
                    d = null
                }, 350)
            }
        }).delegate(".hot-item-link", "mouseover", function () {
            if (s_session.sid.indexOf("9655") == -1) {
                var r = $(this), p = r.parent().parent(), o = p.attr("data-num"), q = r.find(l);
                if (o >= 0 && o <= f.everyPageItemNum - 1 && q.attr("data-title") != "") {
                    if (c === q.attr("data-title") && $("#s_news_hotsug").get(0)) {
                        return
                    }
                    clearTimeout(h);
                    c = q.attr("data-title");
                    clearTimeout(d);
                    $("#s_news_hotsug").remove();
                    d = null;
                    d = setTimeout(function () {
                        j.use("hotsugfull/hot_sug", function (s) {
                            s.createSug(m, q.attr("data-title"), o, p, function () {
                                $("#s_news_hotsug").mouseenter(function () {
                                    clearTimeout(h)
                                })
                            });
                            if (m === "words") {
                                if (q.attr("data-new") == 1) {
                                    p.removeClass("is-new-words")
                                }
                            }
                        });
                        j.use("hotsugfull/hot_newlabel", function (s) {
                            s.setLocalData(m, q.attr("data-title"));
                            r.addClass("viewed");
                            j.fire("hotsugClick", {clickType: "layerShow", newsType: m});
                            r.removeClass("is-new-words")
                        })
                    }, 500)
                }
            }
        });
        n.find("." + m + "-content").delegate(".hot-link", "click", function () {
            j.fire("hotsugClick", {clickType: "wordTopic", newsType: m, url: $(this).attr("href")})
        })
    };
    var a = function () {
        g("words");
        g("topic");
        $("#s_content_2 .hot-content-cell").mouseleave(function () {
            if (d) {
                clearTimeout(d);
                $("#s_news_hotsug").remove();
                c = "";
                d = null
            }
            if ($("#s_news_hotsug").get(0)) {
                $("#s_news_hotsug").remove()
            }
        })
    };
    e.bindEvent = g;
    e.initSug = a
});
F.module("newsplus:toolsfull/strpx", function (b, d, j) {
    var c = null, g = $.browser.ie < 9 ? true : false;
    var e = function () {
        if (c && c[0]) {
            return c
        } else {
            if ($("#s_news_strpx_span")[0]) {
                c = $("#s_news_strpx_span");
                return c
            } else {
                c = $('<span id="s_news_strpx_span"></span>').css({
                    visibility: "hidden",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    fontSize: "12px",
                    fontFamily: '"Microsoft Yahei", "微软雅黑", "宋体", \5b8b\4f53, Tahoma, Arial, Helvetica, STHeiti'
                }).appendTo($("body"));
                return c
            }
        }
    };
    var h = function (k) {
        if (k > 128) {
            return true
        } else {
            if (!g && (k == 77 || k == 87 || k == 109 || k == 119)) {
                return true
            }
            return false
        }
    };
    var a = function (k) {
        return e().html(k).text()
    };
    var f = function (o, k) {
        var p = $.decodeHTML(a(o));
        if (p.length * 2 <= k) {
            return p
        }
        var n = 0, m = "";
        for (var l = 0; l < p.length; l++) {
            m += p.charAt(l);
            if (h(p.charCodeAt(l))) {
                n += 2;
                if (n >= k) {
                    return $.encodeHTML(m.substring(0, m.length - 1)) + "..."
                }
            } else {
                n += 1;
                if (n >= k) {
                    return $.encodeHTML(m.substring(0, m.length - 1)) + "..."
                }
            }
        }
        return $.encodeHTML(m)
    };
    d.cutStrByLen = f
});
F.module("newsplus:toolsfull/throttle", function (c, b, a) {
    b.throttle = function (g, e, d, f) {
        if (g.throttleId) {
            clearTimeout(g.throttleId)
        }
        g.throttleId = setTimeout(function () {
            g.call((e ? e : null), d)
        }, (f ? f : 300))
    };
    b.clearThrottle = function (d) {
        if (d.throttleId) {
            clearTimeout(d.throttleId)
        }
    }
});
F.module("newsplus:hotsugfull/hot_newlabel", function (c, f, q) {
    var e = "hotsug_" + s_session.portrait, m = {words: 60, topic: 12}, g = "@+&+@", p = b("words"), l = b("topic");
    var j = "/home/xman/submit/newsviewed";
    var d = 0;
    var o = function (r) {
        clearTimeout(d);
        d = setTimeout(function () {
            $.ajaxpost(j, {title: r, type: "topline"}, function (s) {
            })
        }, 200)
    };
    f.isInLocal = function (s, r) {
        if (s === "words") {
            return h(p, k(r))
        } else {
            if (s === "topic") {
                return h(l, k(r))
            }
        }
    };
    function n(s) {
        if (!s) {
            return
        }
        if (!s[0]) {
            return k(s)
        }
        for (var r = s.length - 1; r >= 0; r--) {
            s[r] = k(s[r])
        }
        return s
    }

    f.setOldData = function (r, s) {
        if (r === "words") {
            p = n(s)
        } else {
            if (r === "topic") {
                l = n(s)
            } else {
                return
            }
        }
        f.setLocalData(r)
    };
    function b(s) {
        var r = $.localstorage.get(e + "_" + s);
        if (r.status == 0 && r.value && r.value != "") {
            return a(r.value.split(g))
        } else {
            return false
        }
    }

    f.getLocalData = b;
    f.setLocalData = function (s, t) {
        if (s == "words") {
            o(t);
            q.use("newsfull/words_contructor", function (u) {
                u.viewedWords(t)
            });
            return
        }
        var r = null;
        r = f.getLocalData(s);
        if (!r) {
            r = []
        }
        if (t && t !== "") {
            if (h(r, t) < 0) {
                r.push(k(t))
            }
        }
        if (r.length >= m[s]) {
            r = r.splice(r.length - m[s] - 1, m[s])
        }
        $.localstorage.set(e + "_" + s, r.join(g));
        if (s === "words" && t && t !== "" && !p[t]) {
            if (!p[0]) {
                p = []
            }
            p.push(k(t))
        } else {
            if (s === "topic" && t && t !== "" && !l[t]) {
                if (!l[0]) {
                    l = []
                }
                l.push(k(t))
            }
        }
    };
    function a(r) {
        if (r && r.length > 0) {
            for (var s = r.length - 1; s >= 0; s--) {
                if (r[s] == "") {
                    r.splice(s, 1)
                }
            }
        }
        return r
    }

    var h = function (t, s) {
        var u = k(s);
        if (t && u) {
            for (var r = t.length - 1; r >= 0; r--) {
                if (t[r] == u) {
                    return r
                }
            }
        }
        return -1
    };
    var k = function (r) {
        return String(r).replace(/\s+/g, "")
    };
    f.isInArray = h
});
F.module("newsplus:startfull/news_start", function (c, b, a) {
    b.init = function () {
        a.use("newsfull/news_constructor", function (e) {
            var f = (new Function("return (" + $("#s_newscard_asyn_data").html() + ")"))();
            e.render(f);
            d(f.titleArray, f)
        })
    };
    var d = function (f, g) {
        var e = f;
        a.use("newsfull/img_action", function (h) {
            h.imgAction(e, g.imgNews)
        });
        a.use("newsfull/tab_change", function (h) {
            h.changeTab()
        });
        a.use("newsfull/change_for_change", function (h) {
            h.change()
        });
        a.use("hotsugfull/init_sug", function (h) {
            h.initSug()
        })
    }
});
F.call("newsplus:startfull/news_start", "init");