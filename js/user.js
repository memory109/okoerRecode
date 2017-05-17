
// 创建用户
function User(username,password){
	this.username = username;
	this.psd = password;
}

var userArr = [];
var user1 = new User("tom","1111");
var user2 = new User("rose","2222");
var user3 = new User("jack","3333");
userArr.push(user1);
userArr.push(user2);
userArr.push(user3);


// 创建新用户                                            
function registe(){
	var username = document.getElementById("username").value;
	var psd = document.getElementById("password").value;
	var psd1 = document.getElementById("password1").value;
	var check1 = document.getElementById("check").value;
	var check2 = document.getElementById("checkShow").innerHTML;
	check1 = check1.toLowerCase();
	check2 = check2.toLowerCase();

	if(!checkNull(username,psd,check1))
		return false;

	if(checkUsername(username)){
		alert("该用户已经存在！");
		return false;
	}else if(psd != psd1){
		alert("两次密码不一致！");
		return false;
	}else if(check1 != check2){
		alert("验证码不正确！");
		return false;
	}else{
		alert("用户注册成功！");
		return true;
	}
}



// 用户登录校验
function logoIn(){

	// 分别获取用户名 密码 验证码输入值 验证码正确值
	var username = document.getElementById("username").value;
	var psd = document.getElementById("password").value;
	var check1 = document.getElementById("check").value;
	var check2 = document.getElementById("checkShow").innerHTML;
	check1 = check1.toLowerCase();
	check2 = check2.toLowerCase();

	if(!checkNull(username,psd,check1))
		return false;

	if(!checkUsername(username)){
		alert("该用户不存在！");
		return false;
	}else if(!checkPsd(psd)){
		alert("用户密码不正确！");
		return false;
	}else if(check1 != check2){
		alert("验证码不正确");
		return false;
	}else{
		return true;
	}
}
// 为空校验
function checkNull(a,b,c){

	if(a == ""){
		alert("用户名不能为空");
		return false;
	}else if(b == ""){
		alert("密码不能为空");
		return false;
	}else if(c == ""){
		alert("验证码不能为空");
		return false;
	}else{
		return true;
	}
}
// 判断用户是否存在
function checkUsername(obj){
	var flag = false;
	for(var i = 0;i < userArr.length;i++){
		if(obj == userArr[i].username){
			flag = true;
		}
	}

	if(flag)
		return flag;
	else
		return flag;
}

// 判断用户是否存在
function checkPsd(obj){
	var flag = false;
	for(var i = 0;i < userArr.length;i++){
		if(obj == userArr[i].psd){
			flag = true;
		}
	}

	if(flag)
		return flag;
	else
		return flag;
}