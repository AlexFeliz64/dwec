
// Exportaciones del módulo
export { get, del, post };

/**
 * Petición de tipo get al servidor
 * 
 * @param {} url URL del recurso a descargar
 */
function get(url) {
    return fetch(url).catch(error => {
        console.error("Error en GET:", error);
        throw error;
    });
}

function del(url, id) {
    return fetch(url + "/" + id, { method: "DELETE" })
        .catch(error => {
            console.error("Error en DELETE:", error);
            throw error;
        });
}

function post(url, objeto) {
    
    /**
     *  delete objeto(id);
     */
   
    return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    }).catch(error => {
        console.error("Error en POST:", error);
        throw error;
    });
}
