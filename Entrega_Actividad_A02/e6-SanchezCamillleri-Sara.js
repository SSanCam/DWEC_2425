/*
Ejercicio6:FiltradoyTransformacióndeDatos
Crea una función filtrarYTransformar() que reciba un array de números y devuelva un nuevo
arrayquecontengasololosnúmerosimpares,multiplicadospor2.Utilizafilter()ymap().
*/

let numeros = [42, 17, 8, 23, 91, 56, 3, 77];

function filtrarYTransformar (lista){
    let impares = lista.filter(function (impar){
        return impar % 2 !== 0;
    })
    let resultado = impares.map(function(numero){
        return numero * 2;
    })
    return resultado
}

alert ("Vamos a tomar los impares de nuestra lista:\n" + numeros + "\ny mostraremos el resultado de cada uno al multiplicarlo por dos\n" + filtrarYTransformar(numeros));