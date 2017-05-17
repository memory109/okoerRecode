window.onload = function(){

	// 回到顶部部分的隐藏和显示

	var backShow = document.getElementsByName("backShow");
	var backShow1 = document.getElementsByName("backShow1");

	for(var i = 0;i < backShow.length;i++){
		backShow[i].setAttribute("back",i);
	}
	for(var i = 0;i < backShow.length;i++){
		
		backShow[i].onmouseover = function(){
			var index = parseInt(this.getAttribute("back"));
			backShow1[index].style.display = "block";
		}

		backShow[i].onmouseout = function(){
			var index = parseInt(this.getAttribute("back"));
			backShow1[index].style.display = "none";
		}
	}

	// 回到顶部
	var back = document.getElementById("back");
	
	back.onclick = function(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	// 滚动条控制返回顶端的显示和隐藏
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var backObj = document.getElementById("back");
		if(scrollTop >= 100){
			backObj.style.display = 'block';
		}else{
			backObj.style.display = 'none';
		}
	}

}