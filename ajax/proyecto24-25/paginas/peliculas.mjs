//--------------------------------------------------------
// Dependencias del módulo
//--------------------------------------------------------
import * as http from '../js/lib/http.mjs';
import * as tabla from '../js/componentes/tabla.mjs';
import * as paginador from '../js/componentes/paginador.mjs';
import * as modal from '../js/componentes/modal.mjs';
import * as toast from '../js/componentes/toast.mjs';


//--------------------------------------------------------
// Exportaciones 
//--------------------------------------------------------
export { inicializar };


//--------------------------------------------------------
// Constantes
//--------------------------------------------------------
const TBODY_RESULTADO = "#resultado";
const DIV_PAGINADOR = "#paginador";

const JSON2HTML_PLANTILLA_TABLA = {
      '<>': 'tr','html': [
      {'<>': 'th','scope':'row','html': '${id}'},
      {'<>': 'td','html': '${titulo}'},
      {'<>': 'td','html': '${genero}'},
      {'<>': 'td','html': '${duracion}'},
      {'<>': 'td','html': '${fecha_de_lanzamiento}'},
      {'<>':'td','html':'<button name="btEditar" class="btn btn-info bi bi-pencil-fill" value="${id}"></button>'},
      {'<>':'td','html':'<button name="btEliminar" class="btn btn-danger bi bi-trash-fill" value="${id}"></button>'}
    ]
};


//-------------------------------------------------------
// Inicialización de la página de peliculas
//-------------------------------------------------------

function inicializar() {

    // Asigna los gestores de eventos del interfaz de usuario
    $("#btBuscar").on("click", onBotonBuscarClick);
    $("#btAnadir").on("click", onBotonAñadirClick);

    // Eventos en botones de los registros de la tabla
    $(TBODY_RESULTADO).on('click', '[name=btEliminar]', onEliminarClick);
    $(TBODY_RESULTADO).on('click', '[name=btEditar]', onEditarClick);  

    // Renderiza la tabla
    tabla.renderizar(
        URL_PELICULAS, 
        TBODY_RESULTADO, 
        JSON2HTML_PLANTILLA_TABLA
    );    

    // Renderiza el paginador
    paginador.renderizar(DIV_PAGINADOR, 
        () => tabla.anterior(TBODY_RESULTADO), 
        () => tabla.siguiente(TBODY_RESULTADO)
    );
};


//-------------------------------------------------------
// Gestores de eventos
//-------------------------------------------------------
/**
 * Gestiona los clicks sobre el botón buscar
 */
function onBotonBuscarClick() {
    console.log("buscar");
    
    // Obtengo el filtro
    const filtro = $("#iFiltro").val();

    // Aplico el filtro a la tabla
    tabla.filtrar(TBODY_RESULTADO, filtro);
}


/**
 * Evento añadir receta
 */
function onBotonAñadirClick() {
    console.log("añadir");

    appCargar("pelicula_edit");

//    modal.preguntar("Estás seguro???", () => {
//        console.log("Has aceptado");
//    });
}

/** 
 * Se va a eliminar un registro 
 */
function onEliminarClick(evento) {
    console.log("Eliminar");

    // Obtengo el identificador de la receta a eliminar
    const id=evento.target.value;    
    modal.preguntar(
        "¿Está seguro de que desea eliminar el registro?", 
        () => {
            http.del(URL_PELICULAS, id)
            .then(() => {
                toast.mostrar("Pelicula eliminada");
                tabla.recargar(TBODY_RESULTADO);
            });
        }
    );

    //toast.mostrar("Has eliminado un elemento");
}

/** 
 * Se va a editar un registro 
 */
function onEditarClick(evento) {
    console.log("Editar");
}
