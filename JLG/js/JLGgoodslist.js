document.addEventListener("DOMContentLoaded",function(){
    // console.log(shoppings);
    p=new Promise(function(resolve,reject){
                        var  xhr = new XMLHttpRequest();
                        var status =[200,304];
                        xhr.onload = function(){
                            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                                var data =JSON.parse(xhr.responseText);
                                // console.log(xhr.responseText);
                                resolve(data);
                            }
                        }
                        xhr.open("get","../api/JLGgoodsList.php",true);
                        xhr.send(null);
                    });
    p.then(
        function(data){
            var shoppings = document.getElementsByClassName("shoppings")[0];
                //中间页面渲染
                function  middleRomance(){
                    var str = "";
                    str+= data.map(function(item){
                        return  '<li class="s_p_list">' 
                            + '<a href="#" class="s_p_pic"><img src=' + item.imgurl + ' data-guid='+item.id+' class="tupian"></a> '
                            + '<a href="#"  class="s_p_name">' + item.name +'</a>'
                            + '<font style="color:#E52780">'+item.nickname+'</font>'
                            + '<p style="color:red;">' +'￥'+item.price + '</p>'
                            +'<p>'+' ￥'+item.nowprice+'</p>'
                            + '<p class="gm_number">' +'已售出'+'<span>'+item.number +'</span>'+'件'+ '</p>'
                            + '</li>'
                        }).join("");
                        
                        shoppings.innerHTML = str;
                    console.log(shoppings);
                    skip();
                    }
                middleRomance(data);

// =========================点击排序
               
                var S_Sort = document.querySelector(".S_Sort");
                var G_D_on = document.querySelector(".G_D_on");
              
                var da = true;
                G_D_on.onclick=function(){
                    if(da == true){
                        var res = data.sort(function(a,b){
                        return a.price - b.price;
                        
                        });
                         ddleRomance(data);
                    }
                    else if(da == false){
                         var res = data.sort(function(a,b){
                         return b.price - a.price;
                         });
                         ddleRomance(data);
                    }
                    da = ! da;

                    function  ddleRomance(){
                    var str = "";
                    str+= data.map(function(item){
                        return  '<li class="s_p_list">' 
                            + '<a href="#" class="s_p_pic"><img src=' + item.imgurl + ' class="tupian"></a> '
                            + '<a href="#"  class="s_p_name">' + item.name +'</a>'
                            + '<font style="color:#E52780">'+item.nickname+'</font>'
                            + '<p style="color:red;">' +'￥'+item.price + '</p>'
                            +'<p>'+' ￥'+item.nowprice+'</p>'
                            + '<p class="gm_number">' +'已售出'+'<span>'+item.number +'</span>'+'件'+ '</p>'
                            + '</li>'
                        }).join("");
                        
                        shoppings.innerHTML = str;
                    console.log(shoppings);
                    skip();

                    }
                ddleRomance(data);
}




 // function compare(attr){
   
 //        return function bijiao(obj1,obj2){ 
 //        // var d = new Date;
 //        var value1 = new Date(obj1[attr]);
 //        var value2 = new Date(obj2[attr]);
 //        return value1-value2;}
    // }
    // else{
    //     return function bijiao(obj1,obj2){ 
    //     var value1 = obj1[attr];
    //     var value2 = obj2[attr];
    //     return value1-value2;}
    // }                            
 // }





                // 点击图片传送数据
                function skip(){
                    // var tupian = document.getElementsByClassName("tupian");
                    //     for(let i=0;i<tupian.length;i++){
                    //         tupian[i].onclick = function(e){
                    //             var currentLi= e.target.parentElement.parentElement;          console.log("000");
                    //             var goods = {
                    //                 name:currentLi.children[1].innerHTML,
                    //                 imgurl: e.target.src,
                    //                 price:currentLi.children[3].innerHTML,

                    //                 // price:currentLi.children[3].innerHTML*1,
                                    
                    //             }
                    //             var params = "";
                    //             for(var key in goods){
                    //                 params += key + '=' +goods[key] + '&'
                    //             }
                    //                 params= params.slice(0,-1);
                    //                 location.href = 'JLG-CommodityDetails.html?' + encodeURI(params);
                    //         }
                    //     }  

                    $(".s_p_list").each(function(idx,item){
                          
                           item.onclick = function(){
                               
                                 var str = "";
                                for(var key in data[idx]){
                                    str += key + "=" + data[idx][key] + "&";
                                }
                                str = str.slice(0,-1);
                                location.href = "../html/JLG-CommodityDetails.html?" + encodeURI(str);
                                console.log(str);
                           }

                    });
                    





                        // var s_p_name = document.getElementsByClassName("s_p_name");
                        // for(let i=0;i<s_p_name.length;i++){
                        //     s_p_name[i].onclick = function(e){
                        //         var currentLi= e.target.parentElement.parentElement;          console.log("000");
                        //         var goods = {
                        //             name: e.target.innerHTML,
                        //             imgurl:currentLi.children[0].src,
                        //             price:currentLi.children[3].innerHTML,
                        //             // price:currentLi.children[3].innerHTML*1,
                                    
                        //         }
                        //         var params = "";
                        //         for(var key in goods){
                        //             params += key + '=' +goods[key] + '&'
                        //         }
                        //             params= params.slice(0,-1);
                        //             location.href = 'JLG-CommodityDetails.html?' + encodeURI(params);
                        //     }
                        // }

                }
                skip();
        }

    );

})