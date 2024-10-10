"use stric"


//Inicialización
window.addEventListener("load",() => {
    agregarFruta();
});


function agregarFruta() {
    // Obtener valores de los inputs
    let nombreFruta = document.getElementById("nombreFruta").value;
    let colorFruta = document.getElementById("colorFruta").value;

    // Verificar si ambos campos tienen valor
    if (nombreFruta !== "" && colorFruta !== "") {

        // Obtener el cuerpo de la tabla
        let tabla = document.getElementById("tablaFrutas").getElementsByTagName("tbody");

        // Crear una nueva fila y añadirla a la tabla
        tabla.innerHTML += "<tr><td>" + nombreFruta + "</td><td>" + colorFruta + "</td></tr>";

        // Limpiar los inputs
        document.getElementById("nombreFruta").value = "";
        document.getElementById("colorFruta").value = "";
    }
}