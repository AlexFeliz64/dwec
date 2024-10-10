"use stric"



window.addEventListener("load",() => {
    inicializarEventos();
});

function inicializarEventos(){
// Obtener elementos por ID
const holaButton = document.getElementById('holaButton');
const caracolaButton = document.getElementById('caracolaButton');
const adiosButton = document.getElementById('adiosButton');
const campo = document.getElementById('campo');

// Función para concatenar texto
const agregarTexto = (texto) => {
    campo.textContent += ' ' + texto;
};

// Asignar eventos
holaButton.addEventListener('click', () => {
    agregarTexto('Hola');
});

caracolaButton.addEventListener('click', () => {
    agregarTexto('Caracola');
});

adiosButton.addEventListener('click', () => {
    agregarTexto('Adios');
});
}