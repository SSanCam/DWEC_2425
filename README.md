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


## Arrays

- *for ... of*

- *while*

- *for* tradicional

- *forEach(function)*

- *map()*
    Parecido al forEach
  

// ------------------------------------------------- \\
01/10/24

  ejercicio08

## OBJETOS
· freeze

· seal

> recorrer objetos

for...in


referencias y copias



### 1. **An Introduction**:
   - **Descripción**: Introducción a JavaScript, su historia y uso. Se destaca que es un lenguaje de programación del lado del cliente para la web, pero también se usa en servidores (Node.js).
   - **Sintaxis básica**:
     ```javascript
     console.log("Hello, world!");
     ```

### 2. **JavaScript Fundamentals**:
   - **Descripción**: Conceptos básicos como variables, operadores, estructuras de control y bucles.
   - **Sintaxis**:
     ```javascript
     let name = "Alice"; // variable
     const PI = 3.14; // constante
     
     if (name === "Alice") {
         console.log("Hello Alice");
     } else {
         console.log("Hello stranger");
     }
     ```

### 3. **Code Quality**:
   - **Descripción**: Uso de buenas prácticas de codificación como la legibilidad del código, indentación y uso de linters.
   - **Sintaxis**:
     ```javascript
     function greet(user) {
         return `Hello, ${user}`;
     }
     ```

### 4. **Objects: the basics**:
   - **Descripción**: Introducción a los objetos y sus propiedades.
   - **Sintaxis**:
     ```javascript
     let person = {
         name: "John",
         age: 30
     };
     console.log(person.name);
     ```

### 5. **Data Types**:
   - **Descripción**: Los tipos de datos en JavaScript incluyen primitivos como números, cadenas, booleanos, y no primitivos como objetos y funciones.
   - **Sintaxis**:
     ```javascript
     let number = 42; // number
     let text = "Hello"; // string
     let isTrue = true; // boolean
     ```

### 6. **Advanced working with functions**:
   - **Descripción**: Funciones como ciudadanos de primera clase, funciones de orden superior, y funciones anónimas.
   - **Sintaxis**:
     ```javascript
     function greet(name) {
         return `Hello, ${name}`;
     }
     
     let greetAnonymous = function(name) {
         return `Hello, ${name}`;
     };
     ```

### 7. **Object properties configuration**:
   - **Descripción**: Configuración de propiedades en objetos usando `Object.defineProperty`.
   - **Sintaxis**:
     ```javascript
     let person = {};
     Object.defineProperty(person, "name", {
         value: "Alice",
         writable: false
     });
     ```

### 8. **Prototypes, inheritance**:
   - **Descripción**: Uso de prototipos para herencia en JavaScript.
   - **Sintaxis**:
     ```javascript
     function Animal(name) {
         this.name = name;
     }
     Animal.prototype.speak = function() {
         console.log(`${this.name} makes a sound`);
     };
     
     let dog = new Animal("Dog");
     dog.speak();
     ```

### 9. **Classes**:
   - **Descripción**: Sintaxis de clases introducida en ES6 para facilitar el uso de la herencia.
   - **Sintaxis**:
     ```javascript
     class Animal {
         constructor(name) {
             this.name = name;
         }
         speak() {
             console.log(`${this.name} makes a sound`);
         }
     }
     
     let cat = new Animal("Cat");
     cat.speak();
     ```

### 10. **Error handling**:
   - **Descripción**: Manejo de errores usando `try`, `catch`, y `finally`.
   - **Sintaxis**:
     ```javascript
     try {
         let x = 5;
         let y = x / 0;
     } catch (error) {
         console.log("Error:", error);
     } finally {
         console.log("This will always run");
     }
     ```

### 11. **Promises, async/await**:
   - **Descripción**: Uso de promesas para manejar código asíncrono, y la sintaxis `async/await` para hacerlo más legible.
   - **Sintaxis**:
     ```javascript
     let promise = new Promise((resolve, reject) => {
         setTimeout(() => resolve("Success"), 1000);
     });
     
     async function asyncCall() {
         let result = await promise;
         console.log(result);
     }
     asyncCall();
     ```

### 12. **Generators, advanced iteration**:
   - **Descripción**: Uso de generadores para crear iteradores personalizados.
   - **Sintaxis**:
     ```javascript
     function* generator() {
         yield 1;
         yield 2;
         yield 3;
     }
     
     let gen = generator();
     console.log(gen.next().value); // 1
     ```

### 13. **Modules**:
   - **Descripción**: Uso de módulos en JavaScript para dividir el código en archivos separados.
   - **Sintaxis**:
     ```javascript
     // En module.js
     export let greeting = "Hello";
     
     // En main.js
     import { greeting } from './module.js';
     console.log(greeting);
     ```

### 14. **Miscellaneous**:
   - **Descripción**: Varios temas avanzados como `Map`, `Set`, `WeakMap`, `WeakSet`, y más.
   - **Sintaxis**:
     ```javascript
     let map = new Map();
     map.set("key", "value");
     console.log(map.get("key")); // "value"
     
     let set = new Set([1, 2, 3]);
     console.log(set.has(1)); // true
     ```
