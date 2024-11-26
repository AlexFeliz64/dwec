//---------------------------------------------------------
// Exportaciones
//---------------------------------------------------------
export { mostrar };


//---------------------------------------------------------
// Inicialización
//---------------------------------------------------------
$(document).ready(() => {
    $('body').append(
        $('<div>').load(
            URL_COMPONENTE_PLANTILLLA("toast")
        )
    );
});


//---------------------------------------------------------
// Funciones para crear un toast
//---------------------------------------------------------
function mostrar(texto) {

    // Asigna el mensaje de texto
    $('#toast .toast-body').text(texto);

    // Muestra el mensaje
    $('#toast').toast('show');
}