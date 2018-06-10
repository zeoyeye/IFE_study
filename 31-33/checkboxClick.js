function checkboxClick(container,checkboxName){
	container.onclick = function(event){
		var checkboxType = event.target.getAttribute("checkbox-type");

		if(checkboxType == "all") {						//点击的是全选，进行全选操作或者无反应
			event.target.checked = "checked";
			for(var i=1;i<checkboxName.length;i++) 
					checkboxName[i].checked = "checked";
			
		}
		else {											//点击的是其它选项
			var checkedValue = event.target.value;
			var count=0;

			for(var i=1;i<checkboxName.length;i++){
				if(checkboxName[i].value!=checkedValue){
					if(checkboxName[i].checked==true) count++;
				}
			}

			if(count==(checkboxName.length-2)&&event.target.checked == true){	//点击之后满足全选状态
				checkboxName[0].checked = "checked";
				
			}
			if(count==(checkboxName.length-2)&&event.target.checked == false){	//全选状态时，取消子选项
				checkboxName[0].checked = "";
			}
			if(count==0&&event.target.checked == false){	//点击的是唯一已勾选的，不允许一个都不选
				event.target.checked = "checked";
			}
		}
		var getData = asCheckboxGetData();
		div1.innerHTML = getNewTable1(getData);
	}
}	
