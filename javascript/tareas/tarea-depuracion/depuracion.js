/**
 * Este script está pensado para ejercitar el uso del depurador. Está compuesto de una serie de 
 * retos que deben ir siendo superados. Si fallas, tendrás que empezar desde el principio.
 */
"use strict";
const read = require('prompt-sync')();

// Lee las iniciales. Esto hará que el resultado sea diferente para cada alumno.
const iniciales = "AAS";

// Convierte las iniciales en un valor numérico al azar que depende de las iniciales.
let id_alumno = 1n;
let multiplicador = 23n;
for(let ch of iniciales) {
    id_alumno *= BigInt(ch.charCodeAt(0))*multiplicador;
    multiplicador += 23n;
}

id_alumno %= 1000n;

//----------------------------------------------------------------------------------------
// A partir de aquí empiezan los retos
//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------
// RETO 1. Asigna a la variable a el valor de la variable p en el momento que
// aparece marcada.
//----------------------------------------------------------------------
let p1 = id_alumno;
p1 *= 3n;
p1 /= 7n; // Asigna este valor a la variable a más abajo
p1 += 123n;

let a = 150; // <-- A esta variable.
if(a != id_alumno*3n/7n) throw "RETO 1 No superado";
console.log("RETO 1 = "+a);


//----------------------------------------------------------------------
// RETO 2. Asigna un valor a b de modo que el resultado sea 666.
// Puedes utilizar el evaluador de expresiones o crear una inpección para
// calcular el valor que tienes que asignar.
//----------------------------------------------------------------------
let b = -316n;
let r1 = id_alumno - b; // Asigna el valor a b antes de ejecutar esta sentencia
if(r1 != 666) throw "RETO 2 No superado";
console.log("RETO 2: "+r1);


//---------------------------------------------------------------------
// RETO 3. Asigna la variable tamaño al tamaño del array. 
// Comprueba el tamaño con el depurador.
// En el visor de variables puedes ver el tamaño. Tambíen puedes evaluar
// el valor del atributo length
//---------------------------------------------------------------------
let vector = [];
for(let n = 0n;n < BigInt((Math.random()*999999).toFixed());n++) vector[n] = n;

let tamaño = 1659n; // <-- Esta variable tiene que ser el tamaño del array
let n = 0n;
for(;n < tamaño;n++) {
    vector[n] = n%128n;
}

// Ponte en la siguiente fila ejecutable y pulsa F4 para continuar aquí
if(n != vector.length) throw "RETO 3 No superado";
console.log("RETO 3: "+n);


//---------------------------------------------------------------------
// RETO 4. Asigna a c el valor en la posición indicada del vector
// Utiliza el inspector para ver el valor en la posición indicada del vector.
// Y desde el mismo visor de variables asigna el valor.
//----------------------------------------------------------------------
let posición = tamaño / 2n; // <--- Posición
let c = 61n;
if(c != vector[posición])
    throw "RETO 4 No superado";

console.log("RETO 4: " + c);


//---------------------------------------------------------------------
// RETO 5. Se ha creado una cadena concatenando algunos números.
//
// Asigna a ch el caracter en la posición ps
// Puedes ver la posición que necesitas evaluando la expresión. Prueba
// a introducir en el visor de variables la expresión que necesitas o comprueba
// el contenido de la cadena.
//----------------------------------------------------------------------
let s1 = "" + Math.random()+"--"+Math.random()+"--"+Math.random();
let ps = (Math.random()*s1.length).toFixed();

let ch = s1[ps];
if(ch !== s1[ps])
    throw new "RETO 5 No superado";
console.log("RETO 5: " + ch);



//---------------------------------------------------------------------
// RETO 6. Se ha creado una cadena concatenando algunos números.
//
// Asigna a la variable resultado el valor de la variable valor_anterior 
// Cuando el bucle se encuentr en la iteración indicada por la variable iteración
//
// Puedes poner un punto de ruptura condicional.
//----------------------------------------------------------------------
reto6(); // Utiliza la funcionalidad Step-In para entrar en la función. 
         // Si no lo haces fallarás directamente el reto

function reto6() {
    let iteraciones = BigInt( (Math.random()*1000).toFixed() );
    let iteracion = BigInt( (iteraciones+1n)/2n );
    let valor_anterior = 0n;
    let resultado = 0n;
    let n = 0n;
    
    for(;n < iteraciones;n++) { if(n == iteracion && resultado != valor_anterior) throw "RETO 6 No superado"; else if(n == iteracion) break; else valor_anterior = BigInt(Math.random().toFixed()); }
    console.log("RETO 6: " + resultado);
}

