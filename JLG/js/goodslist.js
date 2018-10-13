function runImg() {}
runImg.prototype = {
    bigbox: null,
    boxul: null,
    imglist: null,
    numlist: null,
    index: 0,
    timer: null,
    play: null,
    imgurl: [],
    count: 0,
    $: function(a) {
        if (typeof(a) == "string") {
            if (a.indexOf("#") >= 0) {
                a = a.replace("#", "");
                if (document.getElementById(a)) {
                    return document.getElementById(a)
                } else {
                    return null
                }
            } else {
                return document.createElement(a)
            }
        } else {
            return a
        }
    },
    info: function(a) {
        this.bigbox = this.$(a);
        for (var i = 0; i < 2; i++) {
            var b = this.$("ul");
            for (var j = 1; j <= this.count; j++) {
                var c = this.$("li");
                c.innerHTML = i == 0 ? this.imgurl[j - 1] : j;
                b.appendChild(c)
            }
            this.bigbox.appendChild(b)
        }
        this.boxul = this.bigbox.getElementsByTagName("ul");
        this.boxul[0].className = "";
        this.boxul[1].className = "countNum";
        this.imglist = this.boxul[0].getElementsByTagName("li");
        this.numlist = this.boxul[1].getElementsByTagName("li");
        this.numlist[0].className = "current"
    },
    action: function(a) {
        this.autoplay();
        this.mouseoverout(this.bigbox, this.numlist)
    },
    imgshow: function(a, b, c) {
        this.index = a;
        var d = 0;
        for (var i = 0; i < b.length; i++) {
            b[i].className = ""
        }
        b[this.index].className = "current";
        for (var j = 0; j < c.length; j++) {
            $(c[j]).hide()
        }
        var e = this;
        $(c[e.index]).fadeIn(100)
    },
    autoplay: function() {
        var a = this;
        this.play = setInterval(function() {
            a.index++;
            if (a.index > a.imglist.length - 1) {
                a.index = 0
            };
            a.imgshow(a.index, a.numlist, a.imglist)
        }, 5000)
    },
    mouseoverout: function(a, b) {
        var c = this;
        a.onmouseover = function() {
            clearInterval(c.play)
        };
        a.onmouseout = function() {
            c.autoplay(c.index)
        };
        for (var i = 0; i < b.length; i++) {
            b[i].index = i;
            b[i].onmouseover = function() {
                c.imgshow(this.index, c.numlist, c.imglist)
            }
        }
    }
};
$(document).ready(function() {
    $(".s_p_list").mouseover(function() {
        $(this).attr("class", "s_p_list sp_on")
    });
    $(".s_p_list").mouseout(function() {
        $(this).attr("class", "s_p_list")
    });
    var a = getCookie("ladygood_goods");
    var b = "";
    if (a) {
        var c = a.split("||");
        var d;
        for (d = 0; d < 5; d++) {
            if (typeof(c[d]) != 'undefined' && c[d] != "*") {
                var e = c[d].split("~");
                b += "<li><a href=\"" + e[0] + "\" target=\"_blank\"><img src=\"" + e[1] + "\"/></a><span><a href=\"" + e[0] + "\" target=\"_blank\">" + e[3] + "</a><em>嘉丽价：￥" + e[4] + "</em></span></li>"
            }
        };
        $("#showhistory").html(b)
    };
    $.getJSON($.domain + "/ajax/goods.php?act=hotSale", function(c) {
        if (c.errid == '1') {
            for (var d in c['hotSale']) {
                $("#rexiaotuijian").append("<li><a target=\"_blank\" href=\"" + c['hotSale'][d]['url'] + "\"><img src=\"" + c['hotSale'][d]['pic_url'] + "\" width=\"60\" height=\"60\" /></a><span><a target=\"_blank\" href=\"" + c['hotSale'][d]['url'] + "\">" + c['hotSale'][d]['item_name'] + "</a><em>嘉丽价：￥" + c['hotSale'][d]['price_sale'] + "</em></span></li>")
            }
        }
    });
    $("#search_S_info_list > a").mouseover(function() {
        var c = $(this).attr('alt');
        $(this).addClass("s_on");
        $(this).siblings().removeClass("s_on");
        $.getJSON("/ajax/goods.php?act=getkind&typestr=" + c, function(d) {
            $("#search_S_list").html(d.html)
        })
    })
});