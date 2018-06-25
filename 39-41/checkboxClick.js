function checkboxClick(container,checkboxName){
	container.onclick = function(event){
		clickCheckboxShowForm(checkboxName,event);
		setState();  			//添加click事件后的checkbox状态为一个历史记录
		asCheckboxShowForm();		//网页的渲染仍放在checkbox的Click事件驱动程序里
	}
}
function asCheckboxShowForm(){
		var getData = asCheckboxGetData();		//根据表单的选择返回数据（对象数组）
		div1.innerHTML = getNewTable1(getData);		//传入数据，生成表格
		combineTD() 
}

