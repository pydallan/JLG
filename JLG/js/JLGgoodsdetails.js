jQuery(function($){


            var zd_pic = document.querySelector("#zd_pic");
            var oldPrice = document.querySelector(".oldPrice");
            var newPrice = document.querySelector("#tprice");
            var uname = document.querySelector(".uname");

            // console.log(uname);



            //裁切问号
            var params = decodeURI(location.search).slice(1);
            //组合成对象信息
            var paramsArr = params.split("&");
            var paramsObj = {};
            paramsArr.forEach(function(item){
                var arr = item.split("=");
                paramsObj[arr[0]] = arr[1];
            });
            //找到对应的商品，赋值
            zd_pic.children[0].src=paramsObj.imgurl;
            uname.innerHTML=paramsObj.name;
            newPrice.innerHTML = paramsObj.price;

           

            // oldPrice.innerHTML = paramsObj.price;
 


// 添加购物车=====================
 $sy_add = $(".add_sp_car");
// 判断是否登录状态=================
if($.cookie("username") != null){
    $add = $(".add");
    $del = $(".reduce");
    $input = $("#num");
    $a = 1;
    $add.on("click",function(){
                // console.log() ;
                // var a = parseInt($input.val());
                $a++;
                $input.val($a);
                  // console.log($input.val());
                $qty=$input.val();
        })
//     // console.log(sy_add);
    $del.on("click",function(){
                $a--;
                if($a < 1){
                    $a = 1;
                }
                $input.val($a);
                $qty=$input.val();
        })
$sy_add.on("click",function(){
    var selvar = getenable();
    var num = $("#num").val();
    if(selvar==false){
        $("#no_xz").attr("class","no_xz");
        $("#hxz").css("display","");
        return;
    }
   

//     // console.log(sy_add);

    $imgurl = $(".pic").attr("src");
    // console.log($imgurl);
    $yonghu = $.cookie("username");
    $uname = paramsObj.name;
    $price = paramsObj.price;
    $id = paramsObj.id;
    console.log($price);
    $qty = $input.val();
    $.ajax({
                    url: '../api/SCcai.php',
                    type: 'POST',
                    data: { 
                            imgurl:$imgurl,

                        id :$id,
                            uname: $uname,
                        //     imgsrc:$imgsrc,
                            uyonghu:$yonghu,
                        //     jieshao:$jieshao,
                            price:$price,
                        //     oldprice:$oldprice,
                        //     xiaoji:$xiaoji,
                            qty:$qty
                        },
                    success: function(data){

                            if(data == "true"){
                                alert("插入成功");
                                }
                            }
                            // console.log(data);
             
           

 })

})
}
else{
    $sy_add.on("click",function(){
        $sy_add.attr("href","../html/JLG-Login.html");
    })
 }

    
          $("#zoom_01").ezPlus();
                $("#zoom_03").ezPlus({
                    gallery: 'gallery_01',
                    cursor: 'pointer',
                    galleryActiveClass: "active",
                    imageCrossfade: true,
                    loadingIcon: "images/spinner.gif"
                });

                $("#zoom_03").bind("click", function (e) {
                    var ez = $('#zoom_03').data('ezPlus');
                    ez.closeAll(); //NEW: This function force hides the lens, tint and window
                    $.fancybox(ez.getGalleryList());
                    return false;
                });




        // 根据登陆用户数据,改变登陆样式
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
                    '<a class="margin_a" href="JLG-login" clog-get="true">'+'[<strong>登录</strong>]'+'</a>' +
                    '<a class="margin_a" href="JLG-zhuce.html" rel="nofollow" clog-get="true">'+'[<strong>注册</strong>]'+'</a>';
                    $view.append(s0);
                    // console.log(s0);
           }
})