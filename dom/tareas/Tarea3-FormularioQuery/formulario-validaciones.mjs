export function validarObligatorio(valor) {
    return valor.trim() !== '';
}

export function validarDNI(dni) {
    const dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    return dniRegex.test(dni);
}

export function validarEmail(email) {
    return email.includes('@');
}

export function validarContraseñas(contraseña1, contraseña2) {
    return contraseña1 === contraseña2 && contraseña1 !== '';
}
