div1.onclick = function(event){
	if(event.target.tagName=="TD"){			//点击单元格，保存单元格数据到localStorage
		event.target.innerHTML = parseInt(event.target.innerHTML);
		localStorage.setItem("textValue",event.target.innerHTML);
		toText(event);					//再将单元格转换成input
	}
	if(event.target.value=="保存"){
		makeSure(event);				//修改单元格数据为输入的值
	}
	else if(event.target.value=="取消"){	//点取消，单元格恢复成原数据
		var tdNode = event.target.parentNode;
		tdNode.innerHTML = localStorage.textValue;
	}
}
div1.onkeyup = function(event){
	if(event.target.type=="text"){
		if(event.keyCode==27){
			cancel(event);
		}else if(event.keyCode==13){
			makeSure(event);
		}

	}
}
