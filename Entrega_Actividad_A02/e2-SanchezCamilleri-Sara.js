function conceptRecursion (n, cadena){
    let repeticion = cadena + "\n";
    return repeticion.repeat(n);
}
let cadena = "bauuuba";
let repeticion = parseInt(prompt("Introduce el número de veces que vamos a repetir la cadena \"bauuuba\": "));
alert(conceptRecursion(repeticion,cadena));