
"use strict";

//--------------------------------------------------------------------------
// Programa principal
//--------------------------------------------------------------------------

//Se asegura que se cargue todo
window.addEventListener("load",()=>{


// Importante. Debe invocarse en el onloads
console.log("Secuencia de inicialización iniciada");

// Definimos una función que va a ser invocada cuando el documento y todos los recursos
// hayan terminado de cargar. Si definimos esta, body.onload no se va a invocar
window.onload = () => { console.log('window.onload 1'); };
window.addEventListener('load', (evento) => { console.log('window.addEventListener.onload'); });

// Asigna el evento onload a la imagen. 
// Cuando se cargue la imagen se va a invocar al gestor de eventos indicado
document.getElementById('imagen').addEventListener('load', (evento) => { console.log('body.IMAGEN.onload 1'); });

// Utilizar addEventListener no sobreescribe el listener. Permitiendo que otros scripts puedan funcionar
document.getElementById('imagen').addEventListener('load', (evento) => { console.log('body.IMAGEN.onload 2'); });

console.log("Secuencia de inicialización finalizada");

});