let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroSecreto === numeroUsuario) {
        //El usuario acertó y gano el juego
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);

        //Habilitar botón para reiniciar el juego
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acertó
        if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El número es mayor')
        } else {
            asignarTextoElemento('p', 'El número es menor')
        }
        intentos++;
        lipiarCaja();
    }

    return;
}

function lipiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function generarNumSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números')
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar Caja
    lipiarCaja();
    //Indicar mensaje de intervalo de numero
    //Generar el numero secreto
    //Inicializar el numero de intentos
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();