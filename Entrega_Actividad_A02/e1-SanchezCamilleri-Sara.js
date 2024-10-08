function suma (num1, num2){
    return num1 + num2;
}


let num1Rand = Math.random(1,10);
let num2Rand = Math.random(1,10);

alert("Los números aleatorios " + num1Rand + " y " + num2Rand + " suman un total de: " + suma(num1Rand,num2Rand));


let numPedido1;
let numPedido2;

do{
    numPedido1 = parseInt(prompt("Introduce un número entero: "),10);
    numPedido2 = parseFloat(prompt("Introduce otro número: "));
}while(isNaN(numPedido1) || isNaN(numPedido2))

let sumaPorTeclado = suma(numPedido1 + numPedido2);
alert("La suma de ambos números es de: " + sumaPorTeclado.toFixed(2));

