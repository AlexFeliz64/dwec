"use stric"


//Inicialización
window.addEventListener("load",() => {

    const botones = document.getElementsByTagName("button");
    for(let boton of botones){
        boton.addEventListener("click",()=>{

            const parrafos = document.getElementsById("parrafo");


            const iTexto = document.getElementsById("iTexto");


            const boton = e.target;


            iTexto.value = iTexto.value + boton.innerText;
        })
    }
})


function inicializarEventos(){

}