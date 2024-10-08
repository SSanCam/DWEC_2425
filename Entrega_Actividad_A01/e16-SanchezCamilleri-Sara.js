// Pide al usuario un número por teclado y di si es par o impar.
// Ininializamos nuestra variable.
let numero;
// Creamos un bloque try-catch para elevar un mensaje de error si ocurriese
try {
    // Creamos un bloque do-while para continuar pidiendo el dato, hasta que sea del tipo correcto.
    do{
        // Pedimos un número y lo formateamos a int.
        numero = parseInt(prompt("Introduce un número entero: "), 10);
        
        // En caso de que el dato introducido no sea numérico, mostramos mensaje
        if (isNaN(numero)){
            alert("Introduce un número entero.");
        // En caso de que sea entero, verificamos si es par o impar y mostramos mensaje.
        } else {
            if(numero % 2 === 0){
                alert("El número " + numero + " es par.");
            } else {
                alert("El numero " + numero + " es impar.");
            }
        }

    } while (isNaN(numero));

    } catch (error){
        // Mensaje de error en caso de que ocurra.
        console.error("Error inesperado.");
}