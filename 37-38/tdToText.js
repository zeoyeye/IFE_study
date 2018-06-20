function cancel(event){			//输入框的blur事件和取消按钮的click事件调用
	event.target.parentNode.innerHTML = localStorage.textValue;
}
function makeSure(event){		//输入框的keyup事件和保存按钮的click事件调用
	var textNode  = event.target.parentNode.firstChild;
	if(isNaN(Number(textNode.value))){
		alert("输入不合法！");
	}else{
		localStorage.textValue = textNode.value;
		event.target.parentNode.innerHTML = localStorage.textValue;
	}	
}
function toText(event){			//单元格innerHTML改为空，再添加3个input子节点
	var tdValue = event.target.innerHTML;
	event.target.innerHTML = "";
	var input = new Array(3);
	var type = ["text","button","button"];
	var value = [tdValue,"取消","保存"];
	for(var i=0;i<input.length;i++){
		input[i]  = document.createElement("input");
		input[i].type = type[i];
		input[i].value = value[i];
		input[i].name = "inputs";
		event.target.appendChild(input[i]);
	}
	input[0].focus();			//并使焦点位于输入框，设置输入框的blur事件处理程序
	input[0].setAttribute("onblur","cancel(event)");
}

