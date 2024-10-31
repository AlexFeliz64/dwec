"use strict";

//----------------------------------------------------------------------------
// Constantes asociadas al GUI
//----------------------------------------------------------------------------
const APP_ROOT          = "/";
const PAGINAS_ROOT      = "paginas";
const SERVICIOS_ROOT    = "js/servicios";
const COMPONENTES_ROOT  = "js/componentes";

//----------------------------------------------------------------------------
// Constantes asociadas al BACKEND
//----------------------------------------------------------------------------
const LOGIN_RECURSO     = `${URL_BACKEND}/login`;


//---------------------------------------------------------
// Funciones de gestión de la aplicación
//---------------------------------------------------------
function appCargar(nombre) {
    
    // Carga la página
    if(nombre == APP_ROOT) {
        $("#workspace").empty();
    } else {
        $("#workspace").load(URL_PAGINA(nombre));
    }
}


//----------------------------------------------------------------------------
// Funciones para calcular los nombres de los recursos
//----------------------------------------------------------------------------
function URL_PAGINA(nombre) {
    return `${PAGINAS_ROOT}/${nombre}.html`
}

function URL_COMPONENTE_JS(nombre) {
    return `${COMPONENTES_ROOT}/${nombre}.mjs`
}

function URL_COMPONENTE_PLANTILLLA(nombre) {
    return `${COMPONENTES_ROOT}/${nombre}.html`
}
