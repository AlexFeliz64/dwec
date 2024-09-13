/** Carga el módulo. Función de node.js para cargar módulos  */
const prompt = require('prompt-sync')();

/** Lee un nombre desde la consola de forma síncrona */
const nombre = prompt('¿Cómo te llamas?');
console.log (nombre);