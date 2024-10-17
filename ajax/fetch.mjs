window.addEventListener("load", () => {

    document.getElementById("bget").addEventListener("click", onGetClick);
    document.getElementById("bpost").addEventListener("click", onPostClick);
    document.getElementById("bput").addEventListener("click", onPutClick);
    document.getElementById("bdelete").addEventListener("click", onDeleteClick);

});

function onGetClick() {
    console.log("GET");

    fetch("http://localhost:3000/recetas")
        .then(response => response.json())
        .then(recetas => {
            console.log(recetas);

            renderizartabla(recetas);
        });

}

function onPostClick() {
    console.log("POST");

    const receta = {
        nombre: "Huevo frito",
        descripcion: "Huevo frito",
        fechaAlta: "01/01/2024",
        tiempo: "2",
        dificultad: "Fácil",
        puntuacion: "5"
    };

    fetch(
        "http://localhost:3000/recetas",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(receta)
        }
    )
    .then(response => response.json())
    .then(recetas => {
        console.log(recetas);

        console.log(recetas.nombre);
    });

}

function onPutClick() {
    console.log("PUT");

    const receta = {
        nombre: "Huevo frito",
        descripcion: "Huevo frito",
        fechaAlta: "01/01/2024",
        tiempo: "2",
        dificultad: "Fácil",
        puntuacion: "5"
    };

    fetch(
        "http://localhost:3000/recetas/2",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(receta)
        }
    )
    .then(response => response.json())
    .then(recetas => {
        console.log(recetas);

        console.log(recetas.nombre);
    });
}

function onDeleteClick() {
    console.log("DELETE");

    fetch("http://localhost:3000/recetas/2", 
        {
            method: "DELETE"
        }
    )
    .then(response => {
        console.log("Borrado correctamente")
    });
}

function renderizartabla(recetas){

    for(let receta of recetas){
        const fila = `<tr><td>${receta.nombre}</td><td>${receta.descripcion}</td></tr>`;

        html = html + fila;
    }

    document.getElementById("resultado").innerHTML = html;
}

