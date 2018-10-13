function k(){
	var con_txt_length = 200 - $.trim($('#zx_consult').val()).length;
	if(con_txt_length>0){
		if(con_txt_length>195){
			$("#con_txt_size").html("必须在5-200个字之间");
			return false;
		}else{
			$("#con_txt_size").html("你还可以输入<strong class='c_red'>"+con_txt_length+"</strong>字");
			return true;
		}
	}else{
		$("#con_txt_size").html("你已经超出<strong class='c_red'>"+Math.abs(con_txt_length)+"</strong>字");
		return false;
	}
}

$(function(){
	$('#zx_consult').bind('keydown keypress keyup', function() {k();});
	$('#smt_consult').bind('click', function() {
		send_consult();
	});
	get_consult();
});

function send_consult(){
	$.getJSON("http://www.jialigou.cn/customer/lg/?callback=?",
		function(data) {
			if (data.uid != 'null') {
				if(k()==true && $.trim($('#zx_consult').val()).length>0){
					var consult_var = $.trim($('#zx_consult').val());
					var ext = "";
					if(typeof(gid)!="undefined"){
						ext = "&gid="+gid;
					}
					$.post("/ajax/user.php?act=addConsult"+ext, {"consult":consult_var}, function(rtn){
						if(rtn.errid=='1'){
							alert("发表成功，请耐心等待工作人员回复");
							location.reload();
						}else{
							alert("发表失败，请重试");
						}			
					},"json");
				}
			}else{
				location.href="/customer/login/";
			}
	});
}

function get_consult(){
	var ext = "";
	if(typeof(gid)!="undefined"){
		ext = "&gid="+gid;
	}
	$.get("/ajax/goods.php?act=getconsult&page=1"+ext, function(data){
		$("#consult_content").html(data);
	});
}

function get_consult_list(url) {
	$.get(url,function(data){
		  $('#consult_content').html(data);
	});
}