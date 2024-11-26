//---------------------------------------------------------
// Exportaciones
//---------------------------------------------------------
export { mensaje, preguntar };


//---------------------------------------------------------
// Inicialización
//---------------------------------------------------------
$(document).ready(() => {

    $('body').append(
        $('<div>').load(
            URL_COMPONENTE_PLANTILLLA("modal")
        )
    );
});



//---------------------------------------------------------
// Funciones para crear cuadros de diálogo modales
//---------------------------------------------------------

/**
 * Muestra un diálogo modal con el texto pasado como argumento
 * 
 * @param {*} texto 
 */
function mensaje(texto) {

    // Asigna el mensaje de texto a la ventana modal
    $('#modalMensaje .modal-body').text(texto);

    // Muestra la ventana modal
    $('#modalMensaje').modal('show');
}


/**
 * Muestra un diálogo modal y solicita confirmación al usuario
 */
function preguntar(texto, onSi) {
 
    // Asigna el mensaje de texto a la ventana modal
    $('#modalPreguntar .modal-body').text(texto);

    // Configuramos el botón aceptar
    $('#modalPreguntar [name=botonAceptar]').on('click', () => {

        // Se ha hecho click en aceptar. Se llama a la función callback
        onSi();

        // Desactivamos el gestor de evento
        $('#modalPreguntar [name=botonAceptar]').off('click');

        // Oculta el cuadro de dialogo
        $('#modalPreguntar').modal('hide'); 
    });

    // Muestra la ventana modal
    $('#modalPreguntar').modal('show');
}
