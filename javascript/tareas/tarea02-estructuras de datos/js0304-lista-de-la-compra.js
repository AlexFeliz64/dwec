const prompt = require('prompt-sync')();

const lista = new Set;
let terminar = false;

//Inserción de productos en el Set
do{

    let compra = prompt("Inserta un producto a la lista: ")
    if(compra == ""){
        terminar=true;
    }
    //Se comprueban si ya tiene ese producto, si no lo añade
    else if(lista.has(compra)){
        console.log("Producto ya añadido");
    } else {
        lista.add(compra);
    }
   
    
}while(!terminar)

//Muestra todo el Set
console.log("Lista de la compra: "+[...lista]);
