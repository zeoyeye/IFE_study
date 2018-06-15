function getNewTable1(data) {					//根据传入的数据生成表格
	if(data!=""){
			var onlyOneProductSelected = 1;		//商品或地区只选择了一个，该变量标记为1；不止一个，标记为0
			var onlyOneRegionSelected = 1;
			for(var i=0;i<data.length-1;i++){
				if(data[i].product!=data[i+1].product) {
					onlyOneProductSelected = 0;	
				}
				if(data[i].region!=data[i+1].region) {
					onlyOneRegionSelected = 0;	
				}
			}
			var tmp="";
			if(onlyOneRegionSelected==1&&onlyOneProductSelected==0){	//地区只选择一项，商品选择多项,对第一列的地区单元格合并
				tmp = "<table><tr><th>地区</th><th>商品</th>";
				for(var i=1;i<13;i++) {
					tmp+="<th>"+i+"月</th>";
				}
				tmp+="</tr>";
				tmp+="<tr><td rowspan="+ data.length+" >"+data[0].region+"</td>"+"<td>"+data[0].product+"</td>";
				for(var j=0;j<12;j++) {
					tmp+="<td>"+data[0].sale[j]+"</td>";
				}
				tmp+="</tr>";
				for(var i=1;i<data.length;i++){
					tmp+="<tr><td>"+data[i].product+"</td>";
					for(var j=0;j<12;j++) tmp+="<td>"+data[i].sale[j]+"</td>";
					tmp+="</tr>";
				}
			}
			else{
				tmp = "<table><tr><th>商品</th><th>地区</th>";
				for(var i=1;i<13;i++) {
					tmp+="<th>"+i+"月</th>";
				}
				tmp+="</tr>";
				if(onlyOneProductSelected==1&&onlyOneRegionSelected==0){	//商品只选择一项，地区选择多项，对第一列的商品单元格合并
					tmp+="<tr><td rowspan="+ data.length+" >"+data[0].product+"</td>"+"<td>"+data[0].region+"</td>";
					for(var j=0;j<12;j++) {
						tmp+="<td>"+data[0].sale[j]+"</td>";
					}
					tmp+="</tr>";
					for(var i=1;i<data.length;i++){
						tmp+="<tr><td>"+data[i].region+"</td>";
						for(var j=0;j<12;j++) tmp+="<td>"+data[i].sale[j]+"</td>";
						tmp+="</tr>";
					}
				}
				else{
					for(var i=0;i<data.length;i++){				//其他情况先不做单元格合并，直接生成表格
						tmp+="<tr><td>"+data[i].product+"</td>"+"<td>"+data[i].region+"</td>";
						for(var j=0;j<12;j++) tmp+="<td>"+data[i].sale[j]+"</td>";
						tmp+="</tr>";
					}
				}
			}
			tmp+="</table>";
			return tmp;
	}
	else return null;
}

function combineTD(){			//其他情况，获取已生成的表格的tr和td元素，设置rowspan属性以及删除被合并的单元格
		function checkedNumber(checkbox){
			var n=0;
			for(var i=1;i<checkbox.length;i++){
				if (checkbox[i].checked == true)
					n++;
			}
			return n;
		}
		var regionNumber = checkedNumber(regionCheckbox);	//表单选择的项数
		var productNumber = checkedNumber(productCheckbox);

		var trs = document.getElementsByTagName("tr");	
		if(regionNumber>1&&productNumber>1){
			for(var i=1,j=0;j<productNumber;i+=regionNumber,j++){
				trs[i].firstChild.setAttribute("rowspan",regionNumber);		//根据地区数合并商品单元格
				for(var k=i+1;k<i+regionNumber;k++)				//删除被合并的单元格
					trs[k].removeChild(trs[k].firstChild);
			}
		}
}
