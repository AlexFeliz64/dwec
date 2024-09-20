const prompt = require('prompt-sync')();

let acumulador = 0;
let memoria = 0;
let salir = false;
let num1=0;
let num2=0;

//Iniciar la función menu
menu();

//Creación de la funcion del menu
function menu() {
    do {
        console.log('\nElige una opción: \n 1. Sumar [+] \n 2. Restar [-] \n 3. Multiplicar [*] \n 4. Dividir [/] \n 5. Resto [%] \n 6. Factorial [f] \n 7. Elevar [^] \n 8. Guardar resultado en memoria [M] \n 9. Cargar valor de memoria [R] \n 10. Borrar pantalla y memoria [0] \n 11. Salir [c]\n--------------------');
        let respuesta = prompt();

        //Selección de la respuesta y llamando a la funcion que le corresponde a cada opción
        switch (respuesta) {
            case "+":
                num1 = parseInt(prompt("Elige el primer número: "));
                num2 = parseInt(prompt("Elige el segundo número: "));
                sumar(num1, num2);
                break;
            case "-":
                num1 = parseInt(prompt("Elige el primer número: "));
                num2 = parseInt(prompt("Elige el segundo número: "));
                restar(num1, num2);
                break;
            case "*":
                num1 = parseInt(prompt("Elige el primer número: "));
                num2 = parseInt(prompt("Elige el segundo número: "));
                multiplicar(num1, num2);
                break;
            case "/":
                num1 = parseInt(prompt("Elige el primer número: "));
                num2 = parseInt(prompt("Elige el segundo número: "));
                dividir(num1, num2);
                break;
            case "%":
                num1 = parseInt(prompt("Elige el primer número: "));
                num2 = parseInt(prompt("Elige el segundo número: "));
                resto(num1, num2);
                break;
            case "f":
                num1 = parseInt(prompt("Elige un número para calcular el factorial: "));
                factorial(num1);
                break;
            case "M":
                guardarEnMemoria();
                break;
            case "R":
                cargarMemoria();
                break;
            case "^":
                num1 = parseInt(prompt("Elige la base: "));
                num2 = parseInt(prompt("Elige el exponente: "));
                elevar(num1, num2);
                break;
            case "0":
                resetear();
                break;
            case "c":
                salir = true;
                console.log("Saliendo de la calculadora");
                break;
            default:
                console.log("Opción incorrecta, elige una de las presentes");
        }
    } while (!salir)
}

function sumar(sum1, sum2){
    let resultado = sum1 + sum2;
    acumulador = resultado;
    console.log("El resultado es "+resultado);
}

function restar(sum1, sum2){
    let resultado = sum1 - sum2;
    acumulador = resultado;
    console.log("El resultado es "+resultado);
}

function multiplicar(sum1, sum2){
    let resultado = sum1 * sum2;
    acumulador = resultado;
    console.log("El resultado es "+resultado);
}

function dividir(sum1, sum2){
    let resultado = sum1 / sum2;
    acumulador = resultado;
    console.log("El resultado es "+resultado);
}

function resto(sum1, sum2){
    let resultado = sum1 % sum2;
    acumulador = resultado;
    console.log("El resultado es "+resultado);
}

function factorial(sum1){
    if (sum1 < 0) {
        console.log("No se puede hacer factorial de un negativo.");
    } else {
        acumulador = 1;
        for (let i = 2; i <= sum1; i++) {
            acumulador *= i;
        }
    }
    console.log("El resultado es: "+acumulador);
}

function elevar(base, exponente) {
    let resultado = Math.pow(base, exponente);
    acumulador = resultado;
    console.log("El resultado es "+resultado);
}

function guardarEnMemoria() {
    memoria = acumulador;
    console.log("Memoria guardada: "+memoria);
}

function cargarMemoria() {
    acumulador = memoria;
    console.log("Memoria cargada: "+acumulador);
}

function resetear() {
    acumulador = 0;
    memoria = 0;
    console.log("Pantalla y memoria reiniciadas.");
}
