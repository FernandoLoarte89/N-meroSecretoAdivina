let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //ESTA ES LA LISTA
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto; 
    return;
}
function verificarIntento() {    
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 

    if (numeroDeUsuario === numeroSecreto) { // ACA SE IMPLEMENTA LA AYUDA AL USUARIO, CON MENSAJES EN PANTALLA
        asignarTextoElemento("P",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else { // ESTAS LINEAS DE TEXTO SE ACTIVAN CUANDO EL USUARIO NO ACIERTA
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("P","El número secreto es menor");
        } else {
            asignarTextoElemento("P","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    let valorCaja = document.getElementById('valorUsuario').value = ''; //ESTA FUNCION LIMPIA LA CAJA DONDE USUARIO DIGITA VALORES
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1); // ACA VAMOS A PERMITIR QUE EL NUMERO GENERADO NO SE REPITA
    // SI EL NRO GENERADO ESTA INCLUIDO EN LA LISTA HACER ESTO.. SINO... OTRA

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //SI YA SORTEAMOS TOSOS LOS NUMEROS??
    if(listaNumerosSorteados.length == numeroMaximo) {  // ESTA ES EL REVALIDADOR PARA NO CAER EN RECURSIBIDAD (SE REPITA INDEFINIDAMENTE)
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {     // EL INCLUDE BARRE EL ARREGLO Y VERIFICA SI EXISTE, DEVUELVE UN BOLEANO(TRUE O FALSE)
        return generarNumeroSecreto();
         } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
         }
    }
}
function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del número secreto!");
    asignarTextoElemento("P",`Escoje un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    // LIMPIAR LA CAJA
    limpiarCaja();
    // INDICAR MENSAJE DE INTERVALO DE NUMEROS
    // GENERAR EL NUMERO ALEATORIO
    // INICIALIZAR EL NUMERO DE INTENTOS
    condicionesIniciales();
    // DESHABILITAR EL BOTON DE 'NUEVO JUEGO' CUANDO SE EMPIEZA A JUGAR
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();