'use strict'
// envento load para que cuando cargue todo el cuerpo de la pagina se introdusca el javascript
window.addEventListener('load', () => {
	//enventos del teclado

    var boton = document.querySelector("#boton");

//focus
    var input = document.querySelector("#campo_nombre");
	input.addEventListener('focus', function(){
		console.log("Estas haciendo focus");
	});

//Blur
    input.addEventListener('blur', function(){
		console.log("Estas fuera del input");
	});


//keydown
    input.addEventListener('keydown', function(event){
		console.log("pulsas tecla ", String.fromCharCode(event.keyCode));
		
	});

//keypress
    input.addEventListener('keypress', function(event){
		console.log("tecla presionada ", String.fromCharCode(event.keyCode));
		
	});

//keyup
    input.addEventListener('keyup', function(event){
		console.log("tecla soltada ", String.fromCharCode(event.keyCode));
		
	});



});



