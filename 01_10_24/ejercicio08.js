/*
Sigue los siguientes pasos:
    Pide al usuario valores y los almacene en un array.
    Calcula la suma de todos los elementos del array.
Deja de recibir datos cuando introduce una cadena vacía.
El 0 es un valor válido.
*/

let numerosSumar = []
let suma = 0

while (true) { 

  let numero = prompt("Introduce un valor: ");
// Primero compueba si es un valor numérico válido y despues que no sea una cadena vacia 
  if (isNaN(numero) || numero === "") { 
    break; 
  }

  numerosSumar.push(parseInt(numero)); 
  suma += parseInt(numero); 

}

alert("Los valores introducidos han sido: " + numerosSumar + "\n" + "La suma total ha sido de: " + suma)
