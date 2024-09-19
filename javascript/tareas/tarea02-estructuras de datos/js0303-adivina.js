const prompt = require('prompt-sync')();

//Creación de array con los numeros aleatorios
const numeros = new Array;
for(let i = 0; i < 5; i++){
    numeros.push(Math.round(Math.random()*21))
}

//Pregunta al usuario por los numeros
console.log("Acierta entre el 1 y el 20")
const numerosacertar = [];
for (let i = 0; i < 5; i++) {
    const num = parseInt(prompt("Introduce el número "+ (i + 1)+": "));
    numerosacertar.push(num);
}

let aciertos = 0
let numaciertos = new Array;

//Comprueba si ha acertado algún número
for (let i = 0; i < 5; i++) {
    if (numeros[i] === numerosacertar[i]) {
        aciertos++;
        numaciertos.push(numerosacertar[i]);
    }
}

//Muestra los aciertos
console.log("Número de aciertos:", aciertos);
console.log("Números acertados en la misma posición:", numaciertos);
console.log("Números objetivo:", numeros)
