/**
 * Crea un array con los elementos ' Jazz' y 'Blues'
 * agrega 'Rock-n-Roll' al final
 * reemplaza el valor central por 'Classics'
 *  el codigo  debe poder funcionar para cualquier longitud, par o impar, de array
 * elimina el primer elemento del array y muestralo con un alert()
 * añade al principio los elementos 'Rap' y 'Raggae'
 */

let generosMusicales = ['Jazz', 'Blues'];

generosMusicales.push('Rock-n-Roll');

let mitad = generosMusicales.length;

if (mitad % 2 === 0){
    mitad = mitad / 2;
} else {
    Math.floor(mitad/2) + 1
}

generosMusicales.splice(mitad, mitad, 'Classics')

alert (generosMusicales.shift())

generosMusicales.unshift('Raggae','Rap')

console.log(generosMusicales)