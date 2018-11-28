// CAPITULO DE PROMISES

// promise con resolve: resolve quiere decir que todo esta ok
const esperando = new Promise(function(resolve, reject) {
    let descuento = false;

    if(descuento) {
        resolve('todo bien');
    } else {
        reject('error');
    }

});

esperando.then(function (mensaje) {
    console.log(mensaje);
}).catch(function (err) {
    console.log(err);
    
})