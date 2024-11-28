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
    inicializar,
    prellenar
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

    validacionesModule.inicializar();

    /**
     * Los campos que tienen la validacion se validan al salir del campo
     */ 
    $(form).find("[validacion^=val]").on('blur', onValidacionCampo);
    
    /**
     * Evento para gestionar el envio correcto del formulario
     */
    $(form).on('submit', (e) => onFormSubmit(e));    

    /**
     * Asignacion de los eventos del formulario
     */
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

    /**
     * Obtiene el campo al que se va a validar
     */
    const campo = $(evento.target);

    // Llama a validar el campo
    validarCampoFormulario(campo);
}

/**
 * Valida el formulario
 * 
 * @param {*} evento 
 */
function onFormSubmit(evento) { 
    
    evento.preventDefault();

    console.log('entró')

    /**
     * Obtiene el id del formulario
     */
    const selector = '#'+evento.target.id;

    /**
     * Se marca si hay errores
     */
    let hayErrores = false;

    // Para cada campo del formulario lleva a cabo una validación
    $("[validacion^=val]").each((indice, campo) => {

        // Llama a validar el campo
        const errores = validarCampoFormulario($(campo));

        // Si hay errores marco que hay errores
        if(errores.length > 0) {
            hayErrores = true;
        }
    });

    // Si tengo errores tengo que evitar que el formulario se envíe
    if(hayErrores) {

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

    /**  
     * Si hay errores, marca el campo como inválido. En caso 
     * contrario elimina los errores.
    */
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

    // Se aplican todas las validaciones hacia ese campo
    for(let i = 0;i < validaciones.length;i++) {

        // Coge el tipo de validación
        const validacion = validaciones[i];
        console.log("Validación = "+validacion);

        // Coge su funcionalizacion en cuanto a validación
        const funcionValidacion = eval('validacionesModule.'+validacion);

        /**
         * Se guarda si es correcto o no
         * 
         * Si no se envia una validacion se guarda un error
         */
        const resultado = funcionValidacion(valor);

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

    // Obtiene la funcion a la que da error y la q invocará
    const callback = document.querySelector(selector).form_error_handler;

    // Invoca a la función pasando el ID del formulario
    callback(selector);
}

function onFormSubmitCallback(selector,objeto) {

    // // Obtiene la funcion y la q invocará
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
 * Prellena el formulario con los datos de la película
 */
function prellenar(selector, datos) {
    const formulario = document.querySelector(selector);
    
    // Itera sobre cada campo del formulario y asigna el valor correspondiente
    for (let campo in datos) {
        if (formulario[campo]) {
            formulario[campo].value = datos[campo];
        }
    }
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



