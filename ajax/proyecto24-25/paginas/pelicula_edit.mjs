//--------------------------------------------------------
// Dependencias
//--------------------------------------------------------
import * as toast from '../js/componentes/toast.mjs';
import * as http from '/js/lib/http.mjs';
import * as formulario from '/js/servicios/formulario.mjs';
import { idPelicula } from './peliculas.mjs';


//--------------------------------------------------------
// Exportaciones 
//--------------------------------------------------------
export { inicializar };


//-----------------------------------------------------------------------------
// Inicialización del módulo
//-----------------------------------------------------------------------------
function inicializar() {
    // Obtiene los datos de la película a editar
    http.get(`${URL_PELICULAS}/${idPelicula}`)
        .then(response => response.json())
        .then(pelicula => {
            // Rellena el formulario con los datos de la película
            $("#formularioPeliculas [name='titulo']").val(pelicula.titulo);
            $("#formularioPeliculas [name='genero']").val(pelicula.genero);
            $("#formularioPeliculas [name='duracion']").val(pelicula.duracion);
            $("#formularioPeliculas [name='fecha_de_lanzamiento']").val(pelicula.fecha_de_lanzamiento);
        })
        .catch(error => {
            console.error("Error al obtener los datos de la película:", error);
        });

    // Inicializa eventos y formulario
    $("#btnVolver").on("click", onBtVolverClick);

    formulario.inicializar(
        "#formularioPeliculas",
        pelicula => {
            // Se asigna el id de la película y se actualiza
            pelicula.id = idPelicula;
            actualizarPelicula(pelicula);
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
 * Actualiza la película y muestra el mensaje emergente toast
 */
function actualizarPelicula(pelicula) {
    const id = pelicula.id; 
    http.put(URL_PELICULAS, pelicula, id) 
        .then(response => response.json())
        .then(peliculaActualizada => {
            console.log("Pelicula actualizada correctamente", peliculaActualizada);
            toast.mostrar("Pelicula actualizada correctamente");
            appCargar("peliculas");
        })
        .catch(error => {
            console.error("Error al actualizar la película:", error);
            toast.mostrar("Error al actualizar la película.", "error");
        });
}

