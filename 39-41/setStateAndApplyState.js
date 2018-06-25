function setState(){	
	var state="#";
	for(var i=0;i<checkboxs.length;i++){
		if(checkboxs[i].checked==true){
			state += checkboxs[i].id;	
		}
	}
	history.pushState(state,null,state);  //设置hash(hash保存checkbox的选择)
					      //添加当前页面为一个历史记录
}
function asHashApplyCheckbox(hash){
	for(var i=0;i<checkboxs.length;i++){
		if(hash.indexOf(checkboxs[i].id)>-1){
			checkboxs[i].checked = "checked";
		}else checkboxs[i].checked = "";
	}
}
