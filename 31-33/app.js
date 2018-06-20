var regionContainer = document.getElementById("container1");
var regionCheckbox = document.getElementsByName("region");
var productContainer = document.getElementById("container2");
var productCheckbox = document.getElementsByName("product");
var div1 = document.getElementById("dataTable");

checkboxClick(regionContainer,regionCheckbox);
checkboxClick(productContainer,productCheckbox);

window.onload = function(){
	for(var i=0,len=regionCheckbox.length;i<len;i++){
		regionCheckbox[i].checked = "checked";
		productCheckbox[i].checked = "checked";
	}
		div1.innerHTML = getNewTable1(sourceData);	
		combineTD()；
}
