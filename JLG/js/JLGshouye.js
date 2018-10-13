jQuery(function($){
  // 返回顶部效果
  $backtop = $(".backtop");
  $backtop.on("click",function () {
    var timer = setInterval(function () {
      var speed = parseInt(scrollY / 10);
      if (speed <= 20) {
        speed = 5;
      }
      if (scrollY <= 0) {
        clearInterval(timer);
      }
      // console.log(speed);
      scrollBy(0, -speed);
      }, 30)
  })
  

  // 轮播图效果--中间商品-TV新品
  var runimg2 = new runImg();
  runimg2.imgurl = [];
  $("#tvad>ul>li").each(function(i, ele) {
      runimg2.imgurl.push($(ele).html())
  });
  $("#tvad>ul").remove();
  $("#tvad>div").remove();
  runimg2.count = runimg2.imgurl.length;
  runimg2.childclass = "on";
  runimg2.childtag = "i";
  runimg2.parenttag = "div";
  runimg2.parentclass = "nxt_list";
  runimg2.issetnum = false;
  runimg2.info("#tvad");
  runimg2.action("#tvad");



    // 根据登陆用户数据,改变登陆样式

  $shows = $(".shows");
  $view = $(".jlg_user");
  if($.cookie("username") != null){
    $view.children().remove();
    var uname = $.cookie("username");
    after();
    $tuichu = $(".tuichu");
    $tuichu.on("click",function(){
      $view.children().remove();
      $.cookie("username",null,{expires: -1,path:"/"});
      preve();
    })
          
  }else{
      preve();
  }
    
  // =============登陆后
  function after(){
     var str = "";
      str +=  
        '<a class="name_a" href="#">'+uname+'用户'+'&nbsp'+'</a>'+
        '<span>'+'你好，欢迎光临嘉丽购！'+'</span>'+
        '<a class="tuichu margin_a" href="#" rel="nofollow">'+'[<strong>退出</strong>]'+'</a>';
        $view.append(str);
  }

// =================登录前
   function preve(){
    var s0 = "";
    s0 += '<span>'+'你好，欢迎光临嘉丽购！'+'</span>'+
      '<a class="margin_a" href="html/JLG-login" clog-get="true">'+'[<strong>登录</strong>]'+'</a>' +
      '<a class="margin_a" href="html/JLG-zhuce.html" rel="nofollow" clog-get="true">'+'[<strong>注册</strong>]'+'</a>';
      $view.append(s0);
      // console.log(s0);
  }


  // console.log(shoppings);
    p=new Promise(function(resolve,reject){
        var  xhr = new XMLHttpRequest();
        var status =[200,304];
        xhr.onload = function(){
            if(status.indexOf(xhr.status)!=-1){
                var data =JSON.parse(xhr.responseText);
                // console.log(xhr.responseText);
                resolve(data);
            }
        }
        xhr.open("get","../api/shougoodList.php",true);
        xhr.send(null);
    });
    p.then(
        function(data){
            //轮播图下面页面渲染
            // var arr = [];
            function  uRomance(){

                var str = "";
                for(var i=0;i<7;i++){
                    str+='<li class="zw_'+(i+1)+' ">' 
                        + '<a href="#" class="tv_googs_pic"><img src=' + data[i].imgurl + ' class="tupian"></a> '
                        + '<span>' + data[i].name +'</span>'
                        +'<span>'+data[i].price + '</span>'
                        + '<span>'+data[i].id+'</span>'
                        + '</li>';
                        // arr.push(data[i].id);
                }
                var shoppings = document.getElementsByClassName("shangpin")[0];
                shoppings.innerHTML = str;
                skip();

            }
            uRomance(data);

            // 中间页面渲染商品列表
            function  mRomance(){
                var str = ""; 
                for(var i=7;i<12;i++){
                    str+='<li class="tv_list ">' 
                        + '<a href="#" class="tv_googs_pic"><img src=' + data[i].imgurl + ' class="tupian"></a> '
                        + '<a href="#" class="tv_goods_name">' + data[i].name + '</a>'
                        + '<p style="color:red;">' +data[i].price + '</p>'
                        + '<span>'+data[i].id+'</span>'
                        + '</li>';
                }
                var mshoppings = document.getElementsByClassName("shangpin2")[0];
                mshoppings.innerHTML = str;
                skip();

            }
            mRomance(data);
               
                // 点击图片传送数据
            function skip(){
                var s_p_name = document.getElementsByClassName("tupian");
                // console.log(s_p_name);
                for(let i=0;i<s_p_name.length;i++){
                    s_p_name[i].onclick = function(e){
                        var currentLi= e.target.parentElement.parentElement;          
                        // console.log("000");
                        // price.slice(1,0);
                        var goods = {
                            name:currentLi.children[1].innerHTML,
                            imgurl: e.target.src,
                            // id:currentLi.children[0].innerHTML,
                            id:currentLi.children[3].innerHTML,
                            price:currentLi.children[2].innerHTML,

                            // price:currentLi.children[2].innerHTML*1,
                            
                        } 
                         console.log(data[i].id);
                        var str = "";

                        for(var key in goods){
                            str += key + '=' +goods[key] + '&'
                        }
                        str= str.slice(0,-1);
                            
                        location.href = '../html/JLG-CommodityDetails.html?' + encodeURI(str);
                    }
                }
            }
            skip();
        }

    );


})