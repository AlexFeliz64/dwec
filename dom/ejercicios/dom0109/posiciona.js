"use strict";

// Inicialización
window.addEventListener("load", () => {
    inicializarEventos();
});

function inicializarEventos() {
    const area = document.getElementById('area');
    const elemento = document.getElementById('elemento');
    area.addEventListener('mousemove', areaOnMove);
    area.addEventListener('click', areaOnClick);
}

// Función para mostrar las coordenadas mientras se mueve el ratón
function areaOnMove(e) {
    // Posición del ratón
    let x = e.offsetX;
    let y = e.offsetY;

    // Asigna el valor
    document.getElementById('x').textContent = x;
    document.getElementById('y').textContent = y;

    // Asigna la posición del elemento
    elemento.style.left = `${x}px`; 
    elemento.style.top = `${y}px`;  

    // Parar la propagación
    e.stopPropagation();
}

// Función para cambiar de color al clicar
function areaOnClick() {
    // Generar un color aleatorio
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Cambiar el color de fondo del área
    elemento.style.backgroundColor = color;
}
