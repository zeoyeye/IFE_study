﻿var input = document.getElementById("email-input");
var sug = document.getElementById("email-sug-wrapper");

var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];

function getInput(input){
	return diyTrim(input.value);			//获取输入框中去掉前后空格的输入内容
}
function generateSug(input){
	var inpt = getInput(input);
	var tmp = "";
	if(inpt.indexOf("@")>-1) {
		var front=inpt.slice(0,inpt.indexOf("@"));
		var rear=inpt.slice(inpt.indexOf("@")+1);

		var liId = 0;
		var count = 0;
		for(var i=0;i<postfixList.length;i++){				//输入了@及部分后缀，显示符合输入预期的后缀
			if(postfixList[i].indexOf(rear)==0) {
				tmp += "<li id="+(liId++)+">"+front+"@"+postfixList[i]+"</li>";
				count++;
			}
		}
		if(count==0) for(var i=0;i<postfixList.length;i++){		//输入的@后缀都不符合时，只保留@前的内容，显示全部提示
			tmp += "<li id="+i+">"+front+"@"+postfixList[i]+"</li>";} 
	}
	else for(var i=0;i<postfixList.length;i++){				//没输入@，直接显示全部提示
		tmp += "<li id="+i+">"+inpt+"@"+postfixList[i]+"</li>";}
	return tmp;
}

function writeSugToHtml(input){				
	sug.innerHTML = generateSug(input);			//提示列表写入HTML页面
	var liArr = sug.getElementsByTagName("li");		
	liArr[0].style.backgroundColor="#AAFFEE";		//默认第一个提示为被选择状态
}

function displaySug(){						//根据输入框有无内容时，显示或隐藏提示框
	if(input.value=="") sug.style.display = "none";		
	else  {sug.style.display = "inline";return true;}
}

var nowSelectTipIndex = 0;

function specialKey(eventCod){					//用变量nowSelectTipIndex记录在输入框按上下键后被选中的提示项的id					
	var liArr = sug.getElementsByTagName("li");
	var le = liArr.length;
	if(eventCod==38){
		if(nowSelectTipIndex == 0)
			nowSelectTipIndex = le-1;
		else  	nowSelectTipIndex--;

	}
	else if(eventCod==40){
		if(nowSelectTipIndex == le-1)
			nowSelectTipIndex = 0;
		else  	nowSelectTipIndex++;
	}
	else {							//按的是回车，把当前选中的提示内容填入输入框
		input.value = liArr[nowSelectTipIndex].innerHTML;
	}
	for(var i=0;i<le;i++){					//只有当前选中项有背景色
		if(i==nowSelectTipIndex)
			liArr[i].style.backgroundColor="#AAFFEE";
		else liArr[i].style.backgroundColor="";
	}
}	

window.onload = function(){input.focus();}		//一进入页面就将焦点放在输入框中	
input.onkeyup = function(event){
	displaySug();
	if(event.keyCode!=38&&event.keyCode!=40&&event.keyCode!=13){
		writeSugToHtml(input);
		nowSelectTipIndex = 0;			//如果按键不是上下及回车重置选中状态
	}
	else specialKey(event.keyCode);
	if(event.keyCode==27) input.select(); 		//用户按ESC键的时候，对用户输入进行全选
}
sug.onmouseover = function(event){
	event.target.style.backgroundColor="#FFCCCC";
}
sug.onmouseout = function(event){
	event.target.style.backgroundColor="";
}
sug.onclick = function(event){
	input.value = event.target.innerHTML;
	sug.style.display = "none";
	input.focus();					//用户点击鼠标，进行提示选择后，焦点依然在输入框中
}
