	function $(id){return document.getElementById(id);}
  
	function sum(n1,n2){
		for (var i=n1,sum1=0;i<=n2;i++)
		{sum1=sum1+i;}
		return sum1;
	}

      function show(){
	   var n11=parseFloat($("start_num").value);
	   var n22=parseFloat($("end_num").value);
	   if (n11>0 && n22>0)
	   {
		   if(n11>=n22)
		   {alert("起始数必须小于终止数，请重输！");
		   $("start_num").value="";
		     $("end_num").value="";
		   }
		   else{
		     $("sum").value=sum(n11,n22);
		   }
	   }else{
	        alert("请输入数据！");
			$("start_num").focus();
	   }
	}
