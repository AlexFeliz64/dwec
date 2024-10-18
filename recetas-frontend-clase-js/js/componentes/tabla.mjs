// Exportaciones
export { renderizar };

/**
 * Renderiza la tabla en el componente objetivo 
 * @param {*} datos 
 * @param {*} elementoObjetivo 
 * @param {*} platilla 
 */
//Funciones que ban a renderizar la tabla
function renderizar(datos, elementoObjetivo, platilla){
    let html = json2html.render(datos,plantilla);
    elementoObjetivo.innerHTML = html;
}


function renderizarPaginador(){
    $("#paginador").load("paginador.html")
}