function checkboxClick(container,checkboxName){
	container.onclick = function(event){
		clickCheckboxShowForm(checkboxName,event);
		var getData = asCheckboxGetData();		//根据表单的选择返回数据（对象数组）
		div1.innerHTML = getNewTable1(getData);		//传入数据，生成表格
		combineTD();

		var drawing = document.getElementById("drawing");
		drawing.width = drawing.width;			//重新设置画布的宽度能清除当前画布
		for(var i=0;i<getData.length;i++){		//每次重新选择表单后都绘制当前选中数据的多条折线图
			drawLines(getData[i].sale,710,50,150,500,100,colorArr[i],drawing);
		}
	}
}
	
