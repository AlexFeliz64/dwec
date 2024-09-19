const prompt = require('prompt-sync')();

const equipo = new Map();
let terminar = false;

//Introdución de jugadores y numeros en el Map
do{
    let jugador = prompt("Introduce el nombre del jugador: ");
    let num = prompt("Introduce el numero del jugador: ");
    if(jugador == "" || num == ""){
        terminar = true;
    } else {
        equipo.set(num, jugador);
    }


}while(!terminar)

//Busqueda de jugador por el numero
let terminar2 = false;
do{
    let num2 = prompt("Introduce el numero del jugador para encontrarlo: ");
    let jugador2 = equipo.get(num2);
    if(num2 == "0"){
        terminar2 = true;
    //Comprueba que el numero del jugador exista, de ser así los muestra
    } else if (jugador2){
        console.log("El jugador se llama: "+equipo.get(num2));
    } else {
        console.log("El jugador no existe")
    }

}while(!terminar2)