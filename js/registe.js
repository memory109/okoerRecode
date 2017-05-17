function change(){
	//随机产生不重复验证码 
	var str = '';
	var show = document.getElementById("checkShow");
	var s = new Array();
	
	for(var i = 0;i < 5;i++){
		s[i] = parseInt((90 - 65 + 1) * Math.random() + 65);
		for(var j = 0;j < i;j++){
			if(s[i] == s[j]){
				i--;
				break;
			}
		}
		
	}
	for(var i = 0;i < 5;i ++){
		str += String.fromCharCode(s[i]);
	}
	show.innerHTML = str;
	
}
change();