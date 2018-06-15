function drawLines(data,max,x0,y0,axisWidth,axisHeight,color,drawing){
	//var drawing = document.getElementById("drawing");
	//drawing.width = drawing.width;

	if(drawing.getContext){
		var context = drawing.getContext("2d");

		context.beginPath();

		context.moveTo(x0,y0);				//绘制横纵轴
		context.lineTo(x0+axisWidth,y0);	
		context.moveTo(x0,y0);
		context.lineTo(x0,y0-axisHeight);

		context.stroke();
		context.closePath();

		var x = Array(12), y = Array(12);		//存放数据点的坐标
		dotSpace = axisWidth/13;
		x[0] = x0+dotSpace/2,y[0] = y0-data[0]/max*axisHeight;

		context.beginPath();
		context.moveTo(x[0],y[0]);
		context.arc(x[0],y[0],4,0,2*Math.PI,false);
		for(var i=1;i<12;i++){
			x[i] = x[i-1]+dotSpace;
			y[i] = y0-data[i]/max*axisHeight;
			context.lineTo(x[i],y[i]);		//将数据点连成折线		
			context.arc(x[i],y[i],4,0,2*Math.PI,false);	//在数据点处画个小圆
		}

		context.strokeStyle = color;
		context.stroke();
		context.closePath();
	}
}
