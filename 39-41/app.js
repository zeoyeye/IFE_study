var regionContainer = document.getElementById("container1");
var regionCheckbox = document.getElementsByName("region");
var productContainer = document.getElementById("container2");
var productCheckbox = document.getElementsByName("product");
var div1 = document.getElementById("dataTable");
var checkboxs = document.getElementsByTagName("form")[0].getElementsByTagName("input");

checkboxClick(regionContainer,regionCheckbox);
checkboxClick(productContainer,productCheckbox);

window.onload = function(){
	if(location.hash=="") {
		location.hash = "#01234567";} 	//设置页面首次载入时的hash(hash保存checkbox的选择)
	asHashApplyCheckbox(location.hash);
	asCheckboxShowForm();
}

window.onpopstate = function(){
	window.onload();
}


