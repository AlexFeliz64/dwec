

class cuenta {
    cantidad = 0;

    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    // Obtener el titular
    get gettitular() {
        return this.titular;
    }

    // Poner el nuevo titular
    set settitular(newtitular) {
        this.titular = newtitular;
    }

    // Obtener la cantidad
    get getcantidad() {
        return this.cantidad;
    }

    // Poner la nueva cantidad
    set setcantidad(newcantidad) {
        this.cantidad = newcantidad;
    }

    // Lo que se verá en pantalla
    toString() {
        return "Titular: " + this.titular + "\nCantidad: " + this.cantidad;
    }

    ingresar(cantidad) {
        this.cantidad += cantidad;
    }

    retirar(cantidad) {
        if ((this.cantidad -= cantidad) < 0) {
            this.cantidad = 0;
        } else {
            this.cantidad -= cantidad;
        }
    }
}

export default cuenta;