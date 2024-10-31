




$(document).ready(() =>  {

    $("#btnVolver").on("click" , onBtnVolverClick);
    $("#btnGuardar").on("click" , onBtnGuardarClick);

});


function onBtnVolverClick(){
    appCargar("recetas");
    e.preventDefault;
}