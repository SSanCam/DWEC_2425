/*
Escribe un script que devuelva true si una cadena de texto contiene 'DAW', de lo contrario false.
Debe ser no case sensitive.
*/
let resultado ;
let palabra = prompt("Introduce una palabra (pista: DAW)");

palabra = palabra.toUpperCase();

if (palabra === "DAW"){
    resultado = true;
} else {
    resultado = false;
}

console.log(resultado); // Sale el mensaje en la consola, en lugar de pop-up