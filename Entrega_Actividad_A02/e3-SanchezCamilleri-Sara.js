/*
ArraysyOperacionesAgregadas
*/
let listaNumeros = [5, 12, 8, 130, 44];

alert ("Tenemos una lista de números: " + (listaNumeros).toString());

// Funcion de filtrado
let numeroPedido = parseInt(prompt("Introduce un número entero y veremos cuántos de la lista son mayores: "));
let numerosMayores = listaNumeros.filter(function(numero){
    return numero > numeroPedido
});
alert("Los números mayores al que has proporcionado: " + (numerosMayores).toString());

// Función de reducción
alert ("Vamos a sumar todos los números de la lista.");
let sumaTotal = listaNumeros.reduce(function(acumulador, valorActual) {
    return acumulador + valorActual;
}, 0);
alert("La suma total es de " + sumaTotal);

// Función de recolección
let numPares = listaNumeros.map(function(num) {
        return num % 2 === 0 ? num : null;
})

alert("Los números pares de ésta lista son: " + numPares);