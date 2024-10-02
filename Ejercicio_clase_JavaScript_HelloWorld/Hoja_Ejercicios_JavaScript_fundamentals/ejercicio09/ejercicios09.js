let edad =  parseInt(prompt("Introduce tu edad: "));
let nacionalidad = prompt("Introduce tu nacionalidad");
nacionalidad.toUpperCase;

if (edad <=18 && nacionalidad === "ESPAÑA") {
    alert("Enhorabuena, puedes votar!");
} else {
    alert("Aún no es tu momento de votar.");
}