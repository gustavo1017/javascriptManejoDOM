'use strict'
// envento load para que cuando cargue todo el cuerpo de la pagina se introdusca el javascript
window.addEventListener('load', () => {
	// Timers

	var tiempo = setInterval(() =>{
		console.log("Set interval ejecutado");
		var encabezado = document.querySelector("h1")
		if(encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize ="30px";
		}else{
			encabezado.style.fontSize = "50px";
		}
		
	},5000);

});



