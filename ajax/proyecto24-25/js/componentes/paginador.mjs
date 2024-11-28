
export { renderizar };

/**
 * Renderiza el paginador 
 */
function renderizar(elementoPadre ,onAnterior, onSiguiente) {

    $(elementoPadre).load("./js/componentes/paginador.html", () => {
        
        /**
         * Inicializacion de la paginacion
         */ 
        $(elementoPadre).find("[paginador-anterior]").on('click', onAnterior);
        $(elementoPadre).find("[paginador-siguiente]").on('click', onSiguiente);
    });

 }
