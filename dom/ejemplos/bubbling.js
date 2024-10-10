"use strict";

//--------------------------------------------------------------------------
// Programa principal
//--------------------------------------------------------------------------

// Importante. Debe invocarse en el onloads
console.log("Secuencia de inicialización iniciada");

/** 
 * Inicializa la página
 */ 
window.addEventListener('load',  function () {
    document.getElementById('area1').addEventListener('click', areaOnClick);
    document.getElementById('area2').addEventListener('click', areaOnClick);
});

console.log("Secuencia de inicialización finalizada");


//-----------------------------------------------------------------------
// Otras funciones
//-----------------------------------------------------------------------

function areaOnClick(e) {
    
    // Posición del ratón
    let x = e.offsetX;
    let y = e.offsetY;

    // Asigna el valor
    document.getElementById('x').textContent = x;
    document.getElementById('y').textContent = y;

    // Muestra unos mensajes
    console.log("Target actual : "+e.currentTarget.id);
    console.log("Target : "+e.target.id);

    // Con esto paramos la propagación
    // Si no llamamos a esta función, cuando pinchamos en el cuadrado azul
    // se registran los mensajes por consola 2 veces. Esto se debe a que
    // se llama al gestor de eventos para el cuadrado azul y el rojo
    // que lo contiene.
    e.stopPropagation();
}