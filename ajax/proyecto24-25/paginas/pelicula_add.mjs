
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

/**
* Obtiene el último id guardado
*/
    let nextId = 0

    http.get(URL_PELICULAS)
        .then(response => response.json())
        .then(peliculas => {
            if (peliculas.length > 0) {
                let ultimoId = 0;
                /**
                 * Busca el id más alto
                 */
                for (const pelicula of peliculas) {
                    if (pelicula.id > ultimoId) {
                        ultimoId = pelicula.id;
                    }
                }
                /*
                 * Se guarda el siguiente id 
                 */ 
                nextId = ultimoId + 1;
            }
        })
        .catch(error => {
            console.error("Error al obtener las películas:", error);
            nextId = 1; 
        });

    // Inicializa eventos y formulario
    $("#btnVolver").on("click", onBtVolverClick);

    formulario.inicializar(
        "#formularioPeliculas",
        pelicula => {

            /**
             * Se asigna el id siguiente
             */
            pelicula.id = nextId;
            console.log("Formulario inicializado: ", pelicula);
            crearPelicula(pelicula);
        },
        () => {
            console.log("Error en el formulario");
        }
    );
}



//-----------------------------------------------------------------------------
// Gestores de eventos
//-----------------------------------------------------------------------------

/**
 * Evento para volver al listado de peliculas
 */
function onBtVolverClick(e) {
    appCargar("peliculas"); 
}

//-----------------------------------------------------------------------------
// Funciones de gestión de datos
//-----------------------------------------------------------------------------

/**
 * Crea la pelicula y muestra el mensaje emergente toast
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


