//--------------------------------------------------------
// Dependencias del módulo
//--------------------------------------------------------
import * as http from '../lib/http.mjs'

//---------------------------------------------------------
// Exportaciones
//---------------------------------------------------------
export { renderizar, siguiente, anterior };


//---------------------------------------------------------
// Constantes
//---------------------------------------------------------
const PAGINA_INICIAL = 1;

const ATTR_URL_BASE     = 'tabla-url-base';
const ATTR_PAGINA       = 'tabla-pagina';
const ATTR_PLANTILLA    = 'tabla-plantilla';


//---------------------------------------------------------
// Funciones que van a renderizar la tabla
//---------------------------------------------------------

/**
 * Renderiza la tabla en el componente objetivo utilizando json2html
 * 
 * @param {*} urlRecetas Dirección al recurso
 * @param {*} elementoObjetivo Elemento html donde se va a renderizar la tabla
 * @param {*} plantilla Plantilla a emplear para renderizar la tabla
 */
function renderizar(url, elementoObjetivo, plantilla) {
   
    // Inicializar nuestro elemento objetivo
    $(elementoObjetivo).attr(ATTR_URL_BASE, url);
    $(elementoObjetivo).attr(ATTR_PLANTILLA, JSON.stringify(plantilla));
   
    // Renderiza los datos en la URL
    renderizarUrl(generarUrlPagina(url), elementoObjetivo, plantilla);
}

/**
 * Denderiza un recurso pasado como argumento
 */
function renderizarUrl(url, elementoObjetivo, plantilla, pagina = PAGINA_INICIAL) {
    
    // Hace la carga de datos
    http.get(url)
        .then(response => response.json())
        .then(datos => {
            renderizarDatos(datos, elementoObjetivo, plantilla, pagina);
        })
        .catch(error => {
            console.log("Error");
        })   
}


/**
 * Renderiza el contenido de la tabla
 * 
 * @param {*} datos 
 * @param {*} plantilla 
 */
function renderizarDatos(datos, elementoObjetivo, plantilla, pagina = PAGINA_INICIAL) {
    
    const html = json2html.render(datos, plantilla);
    elementoObjetivo.innerHTML = html;

    // Asigna la página actual
    $(elementoObjetivo).attr(ATTR_PAGINA, pagina);    
}


//---------------------------------------------------------
// Funciones para trabajar con datos
//---------------------------------------------------------

/**
 * Genera una URL para la página de datos solicitada
 * 
 * @param {*} urlRecurso dirección del recurso asociado a esta tabla
 * @param {*} numeroPagina 
 */ 
function generarUrlPagina(urlRecurso, numeroPagina = PAGINA_INICIAL) {
    return `${urlRecurso}?_page=${numeroPagina}&_limit=${TABLA_REGISTROS_POR_PAGINA}`;
}


//---------------------------------------------------------
// Funciones para navegar por la tabla
//---------------------------------------------------------

/**
 * Carga la siguiente página
 */
function siguiente(elementoObjetivo) {
    cambiarPagina(elementoObjetivo, 1);
}

/**
 * Carga la página anterior
 */
function anterior(elementoObjetivo) {
    cambiarPagina(elementoObjetivo, -1);
}

/**
 * Cambia la página 
 * 
 * @param {*} elementoObjetivo 
 * @param {*} pagina 
 */
function cambiarPagina(elementoObjetivo, incremento) {
    // Obtendo la url del recurso
    const urlRecurso = $(elementoObjetivo).attr(ATTR_URL_BASE);
    
    // Obtengo el número de página
    const pagina = Number($(elementoObjetivo).attr(ATTR_PAGINA)) + incremento;
    $(elementoObjetivo).attr(ATTR_PAGINA, pagina); 

    // Obtengo la plantilla
    const plantilla = JSON.parse($(elementoObjetivo).attr(ATTR_PLANTILLA));

    // Obtengo la url de la página
    const urlPagina = generarUrlPagina(urlRecurso, pagina);

    // Llamamos a renderizar la tabla
    renderizarUrl(urlPagina, elementoObjetivo, plantilla, pagina);
}
