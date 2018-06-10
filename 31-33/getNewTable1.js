function getNewTable1(data) {
	if(data!=""){
			var onlyOneProductSelected = 1;		//商品或地区只选择了一个，标记为1；不止一个，标记为0
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
			if(onlyOneRegionSelected==1&&onlyOneProductSelected==0){
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
				if(onlyOneProductSelected==1&&onlyOneRegionSelected==0){
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
					for(var i=0;i<data.length;i++){
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
