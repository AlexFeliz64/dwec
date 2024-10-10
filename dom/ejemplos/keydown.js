"use strict";

//--------------------------------------------------------------------------
// Programa principal
//--------------------------------------------------------------------------

// Importante. Debe invocarse en el onloads
console.log("Secuencia de inicialización iniciada");

// Inicializar programa
window.addEventListener('load', function (evento) {

    // Asigna el gestor de evento de nuestro teclado
    document.getElementsByName('texto1')[0].addEventListener('keydown', textoOnKeyDown);    
});

console.log("Secuencia de inicialización finalizada");


//--------------------------------------------------------------------------
// Funciones 
//--------------------------------------------------------------------------

function textoOnKeyDown(e) {
    
    // Obtengo el campo de texto destino
    let texto2 = document.getElementsByName('texto2')[0];

    // Lanzamos el evento para que sea procesado por el campo de texto
    texto2.value = texto2.value + e.key;
}