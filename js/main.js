'use strict'
// innerHTML para obtener el valor html
// style 
// className
//Coseguir elemnto con un ID concreto
function cambiaColor(color){
	caja.style.background = color;
}

//var caja = document.getElementById("micaja");


//conseguir elemntos por su etiqueta

var todosLosDivs =  document.getElementsByTagName('div');
var valor;
for (valor in todosLosDivs){
	var parrafo =  document.createElement("p");
	var texto = document.createTextNode(todosLosDivs[valor].textContent);
	parrafo.appendChild(texto);
	document.querySelector("#miseccion").appendChild(parrafo);
}
	

