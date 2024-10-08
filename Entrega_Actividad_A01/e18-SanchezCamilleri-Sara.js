/*
Escribe un script que pida al usuario un número entero de varios dígitos y sume todos los dígitos del número. Muestra el resultado en un alert().
*/

do {
    numero = parseInt(prompt("Introduce un número entero de varios dígitos: "),10);
}while (isNaN(numero));

let digitos = numero.toString().split("");
let suma = 0;
for (i = 0; i < digitos.length; i ++){
    suma += parseInt(digitos[i], 10);
}
alert("La suma total de tus digitos es de: " + suma);