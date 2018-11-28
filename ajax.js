document.querySelector('#cargar').addEventListener('click', cargarDatos);

function cargarDatos(e) {
    e.preventDefault();
    // creamos el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();
    // creamos la conexion
    xhr.open('GET', 'documento.txt', true);
    // usamos el metodo onload
    xhr.onload = function () {
        // aqui se usan los codigos de estado HTTP
        if (this.status === 200) {
            document.querySelector('#data').innerHTML = `${this.responseText}`;
        }
    }
    xhr.send();
}