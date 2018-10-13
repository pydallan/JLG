function runImg() {}
runImg.prototype = {
    bigbox: null,
    boxfisrt: null,
    boxsecond: null,
    imglist: null,
    numlist: null,
    index: 0,
    timer: null,
    play: null,
    imgurl: [],
    title: [],
    issetnum: true,
    count: 0,
    parentclass: null,
    parenttag: null,
    childclass: null,
    childtag: null,
    $: function(obj) {
        if (typeof(obj) == "string") {
            if (obj.indexOf("#") >= 0) {
                obj = obj.replace("#", "");
                if (document.getElementById(obj)) {
                    return document.getElementById(obj)
                } else {
                    return null
                }
            } else {
                return document.createElement(obj)
            }
        } else {
            return obj
        }
    },
    info: function(id) {
        this.bigbox = this.$(id);
        for (var i = 0; i < 2; i++) {
            var ul = this.issetnum ? this.$("ul") : i == 0 ? this.$("ul") : this.$("div");
            for (var j = 1; j <= this.count; j++) {
                var li = this.issetnum ? this.$("li") : i == 0 ? this.$("li") : this.title.length > 0 ? this.$("em") : this.$("i");
                li.innerHTML = i == 0 ? this.imgurl[j - 1] : this.issetnum ? j : this.title.length > 0 ? this.title[j - 1] : '';
                ul.appendChild(li)
            }
            this.bigbox.appendChild(ul)
        }
        if (this.title.length > 0) {
            var div = this.$("div");
            div.className = "nxt_list_bg";
            this.bigbox.appendChild(div)
        }
        this.boxfisrt = this.bigbox.getElementsByTagName("ul")[0];
        if (this.issetnum) {
            this.boxsecond = this.bigbox.getElementsByTagName(this.parenttag)[1];
            this.boxfisrt.className = "imgList"
        } else {
            if (this.title.length > 0) {
                this.boxsecond = this.bigbox.getElementsByTagName(this.parenttag)[0]
            } else {
                this.boxsecond = this.bigbox.getElementsByTagName(this.parenttag)[3]
            }
        }
        this.boxsecond.className = this.parentclass;
        this.imglist = this.boxfisrt.getElementsByTagName("li");
        this.numlist = this.boxsecond.getElementsByTagName(this.childtag);
        this.numlist[0].className = this.childclass
    },
    action: function(id) {
        this.autoplay();
        this.mouseoverout(this.bigbox, this.numlist)
    },
    imgshow: function(num, numlist, imglist) {
        this.index = num;
        var alpha = 0;
        for (var i = 0; i < numlist.length; i++) {
            numlist[i].className = ""
        }
        numlist[this.index].className = this.childclass;
        for (var j = 0; j < imglist.length; j++) {
            $(imglist[j]).hide()
        }
        var $this = this;
        $(imglist[$this.index]).fadeIn(100)
    },
    autoplay: function() {
        var $this = this;
        this.play = setInterval(function() {
            $this.index++;
            if ($this.index > $this.imglist.length - 1) {
                $this.index = 0
            };
            $this.imgshow($this.index, $this.numlist, $this.imglist)
        }, 2000)
    },
    mouseoverout: function(box, numlist) {
        var $this = this;
        box.onmouseover = function() {
            clearInterval($this.play)
        };
        box.onmouseout = function() {
            $this.autoplay($this.index)
        };
        for (var i = 0; i < numlist.length; i++) {
            numlist[i].index = i;
            numlist[i].onmouseover = function() {
                $this.imgshow(this.index, $this.numlist, $this.imglist)
            }
        }
    }
};
$(document).ready(function() {
    var runimg = new runImg();
    $("#box>ul>li").each(function(i, ele) {
        runimg.imgurl.push($(ele).html())
    });
    $("#box>ul").remove();
    runimg.count = runimg.imgurl.length;
    runimg.childclass = "current";
    runimg.parentclass = "countNum";
    runimg.parenttag = "ul";
    runimg.childtag = "li";
    runimg.info("#box");
    runimg.action("#box");
});