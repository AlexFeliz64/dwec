
// Exportaciones del módulo
export { get };

/**
 * Petición de tipo get al servidor
 * 
 * @param {} url URL del recurso a descargar
 */
function get(url) {
    return fetch(url);
}