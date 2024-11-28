/**
 * Módulo validaciones
 * 
 * Implementa validaciones de diferentes tipos de datos.
 */


//-------------------------------------------------------------------------
// Inicializacion
//-------------------------------------------------------------------------
/**
 * Comprobacion de inicializacion del módulo de validaciones
 */
export function inicializar() {
    console.log("Módulo de validaciones inicializado");
}


//-------------------------------------------------------------------------
// Clases y funciones de utilidad
//-------------------------------------------------------------------------

/**
 * Esta clase define el resultado de una validación
 */
export class ResultadoValidacion {

    // Validación OK
    static #OK = new ResultadoValidacion();

    // Código de resultado. Un cero indica que no hay error
    #resultado;

    // Si hay error, indica el mensaje 
    #mensaje;

    // Constructor inicializador
    constructor(resultado = 0, mensaje = null) {
        this.#resultado = resultado;
        this.#mensaje = mensaje;
    }

    get resultado() {
        return this.#resultado;
    }

    get mensaje() {
        return this.#mensaje;
    }

    get isError() {
        return this.#resultado != 0;
    }    

    static get OK() {
        return ResultadoValidacion.#OK;
    }
}

//-------------------------------------------------------------------------
// Tipos de validaciones
//-------------------------------------------------------------------------

/**
 * Valida que la cadena no se encuentre vacia, si no esta vacia da el OK
 * 
 * @param {*} cadena 
 * @returns 
 */
export function val_CadenaNoVacia(cadena) {
    return cadena.trim().length != 0 ? ResultadoValidacion.OK : new ResultadoValidacion(-1, 'No se esperaba una cadena vacía');
}
