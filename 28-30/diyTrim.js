function diyTrim(str) {
	for(var i=0;i<str.length;i++){
		if(str[i]!=" "&&str[i]!="　")
			break;
	}
	var result = str.substring(i);
	for(var j=str.length-1;j>-1;j--){
		if(str[j]!=" "&&str[j]!="　")
			break;
	}
	return result.substring(0,j+1);
}
