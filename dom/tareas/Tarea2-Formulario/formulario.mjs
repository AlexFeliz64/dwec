import { validarDNI, validarObligatorio, validarEmail, validarContraseñas } from './formulario-validaciones.mjs';

window.addEventListener('load', () => {
    const formulario = document.getElementById('formulario');
    
    // Mostrar mensajes
    const inputs = formulario.querySelectorAll('input');
    inputs.forEach(input => {
        // Mostrar mensaje al entrar en el campo
        input.addEventListener('focus', (e) => mostrarAyuda(e.target));

        // Mostrar mensaje al salir del campo si no es valido
        input.addEventListener('blur', (e) => validarCampo(e.target));
    });

    formulario.addEventListener('submit', (e) => {
        if (validarFormulario()) {
            // Si todo es válido, envía el formulario manualmente
            formulario.submit();
        } else {
            // Si no, se muestra un mensaje
            alert("El formulario tiene errores.");
        }
    });
});

function mostrarAyuda(input) {
    const mensaje = input.getAttribute('mensaje');
    const mensajeAviso = document.getElementById('mensajeaviso');
    mensajeAviso.textContent = mensaje ? mensaje : '';
}

function mostrarError(campo, mensaje) {
    campo.style.backgroundColor = '#ffdddd'; 
    const mensajeAviso = document.getElementById('mensajeaviso');
    mensajeAviso.textContent = mensaje;
}

function limpiarError(campo) {
    campo.style.backgroundColor = '';  
    const mensajeAviso = document.getElementById('mensajeaviso');
    mensajeAviso.textContent = '';
}

function validarCampo(campo) {
    const campoId = campo.id;
    let valido = true;
    
    switch (campoId) {
        case 'nombre':
        case 'apellidos':
            valido = validarObligatorio(campo.value);
            break;
        case 'dni':
            valido = validarDNI(campo.value);
            break;
        case 'email':
            valido = validarEmail(campo.value);
            break;
        case 'contraseña1':
        case 'contraseña2':
            valido = validarContraseñas(
                document.getElementById('contraseña1').value,
                document.getElementById('contraseña2').value
            );
            break;
    }

    if (!valido) {
        mostrarError(campo, `El campo ${campoId} es incorrecto.`);
    } else {
        limpiarError(campo);
    }

    return valido;
}

function validarFormulario(formulario) {
    let FormularioValido = true;
    const inputs = formulario.querySelectorAll('input');

    for (const input of inputs) {
        const valido = validarCampo(input);
        if (!valido) {
            input.focus();
            FormularioValido = false;
            break;
        }
    }

    return FormularioValido;
}
