
// Exportaciones del módulo
export { get, del, post };

/**
 * Petición de tipo get al servidor
 * 
 * @param {} url URL del recurso a descargar
 */
function get(url) {
    return fetch(url);
}

/**
 * Petición de tipo delete al servidor
 * 
 * @param {} url URL del recurso a eliminar
 */
function del(url, id) {
    return fetch(
        url+"/"+id, 
        {
            method: "DELETE"
        }
    );
}

/**
 * Envía datos al servidor
 * 
 * @param {*} url 
 */
function post(url, objeto) {

    return fetch(
        url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objeto)
        }
    );
}