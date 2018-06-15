function checkboxClick(container,checkboxName){
	container.onclick = function(event){
		clickCheckboxShowForm(checkboxName,event);
		var getData = asCheckboxGetData();		//根据表单的选择返回数据（对象数组）
		div1.innerHTML = getNewTable1(getData);		//传入数据，生成表格
		combineTD();
	}
}	
