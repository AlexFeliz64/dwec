// Exportaciones del módulo
export { get, del, post, put };

/**
 * Petición de tipo GET al servidor
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
     *  Para que no genere unos caracteres aleatorios en el campo id
     *  y los genere de forma coherente
     *  @param {delete objeto(id);}
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

/**
 * Petición de tipo PUT al servidor
 */
function put(url, objeto, id) {
    return fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objeto)
    }).catch(error => {
        console.error("Error en PUT:", error);
        throw error;
    });
}


