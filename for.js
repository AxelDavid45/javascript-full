// const musica = ['Cancion 1', 'Cancion 2', 'Cancion 3'];


// for (let i = 0; i < musica.length; i++) {
//     console.log(`Reproduciendo la cancion: ${musica[i]}`);
// }

// let i = 0;

/*while(i < musica.length) {
    console.log(`Estas reproduciendo la cancion ${musica[i]}`);
    i ++
}*/

// do {
//     console.log(`Estas reproduciendo la cancion: ${musica[i]}`);
//     i++
// } while(i < musica.length);

// El forEach nos servira para recorrer un arreglo de una forma mejorn y mas limpia

// const tareas = ['Hacer tarea', 'Comer', 'Estudiar'];

// tareas.forEach(function (tarea, index) {
//     console.log(`${index} : ${tarea} `);
    
// });

// console.log(tareas);

// // El map sirve para recorrer un arreglo con objetos
// const carrito = [
//     {id: 1, producto: 'Playera'},
//     {id: 2, producto: 'Guitarra'},
//     {id: 3, producto: 'Balon'}
// ];
// // sintaxis del map
// // Esta funcion hace que los objetos se pasen a un array simple
// const NombreProducto = carrito.map(function (carrito) {
//     return carrito.producto;
// }) ;

// console.log(NombreProducto);
// // Esto hace que se impriman los resultados del objeto convertido en array
// NombreProducto.forEach(function (producto) {
//     console.log(`${producto} `);
// });

// For para recorrer un objeto
let automovil = {marca: 'Ford', motor: 6.4, modelo: 2018};


for(let auto in automovil) {
    console.log(` ${auto}: ${automovil[auto]} `);
}

console.log(automovil);