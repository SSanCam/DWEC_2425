let edad = parseInt(prompt("Introduce tu edad: "));
/*
alert(edad < 18 ? "Eres un pimpollo." : 
      edad > 25 ? "La subscripcion a la edad adulta no se puede cancelar." : 
      "Bienvenido a la edad adulta!");
*/

if (edad >= 18 && edad < 25){
    alert("Subscripción a \'VIDA\' ha recibido el paquete de \'+18\'.");
} else if (edad > 25){
    alert("No puedes desubscribirte del plan actual.");
} else {
    alert("Free subscription until 18.")
}