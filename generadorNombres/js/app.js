// Agregamos un listener a el formulario
document
  .getElementById("generarNombre")
  .addEventListener("submit", agregarNombre);
// La funcion que agrega los nombres
function agregarNombre(e) {
  // variables
  // origen
  const origen = document.getElementById("origen");
  const origenSeleccionado = origen.options[origen.selectedIndex].value;
  // genero
  const genero = document.getElementById("genero");
  const generoSeleccionado = genero.options[genero.selectedIndex].value;
  // cantidad
  const cantidadNombres = document.getElementById("numero").value;

  // creamos una variable de url para irla llenando
  let url = "";
  // ponemos la url
  url += "https://uinames.com/api/?";
  // comprobamos si los campos estan llenos y despues concatenamos los valores a las url
  if (origenSeleccionado != "") {
    url += `region=${origenSeleccionado}&`;
  }
  // 8comprobamos que exista valor en el genero
  if (generoSeleccionado != "") {
    url += `gender=${generoSeleccionado}&`;
  }
  // comprobamos las cantidades
  if (cantidadNombres != "") {
    url += `amount=${cantidadNombres}&`;
  }

  // hacemos la conexion ajax
  const xhr = new XMLHttpRequest();
  // abrimos la conexion
  xhr.open("GET", url, true);
  // al cargar la peticion
  xhr.onload = function() {
    // comprobamos que el estado sea 200
    if (this.status == 200) {
      // convertimos la respuesta a un JSON
      const nombresGenerados = JSON.parse(this.responseText);
      console.log(nombresGenerados);
      //    creamos la constante con el template
      let htmlTemplate = '<h2>Nombres generados</h2>';
      htmlTemplate += '<ul class="lista">'
      //    para cada JSON
      nombresGenerados.forEach(function(nombre) {
          htmlTemplate += `
            <li>${nombre.name}</li>
          `;

      });
      htmlTemplate += '</ul>'
    //   insertamos en el html 
    document.getElementById('resultado').innerHTML = htmlTemplate;
    }
  };
  xhr.send();

  e.preventDefault();
}
