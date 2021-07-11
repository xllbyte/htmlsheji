$(document).ready(function(){  
	$('#send').click(function(){
	var mobile=$('#mobile').val().length;
	 	if ($('#username').val()=='')
	 	{
	 		alert('请填写用户名');
	 		return false;
	 	}
	 	if ($('#company').val()=='')
	 	{
	 		alert('请填写工作单位');
	 		return false;
	 	}
	 	if ($('#job').val()=='')
	 	{
	 		alert('请填工作职位');
	 		return false;
	 	}
	 	if ($('#mobile').val()=='')
	 	{
	 		alert('请填写手机号');
	 		return false;
	 	}
	 		if ($('#email').val()=='')
	 	{
	 		alert('请填写email');
	 		return false;
	 	}
	 	if (mobile!=11)
	 	{
	 		alert('请检查输入的手机号！');
	 		return false;

	 	}
	   var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
       var email_val = $("#email").val();
       if(!search_str.test(email_val))
       {
        alert("请填写正确的email！");
        return false;
       }
	   
	   $.post("admin/save.php",$("#form1").serialize(),function(data,textStatus){
			var html = data;
			$('.content .content_resize .mainbar .article .article').html(html);
		});
	});
	$("#hotel").bind('select',function(){
		alert('hhello');
	});	
	 });
