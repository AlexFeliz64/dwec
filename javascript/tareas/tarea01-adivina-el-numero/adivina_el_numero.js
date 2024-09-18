const prompt = require('prompt-sync')();
const number = Math.floor(Math.random() * 1001 + 1);
let adivinanza = 0;
let intentos = 3;

console.log("Adivina un número entre 1 y 1000")
while(adivinanza != number && intentos > 0){
    adivinanza = Number(prompt("Inserta un número: "));
    if(adivinanza > 1000 || adivinanza < 1){
        console.log("Tiene que ser entre el 1 y el 1000")
    }
    else if(adivinanza != number) {
        intentos = intentos - 1;
        console.log("Número incorrecto, te quedan " + intentos + " intentos");
    }
}

if(intentos > 0) {
    console.log("Has adivinado el número");
} else {
    console.log("Te has quedado sin intentos, el número era " + number);
}
