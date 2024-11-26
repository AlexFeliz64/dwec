
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
        "#formularioRecetas", 
        (receta) => crearReceta(receta),
        () => console.log("error"),
    );
};



//-----------------------------------------------------------------------------
// Gestores de eventos
//-----------------------------------------------------------------------------

/**
 * Evento para guardar los datos del formulario
 */
function onBtGuardarClick(e) {

    // Validar el formulario

    // Si todo ok, envía los datos

    // Muestra mensaje indicando que se han guardado los cambios

}


/**
 * Evento para volver al listado de recetas
 */
function onBtVolverClick(e) {
    appCargar("recetas"); 
}

//-----------------------------------------------------------------------------
// Funciones de gestión de datos
//-----------------------------------------------------------------------------

/**
 * Crea la receta
 */
function crearReceta(receta) {

    http.post(URL_PELICULAS, receta)
        .then(response => response.json())
        .then(recetas => {
            toast.mostrar("Se ha creado la receta: "+receta.nombre);            
            appCargar("recetas");
        });
}

