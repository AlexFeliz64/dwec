//--------------------------------------------------------
// Dependencias del módulo
//--------------------------------------------------------
import * as http from '../lib/http.mjs'

//---------------------------------------------------------
// Exportaciones
//---------------------------------------------------------
export { renderizar, siguiente, anterior, filtrar, recargar };


//---------------------------------------------------------
// Constantes
//---------------------------------------------------------
const PAGINA_INICIAL = 1;

const ATTR_URL_BASE     = 'tabla-url-base';
const ATTR_FILTRO       = 'tabla-url-filtro';
const ATTR_PAGINA       = 'tabla-pagina';
const ATTR_PLANTILLA    = 'tabla-plantilla';


//---------------------------------------------------------
// Funciones que van a renderizar la tabla
//---------------------------------------------------------

/**
 * Renderiza la tabla en el componente objetivo utilizando json2html
 * 
 * @param {*} urlPeliculas Dirección al recurso
 * @param {*} elementoObjetivo Elemento html donde se va a renderizar la tabla
 * @param {*} plantilla Plantilla a emplear para renderizar la tabla
 */
function renderizar(url, elementoObjetivo, plantilla, filtro='') {
   
    // Inicializar nuestro elemento objetivo
    $(elementoObjetivo).attr(ATTR_URL_BASE, url);
    $(elementoObjetivo).attr(ATTR_FILTRO, filtro);
    $(elementoObjetivo).attr(ATTR_PLANTILLA, JSON.stringify(plantilla));
   
    // Renderiza los datos en la URL
    renderizarUrl(generarUrlPagina(url, filtro), elementoObjetivo, plantilla);
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
    $(elementoObjetivo).html(html);

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
function generarUrlPagina(urlRecurso, numeroPagina = PAGINA_INICIAL, filtro='') {
        
    // Añade la información de paginación
    urlRecurso = `${urlRecurso}?_page=${numeroPagina}&_limit=${TABLA_REGISTROS_POR_PAGINA}`;
    
    // Añade el filtro
    urlRecurso = (filtro.length == 0)?urlRecurso:`${urlRecurso}&q=${filtro}`;
    
    return urlRecurso;
}


//---------------------------------------------------------
// Funciones para navegar por la tabla
//---------------------------------------------------------

/**
 * Refresca la página actual
 */
function recargar(elementoObjetivo) {
    cambiarPagina(elementoObjetivo);
}

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
function cambiarPagina(elementoObjetivo, incremento = 0) {
    
    // Obtengo la url del recurso
    const urlRecurso = $(elementoObjetivo).attr(ATTR_URL_BASE);
    
    // Obtiene el filtro si lo hay
    const filtro = $(elementoObjetivo).attr(ATTR_FILTRO);

    // Obtengo el número de página
    const pagina = Number($(elementoObjetivo).attr(ATTR_PAGINA)) + incremento;
    $(elementoObjetivo).attr(ATTR_PAGINA, pagina); 

    // Obtengo la plantilla
    const plantilla = JSON.parse($(elementoObjetivo).attr(ATTR_PLANTILLA));

    // Obtengo la url de la página
    const urlPagina = generarUrlPagina(urlRecurso, pagina, filtro);

    // Llamamos a renderizar la tabla
    renderizarUrl(urlPagina, elementoObjetivo, plantilla, pagina);
}



//---------------------------------------------------------
// Funciones para filtrar los datos
//---------------------------------------------------------
/**
 * Aplica un filtro a la tabla
 */
function filtrar(elementoObjetivo, filtro) {
    
    // Obtendo la url del recurso
    let urlRecurso = $(elementoObjetivo).attr(ATTR_URL_BASE);

    // Obtengo la plantilla
    const plantilla = JSON.parse($(elementoObjetivo).attr(ATTR_PLANTILLA));

    // Almaceno el filtro
    $(elementoObjetivo).attr(ATTR_FILTRO, filtro);

    // Genero la url asociada al recurso con el filtro aplicado
    urlRecurso = generarUrlPagina(urlRecurso, PAGINA_INICIAL, filtro);

    // Renderiza la tabla con el filtro
    renderizarUrl(urlRecurso, elementoObjetivo, plantilla);
}

