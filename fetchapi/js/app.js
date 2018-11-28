const divResultado = document.querySelector('#resultado');

document.querySelector('#txtBtn').addEventListener('click', cargarTXT);
document.querySelector('#jsonBtn').addEventListener('click', cargarJSON);
document.querySelector('#apiBTN').addEventListener('click', cargarREST);


// CARGA EL ARCHIVO DE TEXTO
function cargarTXT() {
    fetch('datos.txt')
        .then( res =>res.text())
        .then( data =>divResultado.innerHTML = data)
        .catch( error => console.log(error));
}

// CARGA EL JSON EN EL HTML

function cargarJSON () {
    fetch('empleados.json')
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(empleado => {
                html += `
                    <li> ${empleado.nombre} ${empleado.puesto} </li>
                `;
            });
            divResultado.innerHTML = html;
        })
        .catch(err => console.log(err));
    
}

function cargarREST() {
    fetch('http://picsum.photos/list')
        .then( res => res.json())
        .then( imagenes => {
            let html = '';

            imagenes.forEach(imagen => {
                html += `
                    <div>
                    <a target="_blank" href="${imagen.post_url}">
                    <p> ${imagen.author}</p>
                    </div>
                
                `;
            });
            divResultado.innerHTML = html;

        });
}