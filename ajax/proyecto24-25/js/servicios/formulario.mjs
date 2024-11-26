/**
 * Módulo de gestión de formulario
 * 
 * Implementa los siguientes servicios
 * - Validación de campos
 * - Validación de formulario
 * - Envío de datos al servidor
 */

//---------------------------------------------------------------------------
// Dependencias
//---------------------------------------------------------------------------
import * as validacionesModule from '/js/servicios/validaciones.mjs';



//---------------------------------------------------------------------------
// Interfaz
//---------------------------------------------------------------------------
export {
    inicializar
};



//---------------------------------------------------------------------------
// Inicialización
//---------------------------------------------------------------------------

/**
 * Inicializa el formulario pasado como argumento
 * 
 * @param {*} form ID del formulario que queremos inicializar
 */
function inicializar(form, onSubmit, onError) {

    // Inicializa las validaciones
    validacionesModule.inicializar();

    // Los campos que tienen validacion se validan al salir del campo
    $(form).find("[validacion^=val]").on('blur', onValidacionCampo);
    
    // Eventos para gestionar el envio del formulario
    $(form).on('submit', onFormSubmit);    

    // Asigna los eventos del formulario para su posterior uso
    document.querySelector(form).form_submit_handler = onSubmit;
    document.querySelector(form).form_error_handler = onError;
};




//---------------------------------------------------------------------------
// Gestores de eventos
//---------------------------------------------------------------------------

/**
 * Valida un campo
 * 
 * @param {*} evento 
 */
function onValidacionCampo(evento) {

    // Obtener el objeto jQuery asoiciado al campo
    const campo = $(evento.target);

    // Llama a validar el campo
    validarCampoFormulario(campo);
}

function onEnviarClick(evento) {
    $('form').submit();
}

/**
 * Valida el formulario
 * 
 * @param {*} evento 
 */
function onFormSubmit(evento) { 
    
    // Obtiene el id del formulario
    const selector = '#'+evento.target.id;

    // Variable donde guardo si hay errores de formulario
    let hayErrores = false;

    // Para cada campo del formulario lleva a cabo una validación
    $("[validacion^=val]").each((indice, campo) => {

        // Llama a validar el campo
        const errores = validarCampoFormulario($(campo));

        // Si tengo errores marco que hay errores
        if(errores.length > 0) {
            hayErrores = true;
        }
    });

    // Si tengo errores tengo que evitar que el formulario se envíe
    if(hayErrores) {
        evento.preventDefault();

        // LLama a la gestión de errores
        onFormErrorCallback(selector);
    } else {
        enviarFormulario(selector);
    }    
}




//---------------------------------------------------------------------------
// Funciones empleadas en la gestión del formulario
//---------------------------------------------------------------------------

function validarCampoFormulario(campo) {

    // Valida el campo
    const errores = validarCampo(campo);

    // Si hay errores, marca el campo como inválido. En caso 
    // contrario elimina los errores.
    if(errores.length) {
        marcarCampoInvalido(campo, errores);
    } else {
        marcarCampoValido(campo, errores);
    }

    // Retorna la lista de errores
    return errores;
}



function validarCampo(campo) {
    
    // Obtengo el valor en el campo
    const valor = $(campo).val();

    // Obtener la funcion/funciones de validacion que hay que aplicar
    const listaValidaciones = campo.attr('validacion');
    const validaciones = listaValidaciones.split(',');

    // Defino un array de errores con longitud cero. 
    let errores = [];

    // IR llamando a las validaciones que tenga el campo
    // Aplica todas las validaciones, ya que permito obtener todos los errores de una pasada
    for(let i = 0;i < validaciones.length;i++) {

        // Obtenemos el NOMBRE de la validacion
        const validacion = validaciones[i];
        console.log("Validación = "+validacion);

        // Obtenemos la FUNCION
        const funcionValidacion = eval('validacionesModule.'+validacion);

        // Llamo a la validación. Si no se pasa lo almaceno en los errores
        const resultado = funcionValidacion(valor);

        // Si hay errores los guardo en el array
        if(resultado.isError) {
            errores.push(resultado);
        }
    }

    // Devuelvo la lista de errores
    return errores;
}



//---------------------------------------------------------------------------
// Funciones de gestión del formulario
//---------------------------------------------------------------------------

function marcarCampoInvalido(campo) {
    campo.addClass('error'); 
}

function marcarCampoValido(campo) {
    campo.removeClass('error'); 
}


//---------------------------------------------------------------------------
// Funciones empleadas para invocar a los callbacks del formulario
//---------------------------------------------------------------------------
function onFormErrorCallback(selector) {

    // Obtiene la función a invocara
    const callback = document.querySelector(selector).form_error_handler;

    // Invoca a la función pasando el ID del formulario
    callback(selector);
}

function onFormSubmitCallback(selector,objeto) {

    // Obtiene la función a invocara
    const callback = document.querySelector(selector).form_submit_handler;

    // Invoca a la función pasando el ID del formulario
    callback(objeto);    
}



//---------------------------------------------------------------------------
// Gestión de datos
//---------------------------------------------------------------------------

/**
 * Envía en formulario
 * 
 * @param {*} selector 
 */
function enviarFormulario(selector) {

    // Prepara objeto para envío al servidor
    const objeto = {};

    // Carga en el objeto los valores de los campos en el form
    cargarAtributosDesdeFormulario(selector, objeto);

    // Llama al callback para enviar los datos
    onFormSubmitCallback(selector, objeto);
}


/**
 * Recorre todos los campos en el formulario y pone los valores en el objeto resultante
 * utuilizando el campo name.
 */
function cargarAtributosDesdeFormulario(selector, objeto) {
    $(selector).find('[name]').each((i, e) => {
        objeto[e.name] = e.value;
    });
}



