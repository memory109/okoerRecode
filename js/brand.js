window.onload = function(){

	var con = document.getElementById("content");
	// 动态生成图片
	for(var i = 1;i <= 50;i++){

		var img = document.createElement("img");
		img.src = "img/brand/1/" + i + ".jpg";
		var a = document.createElement("a");
		a.href = "javascript:void(0)";
		a.appendChild(img);
		con.appendChild(a);

	}
	
	var picArr = document.getElementById("switch").getElementsByTagName("span");
	
	// 获取所有a标签
	// var con = document.getElementById("content");
	
	for(var i = 0;i < picArr.length;i++){

		(function(index){

			picArr[i].onclick = function(){

				var arr = con.getElementsByTagName("a");
				var length = arr.length;
				for(var j = 0;j < picArr.length;j++){
					changeClass(picArr[j],"");
				}
				changeClass(picArr[index],"textColor");

				for(var k = 0;k < length;k++){
					con.removeChild(arr[0]);
				}
				
				var ind = index + 1;
				
				for(var i = 1;i <= 50;i++){

					var img = document.createElement("img");
					img.src = "img/brand/"+ ind +"/" + i + ".jpg";
					var a = document.createElement("a");
					a.href = "javascript:void(0)";
					a.appendChild(img);
					con.appendChild(a);

				}
			}

		})(i);
	}
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

// 自定义添加属性的方法
function changeClass(obj,className){
	obj.className = className;
}
function hasClass(obj,className){
	if(obj.className == className){
		return true;
	}
	return false;
}