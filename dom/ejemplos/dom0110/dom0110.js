"use sctric"

//-----------------------------------
// Inicizalización
//-----------------------------------
$(document).ready(() => {

    $(["name=numero"]).on("blur",onNumeroblur);
    $(["name=nombre"]).on("blur",onNombreblur);

});


function onNombreblur(){
    console.log("onNombreblur");

    if($(evento.target).val().trim().length==0){
        console.error("Nombre vacio");

        $(evento.target).css("background-color","red");

    }
}

function onNumeroblur(evento){
    console.log("onNumeroblur");

    // Convertimos el valor a un número con Number()
    let numero = Number($(evento.target).val());
    
    // Verificamos si es un número y si es par
    if (numero % 2 !== 0) {
        console.error("Número no es par");
        $(evento.target).css("background-color", "red");
    } else {
        // Si el número es par y válido, restauramos el color de fondo
        $(evento.target).css("background-color", "");
    }
}