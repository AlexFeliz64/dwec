
//--------------------------------------------------------
// Dependencias
//--------------------------------------------------------
import * as toast from '../js/componentes/toast.mjs';
import * as http from '/js/lib/http.mjs';
import * as formulario from '/js/servicios/formulario.mjs';


//--------------------------------------------------------
// Exportaciones 
//--------------------------------------------------------
export { inicializar };


//-----------------------------------------------------------------------------
// Inicialización del módulo
//-----------------------------------------------------------------------------
function inicializar() {

    // Inicializa los botones
    $("#btnGuardar").on("click", onBtGuardarClick);
    $("#btnVolver").on("click", onBtVolverClick);

    // Inicializa el formulario
    formulario.inicializar(
        "#formularioPeliculas", 
        (pelicula) => {
            console.log("Peliculas inicializado, ", pelicula)
            crearPelicula(pelicula)
        },
        () => {console.log("error")},
    );
};



//-----------------------------------------------------------------------------
// Gestores de eventos
//-----------------------------------------------------------------------------

/**
 * Evento para guardar los datos del formulario
 */
function onBtGuardarClick(e) {


}



/**
 * Evento para volver al listado de recetas
 */
function onBtVolverClick(e) {
    appCargar("peliculas"); 
}

//-----------------------------------------------------------------------------
// Funciones de gestión de datos
//-----------------------------------------------------------------------------

/**
 * Crea la receta
 */
function crearPelicula(pelicula) {

    http.post(URL_PELICULAS, pelicula)
        .then(response => response.json())
        .then(pelicula => {
            console.log("Se ha creado correctamente")
            toast.mostrar("Se ha creado la pelicula: "+pelicula.titulo);            
            appCargar("peliculas");
        })
        .catch(error => {
            console.error("Error al guardar la película:", error);
            toast.mostrar("Error al guardar la película.", "error");
        });
}


