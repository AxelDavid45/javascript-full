// Creamos clases con ES6 de Javascript
class Cliente {
    constructor (nombre, saldo) { //siempre habra un constructor para las clases que creen objetos
        this.nombre = nombre;
        this.saldo = saldo;
    }

    saldoActual () { // de esta forma se crea un metodo dentro de una clase. Tambien se le puede pasar argumentos 
        return `${this.nombre} tu saldo actual es de ${this.saldo} `;
    }

    tipoCliente () {
        let tipo;
        if (this.saldo >10000) {
            tipo = `${this.nombre} tu tipo de cliente es Gold`;
        } else if (this.saldo >5000) {
            tipo = `${this.nombre} tu tipo de cliente es Platinum`;;
        } else {
            tipo = `${this.nombre} tu tipo de cliente es Normal`;
        }
        return tipo;
    }
    // cuando usamos un metodo estatico no es necesario usar la palabra new
    static bienvenida () {
        return `bienvenido al banco`;
    }
}

class Empresa extends Cliente { //con extends podemos heredad metods de las clases
    constructor (nombre, telefono,saldo, tipo) {
        super(nombre,saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }

} 

const empresaPatito = new Empresa('Innova', 828282, 50000, 'Tecnologia');
console.log(empresaPatito);
console.log(empresaPatito.tipoCliente());