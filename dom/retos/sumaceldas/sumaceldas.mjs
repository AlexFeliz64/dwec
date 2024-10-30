
window.addEventListener("load", () => {
    const inputs = document.querySelectorAll('.input-field'); 
    const initButton = document.getElementById('init-button');
    const sumButton = document.getElementById('sum-button');
    initButton.addEventListener('click', inicializarInputs);
    sumButton.addEventListener('click', sumarInputs);
});

function inicializarInputs() {
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach(input => {
        input.value = 0;
    });
    const resultInput = document.getElementById('result');
    resultInput.value = 0;
}

function sumarInputs() {
    const inputs = document.querySelectorAll('.input-field'); 
    let suma = 0;
    inputs.forEach(input => {
        suma += Number(input.value); 
    });
    const resultInput = document.getElementById('result');
    resultInput.value = suma;
}


