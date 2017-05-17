$(document).ready(function(){
	// Ajax动态添加数据信息
	var con = $("#content .info-bottom");
	$.getJSON("data.txt",function(data){

		for(var i = 0;i < data.length;i++){

			var str = '<div class="infoContent">';
				str += '<div class="con-1" name="con-1">';
				str += '<a href="#">';
				str += '<img src="img/report/'+ data[i].img+ '" alt=""></a>';
				str += '<div class="conDiv1"><p>' + data[i].title + '</p></div>';
				str += '<div class="conDiv2" name="conDiv2"><h3>' + data[i].title;
				str += '</h3><hr size="1" color="#D2D3D7"><p>' + data[i].content + '</p></div></div>';
				str += '<div class="con-2">' + data[i].time + '</div></div></div>';
			con.append(str);
		}
	});

});
window.onload = function(){

	/* 轮播区开始*/
	// 获取轮播对象
	var caro = document.getElementById("carousel");
	// 获取控制轮播的按钮对象数组
	var ul = caro.getElementsByTagName("ul")[0];
	var liArr = ul.getElementsByTagName("li");
	
	// 左右控制图片轮播
	var array = caro.getElementsByTagName("a");

	// 定时器
	var timeId;
	//定时器控制轮播
	var num = 0;
	time();
	
	timeId = window.setInterval(time,4000);
	function time(){
		num++;
		if(num >= 4){
			num = 1;
		}
		caro.style.backgroundImage = "url(img/repo-"+ num +".jpg)";

		// 定时器控制按钮
		for(var j = 0;j < liArr.length;j++){
			changeClass(liArr[j],"change1");
		}	
		changeClass(liArr[num - 1],"change");
	}

	// 自定义属性
	for(var i = 0;i < liArr.length;i++){
		liArr[i].setAttribute("ind",i);
	}

	// 给所有按钮添加点击事件
	for(var i = 0;i < liArr.length;i++){
		
		liArr[i].onclick = function(){
			// 清除定时器
			clearInterval(timeId);

			// 去掉所有按钮样式
			for(var j = 0;j < liArr.length;j++){
				changeClass(liArr[j],"change1");
			}
			// 单独设置当前按钮样式
			var index = parseInt(this.getAttribute("ind"));
			changeClass(this,"change");
			// 轮播图片
			caro.style.backgroundImage = "url(img/repo-"+ (index + 1)+".jpg)";
			// 记录下标
			num = index;
			timeId  = setInterval(time,4000);	
		}
	}

	var arrayIndex = 0;
	// 给左右控制轮播的按钮加事件
	array[0].onclick = function(){

		// 清除定时器
		clearInterval(timeId);

		for(var j = 0;j < liArr.length;j++){
			if(hasClass(liArr[j],'change')){
				arrayIndex = parseInt(liArr[j].getAttribute("ind"));
			}
		}

		for(var j = 0;j < liArr.length;j++){
			changeClass(liArr[j],"change1");
		}

		arrayIndex--;
		if(arrayIndex >= 0){
			changeClass(liArr[arrayIndex],"change");
			caro.style.backgroundImage = "url(img/repo-"+ (arrayIndex + 1)+".jpg)";
			num = arrayIndex;
		}else{
			changeClass(liArr[2],"change");
			caro.style.backgroundImage = "url(img/repo-3.jpg)";
			num = 2;
		}	
		timeId  = setInterval(time,4000);	

	}

	array[1].onclick = function(){

		// 清除定时器
		clearInterval(timeId);

		for(var j = 0;j < liArr.length;j++){

			if(hasClass(liArr[j],'change')){
				var arrayIndex = parseInt(liArr[j].getAttribute("ind"));
			}
		
		}

		for(var j = 0;j < liArr.length;j++){
			changeClass(liArr[j],"change1");
		}

		arrayIndex++;
		if(arrayIndex < liArr.length){
			changeClass(liArr[arrayIndex],"change");
			caro.style.backgroundImage = "url(img/repo-"+ (arrayIndex + 1)+".jpg)";
			num = arrayIndex;
		}else{
			changeClass(liArr[0],"change");
			caro.style.backgroundImage = "url(img/repo-1.jpg)";
			num = 0;
		}	
		timeId  = setInterval(time,4000);	
	}
	/* 轮播区结束*/

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

	// 报告内容区
	var con1 = document.getElementsByName("con-1");
	var con2 = document.getElementsByName("conDiv2");

	for(var i = 0;i < con1.length;i++){
		con1[i].setAttribute("conInd",i);
	}
	for(var i = 0;i < con1.length;i++){
		con1[i].onmouseover = function(){
			var index = parseInt(this.getAttribute("conInd"));
			con2[index].style.display = "block";
		}
		con1[i].onmouseout = function(){
			var index = parseInt(this.getAttribute("conInd"));
			con2[index].style.display = "none";
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