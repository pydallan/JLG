$(document).ready(function() {
    $.getJSON($.domain + "/customer/lg/?callback=?", function(data) {
        var ht = "你好，欢迎光临嘉丽购！<a class=\"margin_a\" href=\"" + $.zhuce + "\">[<strong>注册</strong>]</a> <a class=\"margin_a\" href=\"" + $.denglu + "\" target=\"_self\">[<strong>登录</strong>]</a>";
        if (data.uid != 'null') {
            ht = "<span><a class=\"name_a\" href=\"" + $.domain + "/user/home/\">" + data.uname + "</a></span>你好，欢迎光临嘉丽购！<a class=\"margin_a\" href=\"" + $.domain + "/customer/logout/\">[<strong>退出</strong>]</a>";
            var lis = $(".zh_list>a");
            lis.eq(1).append("<strong>(" + data.bonus + ")</strong>");
            lis.eq(2).append("<strong>(￥" + data.cashbalance + ")</strong>");
            lis.eq(3).append("<strong>(" + data.bonusnum + ")</strong>");
            lis.eq(4).append("<strong>(￥" + data.couponbalance + ")</strong>")
        } 
        // else {
        //     if (getCookie("ladygoodUserId") != null) {
        //         ht = "您好，<span>" + getCookie("ladygoodUserName") + "</span><a class=\"margin_a\" href=\"" + $.domain + "/customer/login/\">[<strong>登录</strong>]</a><a class=\"margin_a\" href=\"" + $.domain + "/customer/register/\">[<strong>注册</strong>]</a>"
        //     }
        // }
        // ht += "<a class=\"cos\" href=\"" + $.domain + "/customer/activeuser/\">[<strong>电视用户激活送100元套券</strong>]</a>";
        // $(".jlg_user").append(ht)
    });
    $.getJSON($.domain + "/ajax/goods.php?act=cartgoodsnum&callback=?", function(data) {
        $("#cartGoodNum").html(data.cartGoodNum)
    });
    $(".box_h_top_left > ul >li:eq(1),.blackLink").bind("click", function() {
        AddFavorite()
    });
    $(".sc_jlg > a").bind("click", function() {
        AddFavorite()
    });
    $("#cart_n").html(getCookie("userCartGoodsAmount") ? getCookie("userCartGoodsAmount") : 0);
    $('#shop_car').bind({
        'mouseenter': function() {
            $("#shop_car").addClass("hover_on");
            $("#shop_car_box").slideDown(80, function() {
                getcart()
            })
        },
        'mouseleave': function() {
            $("#shop_car").removeClass("hover_on");
            $("#shop_car_box").hide()
        }
    });
    $('#account_center').bind({
        'mouseenter': function() {
            $("#account_list_box").slideDown(80)
        },
        'mouseleave': function() {
            $("#account_list_box").hide()
        }
    });
    $(".acc_sp_ico_left").click(function() {
        $.tleft("acc_sp", "li", "-52px", 200)
    });
    $(".acc_sp_ico_right").click(function() {
        $.tright("acc_sp", "li", "-52px", 200)
    });
    $('#keywords').bind({
        'focus': function() {
            if ($(this).val() == "请输入商品名称或电视销售编号") {
                $(this).val("");
                $(this).css({
                    "color": "",
                    "font-weight": ""
                })
            }
        },
        'blur': function() {
            if ($(this).val() == "") {
                $(this).css({
                    "color": "#999",
                    "font-weight": "normal"
                });
                $(this).val("请输入商品名称或电视销售编号")
            }
        }
    })
});

function delcart(gid) {
    var argnum = arguments;
    $.getJSON($.domain + "/cart/cart_accept.php?act=delsinglecart&gid=" + gid, function(data) {
        if (data.errid == 1) {
            if (argnum.length > 1) {
                window.location.href = "/cart/cart.php?cart=" + argnum[1]
            } else {
                $("#" + gid).hide()
            }
        }
    })
}

function getcart() {
    $.getJSON($.domain + "/ajax/goods.php?act=cartgoods&callback=?", function(data) {
        if (data.errid == '1') {
            $(".shop_car_list>ul:eq(0)>li").remove();
            for (var list in data['list']) {
                $(".shop_car_list>ul:eq(0)").append("<li id=\"" + list + "\"><a class=\"shop_car_list_a_img\" href=\"" + $.domain + data['list'][list]['url'] + "\" target=\"_blank\"><img alt=\"" + data['list'][list]['title'] + "\" src=\"" + data['list'][list]['pic_url'] + "\"/></a><a class=\"shop_car_list_a_name\" href=\"" + $.domain + data['list'][list]['url'] + "\" target=\"_blank\">" + data['list'][list]['title'] + "</a><strong>" + data['list'][list]['price_sale'] + "</strong><a class=\"shop_car_list_a_delete\" href=\"javascript:void(0);\" onclick=\"delcart('" + list + "')\">删 除</a></li>")
            }
        }
    })
}
$.extend({
    includePath: '',
    domain: '',
    tleft: '',
    tright: '',
    tchange: ''
});
$.includePath = "http://www.jialigou.cn/static";
$.domain = "http://www.jialigou.cn";
$.denglu = "http://localhost:1010/html/JLG-Login.html";
$.zhuce = "http://localhost:1010/html/JLG-zhuce.html";
$.tright = function(ele, eles, px, time) {
    $("#" + ele + ">" + eles + ":eq(0)").animate({
        marginLeft: px
    }, time, function() {
        $("#" + ele + ">" + eles + ":eq(0)").removeAttr("style").appendTo("#" + ele)
    })
};
$.tleft = function(ele, eles, px, time) {
    $("#" + ele + ">" + eles + ":last").css("margin-left", px).prependTo("#" + ele);
    $("#" + ele + ">" + eles + ":eq(0)").animate({
        marginLeft: "0px"
    }, time)
};
$.tchange = function(ele, eles, px, time) {
    $("." + ele + ">.tv_web_goods_list>div:eq(0)>" + eles + ":last").css("margin-left", px).prependTo("." + ele + ">.tv_web_goods_list>div:eq(0)");
    $("." + ele + ">.tv_web_goods_list>div:eq(0)>" + eles + ":eq(0)").animate({
        marginLeft: "0px"
    }, time)
};

function AddFavorite() {
    try {
        addToFavorite()
    } catch (e) {
        try {
            window.sidebar.addPanel()
        } catch (e) {
            alert("对不起，您的浏览器不支持此操作！ \n请使用菜单栏或Ctrl+D收藏本站。")
        }
    }
}
var lazyLoad = {
    Init: function() {
        return $("img[data-original]")
    },
    Calculate: function(lazyloadobject) {
        var windowHeight = $(window).height();
        var arrReturn = {};
        var _scrollTop;
        if (lazyloadobject.length == 0) {
            return null
        } else {
            lazyloadobject.each(function(i) {
                _scrollTop = parseInt($(this).offset().top - windowHeight);
                if (!arrReturn.hasOwnProperty(_scrollTop)) {
                    arrReturn[_scrollTop] = new Array()
                }
                arrReturn[_scrollTop].push($(this))
            });
            this.ArrLoad = arrReturn;
            return arrReturn
        }
    },
    ArrLoad: null,
    IsLoad: function(scrolltop, objectstop) {
        if (objectstop != null && objectstop != {}) {
            for (var i in this.ArrLoad) {
                if (parseInt(i) <= scrolltop && this.ArrLoad.hasOwnProperty(i)) {
                    for (j = 0; j < this.ArrLoad[i].length; j++) {
                        this.ArrLoad[i][j].attr("src", this.ArrLoad[i][j].attr("data-original")).removeAttr("data-original")
                    }
                    delete this.ArrLoad[i]
                }
            }
        }
    },
    Run: function() {
        var lazyLoadObject = this.Init();
        this.Calculate(lazyLoadObject);
        arrScrollTop = this.ArrLoad;
        if (arrScrollTop == null) {
            return false
        } else {
            var _this = this;
            _this.IsLoad($(window).scrollTop(), arrScrollTop);
            $(window).scroll(function() {
                _this.IsLoad($(this).scrollTop(), arrScrollTop)
            })
        }
    }
};
$(function() {
    lazyLoad.Run()
});
$(window).resize(function() {
    lazyLoad.Run()
});

function lazy(obj) {
    obj.attr("src", obj.attr("data-original")).removeAttr("data-original")
}
var web_domain = "jialigou.cn";

function addCookie(a, b) {
    var c = a + "=" + encodeURIComponent(b);
    var d = new Date();
    d.setTime(d.getTime() + 3600000000);
    c += "; path=/;domain=." + web_domain + "; expires=" + d.toGMTString();
    document.cookie = c
}

function getCookie(a) {
    var b = document.cookie.split("; ");
    for (var i = 0; i < b.length; i++) {
        var c = b[i].split("=");
        if (c[0] == a) return decodeURIComponent(c[1])
    }
    return null
}

function delCookie(a) {
    var b = new Date();
    b.setTime(b.getTime() - 10000);
    document.cookie = name + "=0; expires=" + b.toGMTString()
}

function correctPNG() {
    for (var i = 0; i < document.images.length; i++) {
        var a = document.images[i];
        var b = a.src.toUpperCase();
        if (b.substring(b.length - 3, b.length) == "PNG") {
            var c = (a.id) ? "id='" + a.id + "' " : "";
            var d = (a.className) ? "class='" + a.className + "' " : "";
            var e = (a.title) ? "title='" + a.title + "' " : "title='" + a.alt + "' ";
            var f = "display:inline-block;" + a.style.cssText;
            if (a.align == "left") {
                f = "float:left;" + f
            }
            if (a.align == "right") {
                f = "float:right;" + f
            }
            if (a.parentElement.href) {
                f = "cursor:hand;" + f
            }
            var g = "<span " + c + d + e + " style=\"" + "width:" + a.width + "px; height:" + a.height + "px;" + f + ";" + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" + "(src=\'" + a.src + "\', sizingMethod='scale');\"></span>";
            a.outerHTML = g;
            i = i - 1
        }
    }
}

function alphaBackgrounds() {
    var a = navigator.appVersion.match(/MSIE (d+.d+)/, '');
    var b = (a != null && Number(a[1]) >= 5.5);
    for (i = 0; i < document.all.length; i++) {
        var c = document.all[i].currentStyle.backgroundImage;
        if (c) {
            if (c.match(/.png/i) != null) {
                var d = c.substring(5, c.length - 2);
                document.all[i].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d + "', sizingMethod='crop')";
                document.all[i].style.backgroundImage = "url('')"
            }
        }
    }
}
if (navigator.platform == "Win32" && navigator.appName == "Microsoft Internet Explorer" && window.attachEvent) {
    window.attachEvent("onload", correctPNG);
    window.attachEvent("onload", alphaBackgrounds)
}
$(function() {
    var backtop = $('#backtop');
    $(window).scroll(function() {
        backtop.hide();
        var _scrtop = $(this).scrollTop();
        if (_scrtop > 200) {
            backtop.css("display", "block")
        }
    });
    backtop.click(function() {
        if ($.browser.msie || $.browser.mozilla) $("html").animate({
            scrollTop: 0
        }, "normal");
        else $("body").animate({
            scrollTop: 0
        }, "normal")
    })
});

function sitePop() {}
sitePop.prototype = {
    show: function(id) {
        if (getCookie("pop") != 1) {
            $("." + id).show();
            this.hided(id)
        }
    },
    hided: function(id) {
        $("." + id).click(function() {
            var d = new Date();
            d.setTime(d.getTime() + 180000);
            document.cookie = "pop=1; path=/;domain=." + web_domain + "; expires=" + d;
            $("." + id).hide()
        })
    }
};