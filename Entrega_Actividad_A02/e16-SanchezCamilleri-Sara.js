/*
La empresa "Aventuras Fantásticas S.L." está desarrollando un juego de aventura en el que los jugadores explorarán un mundo lleno de criaturas mágicas. Necesitan crear una estructura de datos para representar a los personajes del juego.

La estructura de datos en esta fase del desarrollo será la de un objeto, en el que se necesitará de cada personaje las siguientes propiedades:

Nombre
Raza (por ejemplo, "Humano", "Elfo", "Enano")
Nivel (comenzará en 1)
Puntos de Vida (comenzará en 100)

Además, para hacer pruebas, se almacenarán los personajes en un array. 
Inicialmente habrá 2 personajes precargados en el sistema.

Se deberán crear métodos para gestionar el combate:

Atacar: Cuando un personaje ataque, se deberá restar una cantidad de puntos de vida al enemigo (por ejemplo, 10 puntos por ataque).
Recuperar Vida: Se deberá crear un método que permita al personaje recuperar vida. Al recuperar, se sumarán 20 puntos de vida, pero no se podrá exceder el máximo de 100 puntos.
Subir Nivel: Cada vez que un personaje alcance 0 puntos de vida, se deberá mostrar un alerta indicando que el personaje ha sido derrotado y restablecerlo a su estado inicial (nivel 1 y 100 puntos de vida).
*/

class Personaje {
    // Constructor básico
    constructor(nombre, raza){
        this.nombre = nombre;
    this.raza = raza;
    this.nivel = 1;
    this.hp = 100;
    }
}

//Creamos dos personajes:
let pj1 = new Personaje("Aragorn", "Humano");
let pj2 = new Personaje("Legolas", "Elfo");

// Almacenamos los personajes en un Array
let personajes = [pj1, pj2];

console.log("Nuestros personajes son: " + personajes);

// Métodos

// Método para atacar a otro personaje
function attack(enemigo) {
    console.log()
}

function heal() {

}

function levelUp() {

}