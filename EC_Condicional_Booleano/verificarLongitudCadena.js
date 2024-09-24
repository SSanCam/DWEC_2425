/*
Escribe un script que verifique la longitud de una cadena de texto y, si excede de maxleth,
reemplaza el final de str con el carácter de puntos suspensivos, para hacer su longitud igual a maxlength. 
Debe devolver la cadena truncada.
*/
longitud = 5;
let cadena = prompt("Introduce una frase:");
let resultado = ""; //Inicializo la cadena vacía.

if (cadena.length > longitud){

    resultado = cadena.slice(0, longitud);
    resultado += "..." ;
    console.log(resultado);

}else{ 
    console.log(cadena);
}