"use stric"


//Inicialización
window.addEventListener("load",() => {
    agregarFruta();
});


function agregarFruta() {
    // Obtener valores de los inputs
    var nombreFruta = document.getElementById("nombreFruta").value;
    var colorFruta = document.getElementById("colorFruta").value;

    // Verificar si ambos campos tienen valor
    if (nombreFruta !== "" && colorFruta !== "") {
        // Obtener el cuerpo de la tabla
        var tabla = document.getElementById("tablaFrutas").getElementsByTagName("tbody")[0];

        // Crear una nueva fila y añadirla a la tabla
        tabla.innerHTML += "<tr><td>" + nombreFruta + "</td><td>" + colorFruta + "</td></tr>";

        // Limpiar los inputs
        document.getElementById("nombreFruta").value = "";
        document.getElementById("colorFruta").value = "";
    } else {
        alert("Por favor, completa ambos campos.");
    }
}