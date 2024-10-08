// Pide al usuario un número por teclado y di si es par o impar.
let numero;

try {
    do{
        numero = parseInt(prompt("Introduce un número entero: "), 10);
        
        if (isNaN(numero)){
            alert("Introduce un número entero.");
        } else {
            if(numero % 2 === 0){
                alert("El número " + numero + " es par.");
            } else {
                alert("El numero " + numero + " es impar.");
            }
        }

    } while (isNaN(numero));

    } catch (error){
        console.error("Error inesperado.");
}