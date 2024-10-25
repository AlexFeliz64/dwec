
export { renderizar };

/**
 * Renderiza el paginador 
 */
function renderizar(elementoPadre ,onAnterior, onSiguiente) {

    // Renderiza el paginador
    $(elementoPadre).load("./js/componentes/paginador.html", () => {
        
        // Inicializa el paginador recien renderizado
        $(elementoPadre).find("[paginador-anterior]").on('click', onAnterior);
        $(elementoPadre).find("[paginador-siguiente]").on('click', onSiguiente);
    });

 }
