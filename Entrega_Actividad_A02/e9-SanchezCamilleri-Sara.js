/*
Implementa un script que tome una cadena codificada en ROT13 como entrada y devuelva la cadena decodificada. 
Los caracteres no alfabéticos deben permanecer sin cambios.
*/

// Función rot13 para decodificar/codificar
function rot13(str) {
    let transformed = "";
  
    // Recorrer cada carácter de la cadena
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
  
        // Verificar si el carácter es una letra mayúscula
        if (charCode >= 65 && charCode <= 90) {
            // Desplazar 13 posiciones y usar módulo para rotar dentro del rango de letras mayúsculas
            charCode = ((charCode - 65 + 13) % 26) + 65;
        }
        // Verificar si el carácter es una letra minúscula
        else if (charCode >= 97 && charCode <= 122) {
            // Desplazar 13 posiciones y usar módulo para rotar dentro del rango de letras minúsculas
            charCode = ((charCode - 97 + 13) % 26) + 97;
        }
  
        // Agregar el carácter transformado a la nueva cadena
        transformed += String.fromCharCode(charCode);
    }
  
    // Devolver la cadena transformada
    return transformed;
}

// Ejemplo de uso
let entradaCodificada = "Guvf vf n 987 grfg zrffntr!";
let salidaDecodificada = rot13(entradaCodificada);
console.log(salidaDecodificada); // "This is a test message!"