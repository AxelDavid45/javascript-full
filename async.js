// FUNCIONES ASINCRONAS

// SINTAXIS
async function cargarClientes () {
    const clientes = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Clientes descargados...')

        }, 2000);
    });

    const error = true;

    if(!error) {
        const respuesta = await clientes;
        return respuesta;
    } else {
        await Promise.reject('Hubo un error');
    }
}

cargarClientes()
    .then(res => console.log(res))
    .catch(error => console.log(error));