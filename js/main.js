'use strict'
//conseguir elementos por el nombre de la clase
var divsRojos = document.getElementsByClassName('rojo');
var div;
for( div in divsRojos){
	//identificar si el div tiene la clase rojo
	if(divsRojos[div].className == "rojo"){
		divsRojos[div].style.background="red";
	}
	
}

	

