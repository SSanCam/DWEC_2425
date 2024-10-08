/*
Escribe un script que calcule el factorial de un número introducido por el usuario. El factorial de un número n es el producto de todos los números enteros desde 1 hasta n.
*/
let numero;
do {
    numero = parseInt(prompt("Introduce un número entero positivo: "), 10);
} while (isNaN(numero) || numero < 0);

let factorial = 1;
for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

alert("El factorial de " + numero + " es: " + factorial);
