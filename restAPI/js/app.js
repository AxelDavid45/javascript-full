const cargarDatos = document.querySelector('#cargarPosts');

cargarDatos.addEventListener('click', traerPosts);



function traerPosts() {
    const xhr = new XMLHttpRequest();
    // abrimos la conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    // leemos los datos 
    xhr.onload = function () {
        if (this.status == 200) {
            // convertimos a JSON
            const respuesta = JSON.parse(this.responseText);
            // creamos el template
            let template = '';
            respuesta.forEach(function (post) {
                template += `
                    <div class="card mt-3">
                        <div class="card-body">
                            <h5 class="card-title">${post.title} </h5>
                            <p class="card-text">${post.body}</p>
                        </div>
                     </div>
                `;
            });
            document.querySelector('.listado').innerHTML = template

        }

    }
    // enviamos la peticion
    xhr.send();

}