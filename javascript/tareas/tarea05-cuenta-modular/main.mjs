import cuenta from './cuenta.mjs';

// Crear la cuenta
const cuentaAntonio = new cuenta("Antonio", 100);

// Muestra el nombre y la cantidad de la cuenta
console.log(cuentaAntonio.toString());

cuentaAntonio.ingresar(10);
console.log(cuentaAntonio.toString());

cuentaAntonio.retirar(50);
console.log(cuentaAntonio.toString());

cuentaAntonio.ingresar(15);
console.log(cuentaAntonio.toString());

cuentaAntonio.retirar(100);
console.log(cuentaAntonio.toString());
