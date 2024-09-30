# DWES_2425



Funciones definidas por el usuario

El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.

condición ? expr1 : expr2
si se cumple 'condicion' devuelve expr1, si no se cumple, pasa expr2
FUNCION COMO ARGUMENTO
Las expresiones function se utilizan cuando se necesita pasar una funcion como argumento a otra funcion
const variable = function(num) (return num = nums;)
FUNCIONES CALLBACK

Recursividad, funciones que se llaman a si mismas 


Factorial recursivo

Funciones Declarativas:

Sintaxis: function nombreDeLaFuncion(parámetro1, parámetro2, ...) { // código de la función }
Ejemplo:
function sumar(a, b) {
  return a + b;
}
Funciones de Expresión:

Sintaxis: const nombreDeLaFuncion = function(parámetro1, parámetro2, ...) { // código de la función };
Ejemplo:
const restar = function(a, b) {
  return a - b;
}
Funciones de Flecha (Arrow Functions):

Sintaxis: (parámetro1, parámetro2, ...) => { // código de la función }
Ejemplo:
const multiplicar = (a, b) => {
  return a * b;
}
Funciones Constructoras:

Sintaxis: function NombreDeLaClase(parámetro1, parámetro2, ...) { // código de la función }
Ejemplo:
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
Funciones Anónimas:

Sintaxis: function() { // código de la función }
Ejemplo:
setTimeout(function() {
  console.log("¡Hola!");
}, 2000);
Funciones Autoejecutables (IIFE):

Sintaxis: (function() { // código de la función })();
Ejemplo:
(function() {
  console.log("Esta función se ejecuta automáticamente.");
})();
Además de estas, existen otros tipos de funciones especiales como las funciones generadoras (function*) y las funciones asíncronas (async).