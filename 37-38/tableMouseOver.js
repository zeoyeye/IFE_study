colorArr = ["#FF0000","#FF5511","#FFBB00","#BBFF00","#77FF00","#00FF00","#00BBFF","#5599FF","#FF77FF"];

div1.onmouseover = function(event){
	if(event.target.tagName=="TD"){					//鼠标滑过的元素是单元格td
		var tds = event.target.parentNode.childNodes;		//获取鼠标滑过行的所有单元格元素
		var data = new Array();					//保存鼠标滑过行的所有单元格里的数值数据
		for(var i=0;i<tds.length;i++){
			if(!isNaN(Number(tds[i].innerHTML))){
				data.push(tds[i].innerHTML);
			}
		}
		drawBars(data,710,50,150,500,100);		//绘制选中行的柱状图：传入数据数组、数据最大值，坐标轴原点坐标、轴的宽度和高度
		var drawing = document.getElementById("drawing");
		drawing.width = drawing.width;
		drawLines(data,710,50,150,500,100,"#00BBFF",drawing);	//绘制选中行的折线图：传入..(同上),颜色，canvas元素对象
		
		if(!isNaN(Number(event.target.innerHTML)))
			event.target.innerHTML+=" 编辑 ";
	}
	if(event.target.value=="保存"){			//避免输入框的blur事件和保存按钮的click事件冲突
		event.target.parentNode.firstChild.removeAttribute("onblur");
	}
}

div1.onmouseout = function(event){
	if(event.target.value=="保存"){			//鼠标移开保存按钮后，输入框恢复blur事件属性
		event.target.parentNode.firstChild.setAttribute("onblur","cancel(event)");
	}
	if(event.target.tagName=="TD"&&!isNaN(parseInt(event.target.innerHTML))){		//鼠标移开单元格，“编辑”消失
		event.target.innerHTML = parseInt(event.target.innerHTML);
	}
	
}
	
