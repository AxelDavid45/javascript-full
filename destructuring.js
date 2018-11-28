// El destructuring es para poder acceder mas rapido a los valores de los arreglos

const cliente = {
    nombre: 'Axel',
    tipo: 'Premium',
    saldo: 300
}

let {nombre,tipo,saldo} = cliente;

console.log(nombre);
console.log(tipo);
console.log(saldo);