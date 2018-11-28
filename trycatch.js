// Try catch nos sirve para guardar los errores de funciones que no sepamos que hacen
function saludar (nombre) {
    console.log(nombre);

}

try {
    alerta()
} catch (error) {
    console.log(error);
}
saludar('Axel');
// usando try ctach se pueden seguir ejecutando las demas funciones