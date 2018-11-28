// callbacks
const paises = ['Mexico', 'Argentina', 'Francia', 'Inglaterra'];

// esto hace que despues de dos segundos de agrear el pais, se imprima ejecutando la funcion que pasemos en el callback
function agregarPais(pais, callback) {
    setTimeout(function() {
        paises.push(pais);
        callback();
    },2000)

}




function mostrarPaises() {
    setTimeout(function () {
        let html = '';
        paises.forEach(function (pais) {
            html += `<li>${pais}</li>`;
        });
        document.getElementById('data').innerHTML = html;

    }, 1000);
}

// agrega un pais despues de 2 segundos
agregarPais('EU', mostrarPaises);
// muestra los paises despues de 1 ssegundo
mostrarPaises();