"use strict";

window.addEventListener("load", () => {
    inicializarEventos();
});

function inicializarEventos() {
    const campo = document.getElementById('campo');
    const botones = document.querySelectorAll('.botoncolor'); // Selecciona todos los botones con la clase 'botoncolor'

    // Añadir un único evento para todos los botones
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Copiar el color del botón al campo de texto
            campo.style.backgroundColor = e.target.style.backgroundColor;
        });
    });
}
