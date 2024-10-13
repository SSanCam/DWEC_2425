/*
Crea una clase Estudiante que contenga propiedades como nombre, edad, y notas. 
Incluye métodos para agregar una nota, calcular el promedio y determinar si ha aprobado. 
Crea un objeto Estudiante y utiliza sus métodos para realizar pruebas.
*/
class Estudiante {
    nombre;
    edad;
    notas;

    // Constructor
    constructor(nombre, edad, notas) {
        this.nombre = nombre,
        this.edad = edad,
        this.notas = notas
    }

    // Métodos
    agregarNota(nuevaNota){
        this.notas.push(nuevaNota);
    }

    notaMedia(){
        let media = 0;
        // Verificamos si hay notas
        if (this.notas.length > 0){
            for (let nota of this.notas){
            media += nota;
        }
        return media / this.notas.length; // Retorna el promedio

        } else {
            return "Aún no tienes notas registradas." // Caso de notas sin registrar.
        }
        
    }

    aprobado() {
        if (this.notaMedia() >= 5){
            return "Tu media es superior a 5, has aprobado."
        } else {
            return "Tu nota media es inferior a 5, has suspendido."
        }
    }
}

// Crear un objeto Estudiante y probar los métodos
let paquito = new Estudiante("Paquito", 18, []);
console.log(paquito.notaMedia()); // Debería mostrar el promedio de las notas
console.log(paquito.aprobado()); // Debería indicar si ha aprobado o no
paquito.agregarNota(6); // Agregar una nueva nota
paquito.agregarNota(8);
console.log(paquito.notaMedia()); // Verificar el nuevo promedio
console.log(paquito.aprobado()); // Verificar si sigue aprobado