let temperatura;
let escala = "";

// Pedimos temperatura
do {

    temperatura = prompt("Introduce la temperatura en Celsius: ");
    if(isNaN(temperatura)){
        alert("Debes introducir un valor numérico.");
    }

} while (isNaN(temperatura));

// Pedimos la escala de conversión
do {
    escala = prompt("Qué escala quieres usar?\n[F]ahrenheit o [K]elkvin?.\nIntroduce sólo la inicial: ").toLowerCase();
    if (!escala){
        alert("Introduce una de las iniciales indicadas");
    }
} while (escala !== "f" && escala !== "k");

// Funciones de conversión
function convFah(celsius) {
    return (celsius * 9/5) + 32;
}

function convKelvin (celsius) {
    return celsius + 273.15;
}

// Devolvemos la conversión de la temperatura 

if (escala === "f"){
    console.log(temperatura + " grados Celsius, son en Fahrenheit: " + convFah(temperatura));
} else if (escala === "k"){
    console.log(temperatura + " grados Celsious son en Kelvin: " + convKelvin(temperatura));
} 

