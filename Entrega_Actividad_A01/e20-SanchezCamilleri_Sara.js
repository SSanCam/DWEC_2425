/*
Escribe un script que determine si una cadena de texto es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
*/
let numero;
do{
    numero = prompt("Introduce un número entero: ");    
    numero = Number(numero); 
} while (isNaN(numero) || !Number.isInteger(numero)); 

numero = Math.abs(numero);
let cadenaNumeros = numero.toString();
let cadenaReves = cadenaNumeros.split("").reverse().join("");

if (cadenaNumeros === cadenaReves){
    alert("El número es palíndromo.")
} else {
    alert("El número no es palíndromo.")
}