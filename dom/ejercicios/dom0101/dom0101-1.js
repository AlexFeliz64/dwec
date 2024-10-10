"use stric";

window.addEventListener("load",() => {
    inicializarEventos();
})

function inicializarEventos(){

// Obtener elementos por ID
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
const greenButton = document.getElementById('greenButton');
const campo = document.getElementById('campo');

// Asignar eventos
redButton.addEventListener('click', ()=> {
    campo.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', ()=> {
    campo.style.backgroundColor = 'blue';
});

greenButton.addEventListener('click', ()=> {
    campo.style.backgroundColor = 'green';
});


}