// creamos prototipos
// creamos la clase estilo es5 js
function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
// Creamos el prototype con una funcion
Cliente.prototype.TipoCliente = function () {
    let tipo;

    if(this.saldo > 1000) {
        tipo = 'Gold';
    } else if (this.saldo > 500) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

const Axel = new Cliente('Axel', 50000);

console.log(Axel);

// Creamos una nueva clase
function Empresa (nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo); //de esta forma heredamos el constructor de la clase Cliente
    this.telefono = telefono;
    this.tipo = tipo;
}
// Heredamos los prototypes de la clase Cliente
Empresa.prototype = Object.create(Cliente.prototype);

const Empresa1 = new Empresa('InnovaChiapas', 102000, 9611581478, 'Comercio');

console.log(Empresa1.TipoCliente());