const btnEmpleado = document.getElementById('cargarEmpleado');

btnEmpleado.addEventListener('click', function (e) {
    e.preventDefault();
    // creamos el objeto ajax
    const xhr = new XMLHttpRequest();
    // abrimos la conexion y hacemos una peticion con get y ponemos true si la respuesta es asincrona
    xhr.open('GET', './empleado.json', true);
    // ejecutamos una funcion cuando cargue
    xhr.onload = function () {
        // si es codigo ok 200
        if(this.status == 200) {
            // convertimos el string a un objeto
            const empleado = JSON.parse(this.responseText);
            // creamos nuestro template
            const htmlTemplate = `
            <ul>
                <li>ID: ${empleado.id}</li>
                <li>Nombre: ${empleado.nombre}</li>
                <li>Empresa: ${empleado.empresa}</li>
                <li>Edad: ${empleado.edad}</li>
            </ul>         
            `;
            const div = document.createElement('div');
            div.innerHTML = htmlTemplate;
            document.getElementById('empleado').appendChild(div);
        }
    }
    xhr.send();

});

const btnEmpleados = document.getElementById('cargarEmpleados');

btnEmpleados.addEventListener('click', function (e) {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'empleados.json', true);
    xhr.onload = function () {
        if( this.status == 200) {
            const empleados = JSON.parse(this.responseText);
            console.log(empleados);

            let htmlTemplate = '';

            empleados.forEach(function (empleado) {
                htmlTemplate += `<ul>
                <li>ID: ${empleado.id}</li>
                <li>Nombre: ${empleado.nombre}</li>
                <li>Empresa: ${empleado.empresa}</li>
                <li>Edad: ${empleado.edad}</li>
                </ul>         
            `;
            });
            const div = document.createElement('div');
            div.innerHTML = htmlTemplate
            document.getElementById('empleados').appendChild(div);
        }
    }
    xhr.send();

});