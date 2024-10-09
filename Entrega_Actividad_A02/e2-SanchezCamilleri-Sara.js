/*
FunciónRecursiva
*/
function conceptRecursion (n, cadena){
    let repeticion = cadena;
    return repeticion.repeat(n);
}
let cadena = "bauuuba\n";
let repeticion = parseInt(prompt("Introduce el número de veces que vamos a repetir la cadena \"bauuuba\": "));
alert(conceptRecursion(repeticion,cadena));
