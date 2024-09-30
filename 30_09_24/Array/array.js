/**
 * Crea un array con los elementos ' Jazz' y 'Blues'
 * agrega 'Rock-n-Roll' al final
 * reemplaza el valor central por 'Classics'
 *  el codigo  debe poder funcionar para cualquier longitud, par o impar, de array
 * elimina el primer elemento del array y muestralo con un alert()
 * añade al principio los elementos 'Rap' y 'Raggae'
 */

let estilosMusicales = ['Jazz', 'Blues'];

estilosMusicales.push('Rock-n-Roll');

let mitad = estilosMusicales.length;

if (mitad % 2 === 0){
    mitad = mitad + 1;
}

estilosMusicales.splice(mitad, mitad, 'Classics')

let primerEstilo = estilosMusicales.shift()
alert (primerEstilo)

estilosMusicales.splice(1,1,'Rap')
estilosMusicales.splice(1,1,'Raggae')
