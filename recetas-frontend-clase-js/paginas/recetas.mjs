//--------------------------------------------------------
// Dependencias del módulo
//--------------------------------------------------------
import * as http from '../js/lib/http.mjs'
import * as tabla from '../js/componentes/tabla.mjs'

const JSON2HTML_plantilla_tabla ={
    '<>': 'tr','html':[
            {'<>':'th','scope':'row','html':'${id}'},
            {'<>':'td','html':'${nombre}'},
            {'<>':'td','html':'${descripcion}'},
            
            
        ]};
const TBODY_resultado=document.getElementById("resultado");


//-------------------------------------------------------
// Inicialización de la página de recetas
//-------------------------------------------------------
debugger
$("#recetas").ready(() => {

    // Carga las recetas
    cargarRecetas();

});


//-------------------------------------------------------
// Funciones para trabajar con datos
//-------------------------------------------------------

/**
 * Carga las recetas desde la base de datos
 */
async function cargarRecetas() {
    http.get("http://localhost:3000/recetas", onRecetasCargadas);
}

/**
 * Renderiza la tabla de recetas
 */
function onRecetasCargadas(recetas) {
    renderizarTabla(recetas);    
}

/**
 * Renderiza el contenido de la tabla
 */
function renderizarTabla(recetas) {
    
    tabla.renderizar(recetas, TBODY_resultado, JSON2HTML_plantilla_tabla);
}