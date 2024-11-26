/**
 * Módulo validaciones
 * 
 * Implementa validaciones de diferentes tipos de datos.
 */


//-------------------------------------------------------------------------
// Inicializacion
//-------------------------------------------------------------------------
/**
 * Inicializa el módulo de validaciones
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

    // Validación ok
    static #OK = new ResultadoValidacion();

    // Código de resultado. Un cero indica que no hay error
    #resultado;

    // Si hay error, indica el mensaje 
    #mensaje;

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
// Validaciones implementadas
//
// Las validaciones tienen que retornar un objeto de tipo error 
// donde se debe indicar el código de error y el mensaje de error
//-------------------------------------------------------------------------

/**
 * Valida que la cadena pasada como argumento no esté vacía
 * 
 * @param {*} cadena 
 * @returns 
 */
export function val_CadenaNoVacia(cadena) {
    return cadena.trim().length != 0 ? ResultadoValidacion.OK : new ResultadoValidacion(-1, 'No se esperaba una cadena vacía');
}

/**
 * Valida que el número pasado como parámetro no esté vacío
 * 
 * @param {} numero 
 * @returns 
 */
export function val_NumeroPar(numero) {
    return numero % 2 == 0 ? ResultadoValidacion.OK : new ResultadoValidacion(-2, 'Se esperaba un número par');
}
