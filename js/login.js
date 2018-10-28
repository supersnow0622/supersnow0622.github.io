$(function(){
	
	$('#switch_qlogin').click(function(){
		$('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_bottom').animate({left:'0px',width:'70px'});
		$('#qlogin').css('display','none');
		$('#web_qr_login').css('display','block');
		});
	$('#switch_login').click(function(){
		$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_bottom').animate({left:'154px',width:'70px'});		
		$('#qlogin').css('display','block');
		$('#web_qr_login').css('display','none');
	});
	if(getParam("a")=='0')
	{
		$('#switch_login').trigger('click');
	}
	$('#reg').click(register);
	$('#loginname').blur(function(){
		if($('#loginname').val() == ''){
			$('#loginname').focus();
			$('#loginnameCue').html("用户名不能为空");
		}else{
			$('#loginnameCue').html("");
			$('#loginname').css({
				border:"1px solid #D7D7D7",
				boxShadow: "none"
			});
			
		}
	});
	
	$('#passwd').blur(function(){
		if ($('#passwd').val().length < pwdmin) {
			$('#passwd').focus();
			$('#passwdCue').html("密码不能少于"+pwdmin+"位");
		}else{
			$('#passwdCue').html("");
			$('#passwd').css({
				border:"1px solid #D7D7D7",
				boxShadow: "none"
			});
		}
	});
	$('#passwd2').blur(function(){
		if ($('#passwd2').val() != $('#passwd').val()) {
			$('#passwd2').focus();
			$('#passwd2Cue').html("两次密码不一致");
		}else{
			$('#passwd2Cue').html("");
			$('#passwd2').css({
				border:"1px solid #D7D7D7",
				boxShadow: "none"
			});
		}
	});
	$('#mobile').blur(function(){
		var mobile = $('#mobile').val();
		var pattern = /^1[34578]\d{9}$/;
		if(!pattern.test(mobile)){
			$('#mobile').focus();
			$('#mobileCue').html("手机号码格式不正确");
		}else{
			$('#mobileCue').html("");
			$('#mobile').css({
				border:"1px solid #D7D7D7",
				boxShadow: "none"
			});
		}
	});
	$('#email').blur(function(){
		var email = $('#email').val();
		var pattern = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
		if(!pattern.test(email)){
			$('#email').focus();
			$('#emailCue').html("邮箱格式不正确");
		}else{
			$('#emailCue').html("");
			$('#email').css({
				border:"1px solid #D7D7D7",
				boxShadow: "none"
			});
		}
	});
});
	
function logintab(){
	scrollTo(0);
	$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
	$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
	$('#switch_bottom').animate({left:'154px',width:'96px'});
	$('#qlogin').css('display','none');
	$('#web_qr_login').css('display','block');
}

//根据参数名获得该参数 pname等于想要的参数名 
function getParam(pname) { 
    var params = location.search.substr(1); // 获取参数 平且去掉？ 
    var ArrParam = params.split('&'); 
    if (ArrParam.length == 1) { 
        //只有一个参数的情况 
        return params.split('=')[1]; 
    } 
    else { 
         //多个参数参数的情况 
        for (var i = 0; i < ArrParam.length; i++) { 
            if (ArrParam[i].split('=')[0] == pname) { 
                return ArrParam[i].split('=')[1]; 
            } 
        } 
    } 
}  
var pwdmin = 6;
function register(){
	if ($('#loginname').val() == "") {
		$('#loginname').focus().css({
			border: "1px solid red",
			boxShadow: "0 0 2px red"
		});
		$('#loginnameCue').html("登录名不能为空");
		return false;
	}
	if ($('#passwd').val() == "") {
		$('#passwd').focus().css({
			border: "1px solid red",
			boxShadow: "0 0 2px red"
		});
		$('#passwdCue').html("密码不能为空");
		return false;
	}
	if ($('#passwd2').val() == "") {
		$('#passwd2').focus().css({
			border: "1px solid red",
			boxShadow: "0 0 2px red"
		});
		$('#passwd2Cue').html("确认密码不能为空");
		return false;
	}
	if ($('#username').val() == "") {
		$('#username').focus().css({
			border: "1px solid red",
			boxShadow: "0 0 2px red"
		});
		$('#usernameCue').html("用户名不能为空");
		return false;
	}
	if ($('#mobile').val() == "") {
		$('#mobile').focus().css({
			border: "1px solid red",
			boxShadow: "0 0 2px red"
		});
		$('#mobileCue').html("手机号不能为空");
		return false;
	}
	if ($('#email').val() == "") {
		$('#email').focus().css({
			border: "1px solid red",
			boxShadow: "0 0 2px red"
		});
		$('#emailCue').html("邮箱不能为空");
		return false;
	}

	$('#regUser').submit();
}
