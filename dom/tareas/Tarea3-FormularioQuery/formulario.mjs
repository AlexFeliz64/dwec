import { validarDNI, validarObligatorio, validarEmail, validarContraseñas } from './formulario-validaciones.mjs';

$(document).ready(function() {
    const $formulario = $('#formulario');  
    const $inputs = $formulario.find('input'); 
    
    // Mostrar mensaje al entrar en el campo
    $inputs.on('focus', function() {
        mostrarAyuda($(this));
    });
    
    // Mostrar mensaje al salir del campo si no es valido
    $inputs.on('blur', function() {
        validarCampo($(this));
    });

    $formulario.on('submit', function(e) {
        if (validarFormulario()) {
            // Si todo es válido, envía el formulario manualmente
            $formulario.submit();
        } else {
            // Si no, se muestra un mensaje y no se envia
            e.preventDefault();  
            alert("El formulario tiene errores.");
        }
    });
});

function mostrarAyuda($input) {
    const mensaje = $input.attr('mensaje');  
    const $mensajeAviso = $('#mensajeaviso');  
    $mensajeAviso.text(mensaje ? mensaje : '');  
}

function mostrarError($campo, mensaje) {
    $campo.css('background-color', '#ffdddd');  
    const $mensajeAviso = $('#mensajeaviso');   
    $mensajeAviso.text(mensaje);  
}

function limpiarError($campo) {
    $campo.css('background-color', '');  
    const $mensajeAviso = $('#mensajeaviso');  
    $mensajeAviso.text('');  
}

function validarCampo($campo) {
    const campoId = $campo.attr('id');  
    let valido = true; 
    switch (campoId) {
        case 'nombre':
        case 'apellidos':
            valido = validarObligatorio($campo.val());  
            break;
        case 'dni':
            valido = validarDNI($campo.val());
            break;
        case 'email':
            valido = validarEmail($campo.val()); 
            break;
        case 'contraseña1':
        case 'contraseña2':
            valido = validarContraseñas(
                $('#contraseña1').val(),
                $('#contraseña2').val()
            ); 
            break;
    }


    if (!valido) {
        mostrarError($campo, `El campo ${campoId} es incorrecto.`);
    } else {
        limpiarError($campo);  
    }

    return valido;  
}

function validarFormulario() {
    let formularioValido = true;  
    const $inputs = $('#formulario').find('input');  
    // Comprueba que cada campo sea valido
    $inputs.each(function() {
        const valido = validarCampo($(this));  
        if (!valido) {
            // Marca el formulario y el campo como no válido
            $(this).focus();  
            formularioValido = false;  
            return false; 
        }
    });

    return formularioValido;  // Retorna si el formulario es válido o no
}