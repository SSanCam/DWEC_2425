/*
Crea un bucle que pida al usuario su edad 5 veces y calcule cuántas veces el usuario ha introducido un valor mayor o igual a 18.
*/
let edad;
let mayorEdad = 0;
for (i = 0; i < 5; i++){
    edad = parseInt(prompt("Introduce tu edad: "));
    if (edad >= 18){
        mayorEdad++;
    }
}

alert("De 5 veces, has introducido una edad mayor o igual a 18 un total de: " + mayorEdad + " veces.");