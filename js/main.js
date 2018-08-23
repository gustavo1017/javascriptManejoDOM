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

//abrir una nueva ventana con un tamaño definido
function abrirVentana(url){
	window.open(url,"","width=400, height=300");
}

getBom();


