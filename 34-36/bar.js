function drawBars(data,max,x0,y0,axisWidth,axisHeight){
	var svg1 = document.getElementById("svg");

	var xX = x0+axisWidth,yX = y0,				//计算横纵坐标轴终点坐标
		xY = x0,yY = y0-axisHeight;	

	var barWidth=(axisWidth-10)/12*3/4,barSpace=barWidth/4;		//柱子的宽度和间隔

	svg1.innerHTML ="<line x1="+x0+" y1="+y0+" x2="+xX+" y2="+yX+" style='stroke:black;' />"+		
					"<line x1="+x0+" y1="+y0+" x2="+xY+" y2="+yY+" style='stroke:black;' />";	//绘制横纵轴
	
	var x = new Array(12),y = new Array(12);	//保存柱子左上角的坐标

	for(var i=0;i<12;i++){
		barHeight = data[i]/max*axisHeight;		//柱子的高度

		x[i] = x0+barSpace*(i+1)+barWidth*i;		
		y[i] = y0-barHeight;

		svg1.innerHTML = svg1.innerHTML+"<rect x="+x[i]+" y="+y[i]+" width="+barWidth+
						" height="+barHeight+" style='fill:#00BBFF;'　/>";
	}
}
