'use strict'
// BOM - Browser Object Model
//Propiedades para saber el ancho y el alto del navegador
function getBom(){
	console.log(screen.Height);
	console.log(screen.Width);
	console.log(window.location.href);
}

//redireccionar a otra pagina pasandole el url
function redirect(url){
	window.location.href = url;
}

getBom();


