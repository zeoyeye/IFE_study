function asCheckboxGetData(){
	var checkedValue = new Array();				//根据被选中的商品和地区，获取数据
	function getCheckedValue(checkboxName){
		for(var i=1;i<checkboxName.length;i++){
			if(checkboxName[i].checked==true){
				checkedValue.push(checkboxName[i].value);
			}
		}
	}
	getCheckedValue(regionCheckbox);
	getCheckedValue(productCheckbox);

	var getData =new Array();
	  for(var i=0;i<sourceData.length;i++){
		  if(checkedValue.indexOf(sourceData[i].product)!=-1 && checkedValue.indexOf(sourceData[i].region)!=-1){
			  getData.push(sourceData[i]);
		  }
	 }
	  return getData;
}
