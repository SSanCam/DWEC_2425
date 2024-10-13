/*
Ejercicio7:JerarquíadeClases
Define una clase Animal con propiedadescomonombreyedad,yunmétodohablar().Creados
subclases:PerroyGato,queheredendeAnimalysobreescribanelmétodohablar().
*/
class Animal {
    nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }

    hablar (){
        alert("Éste animal está hablando!");
    }
}
/*
let perro = new Animal("El perro bob", 10);
let gato = new Animal("El gato calcetines", 5);
gato.hablar("asd");
*/
class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }
    hablar (){
        alert("Éste animal hace guau!!");
    } 
}

class Gato extends Animal {
    constructor(nombre, edad){
        super(nombre, edad);
    }
    hablar () {
        alert("Éste animal hace miau!!!!");
    }
}

let perro = new Perro("El perro bob", 5);
perro.hablar();
let gato = new Gato("Calcetines");
gato.hablar();