// variables

const busqueda = document.querySelector('#buscador');


busqueda.addEventListener('keypress', mostrarEvento);


function mostrarEvento (e) {
    document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`EVENTO: ${e.type} `);
}