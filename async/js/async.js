// CONSUMIENDO LA API PLACEHOLDER CON TO DO'S

async function consumirDatos () {
    // Esperando los datos de la api
    const datos = await fetch('https://jsonplaceholder.typicode.com/todos');

    // Procedera cuando la respuesta del fetch este lista
    const respuesta = await datos.json();

    return respuesta;
}

// la funcion de arriba no interviene en nada con la de abajo por ser asincrona
function hola (dato) {
    
    console.log(`hola ${dato}`);
}
consumirDatos()
    .then(res => console.log(res))
    .catch(error => console.log(error));


hola('axel');


