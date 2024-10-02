let numero = Number(prompt("Introduce un numero entero"));
if (numero === 0){
    alert("El número es 0.") ;
} else {
    alert((numero < 0) ?"El número es negativo." : "El número es positivo."); 
}
