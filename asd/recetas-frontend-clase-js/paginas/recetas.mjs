//--------------------------------------------------------
// Dependencias del módulo
//--------------------------------------------------------
import * as tabla from '../js/componentes/tabla.mjs';
import * as paginador from '../js/componentes/paginador.mjs';



//--------------------------------------------------------
// Constantes
//--------------------------------------------------------

const URL_RECETAS = "http://localhost:3000/recetas"

const TBODY_RESULTADO = document.getElementById("resultado");
const DIV_PAGINADOR = "#paginador";

const JSON2HTML_PLANTILLA_TABLA = {
      '<>': 'tr','html': [
      {'<>': 'th','scope':'row','html': '${id}'},
      {'<>': 'td','html': '${nombre}'},
      {'<>': 'td','html': '${descripcion}'},
      {'<>': 'td','html': '<button name="bEditar">Editar</button>'},
      {'<>': 'td','html': '<button name="bEliminar">Borrar</button>'},
    ]
};


//-------------------------------------------------------
// Inicialización de la página de recetas
//-------------------------------------------------------

$("#recetas").ready(() => {

    $("bEditar").on("click");
    $("bEliminar").on("click");
    // Renderiza la tabla
    tabla.renderizar(
        URL_RECETAS, 
        TBODY_RESULTADO, 
        JSON2HTML_PLANTILLA_TABLA
    );    

    // Renderiza el paginador
    paginador.renderizar(DIV_PAGINADOR, 
        () => tabla.anterior(TBODY_RESULTADO), 
        () => tabla.siguiente(TBODY_RESULTADO)
    );
    $(document).on('click', 'button[name="bEliminar"]',function(){
        const id = $(this).closest('tr').find('th[scope="row"]').text();
        eliminarReceta(id);
    });
});
function eliminarReceta(id) {
    const response = fetch(`${URL_RECETAS}/${id}`, { method: 'DELETE' });
    if (response.ok) {
        console.log(`Receta con ID ${id} eliminada correctamente.`);
    } else {
        console.error("Error al eliminar la receta.");
    }
}

